function putName() {
  var x = document.getElementById("urname").value;
  document.getElementById("name").innerHTML = x;
  localStorage.setItem("username", x);
  }
