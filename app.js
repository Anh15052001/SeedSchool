const bars = document.querySelector(".bars");
const list = document.querySelector(".nav-list");

bars.addEventListener("click", () => {
  list.classList.toggle("show");
});
const token = localStorage.getItem("token");
function change(e) {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.replace("./login.html");
  } else {
    localStorage.removeItem("token");
    window.location.replace("./index.html");
  }
}
if (token) {
  document.getElementById("login").innerHTML = "Đăng xuất";
}
