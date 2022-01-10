const bars = document.querySelector(".bars");
const list = document.querySelector(".nav-list");
const route = document.querySelector(".route");
bars.addEventListener("click", () => {
  list.classList.toggle("show");
});
const token = localStorage.getItem("token");
const role = localStorage.getItem("ROLE");
if (role === "ROLE_TEACHER") {
  route.innerHTML =
    "<a href='teacher-muster.html' class='nav-link'>Giáo viên</a>";
} else if (role === "ROLE_STUDENT") {
  route.innerHTML =
    "<a href='./student/student-index.html' class='nav-link'>Học sinh</a>";
}
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
