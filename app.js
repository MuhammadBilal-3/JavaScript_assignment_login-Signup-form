function togglePasEye() {
  const name = document.getElementById("fullName").value;
  const userName = document.getElementById("userName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!userName || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const myData = { userName, email, password };
  users.push(myData);

  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful");
}