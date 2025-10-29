function userDetail() {
  const fullName = document.getElementById("fullName").value.trim();
  const userName = document.getElementById("userName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  function showSignup() {
  document.getElementById("loginDiv").style.display = "none";
  document.getElementById("signupDiv").style.display = "block";
}

function showLogin() {
  document.getElementById("signupDiv").style.display = "none";
  document.getElementById("loginDiv").style.display = "block";

}
  if (!fullName || !userName || !email || !password) {
    alert(" Please fill in all fields.");
    return false;
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert(" Please enter a valid email address.");
    return false;
  }

  
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.email === email);
  if (exists) {
    alert(" This email is already registered!");
    return false;
  }

  users.push({ fullName, userName, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully! Please log in now.");
  document.getElementById("checkbox").checked = false; 
  document.getElementById("signupForm").reset();
  return false;
}


function loginUser() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert(" Please enter both email and password.");
    return false;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert("✔ Login successful!");
    localStorage.setItem("activeUser", JSON.stringify(user));
    window.location.href = "welcome.html";
  } else {
    alert(" Invalid email or password.");
  }
  return false;
}