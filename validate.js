document.getElementById("myform").addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.myform.username.value;
  var password = document.myform.password.value;
  if (name == null || name == "") {
    alert("Tài khoản không được để trống");
    return false;
  } else if (password.length < 6) {
    alert("Mật khẩu phải ít nhất 6 kí tự");
    return false;
  }
  var postAPI = "https://seedschool.herokuapp.com/api/v1/account/login";

  fetch(postAPI, {
    method: "POST",
    body: JSON.stringify({
      username: name,

      password: password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (posts) {
      if (posts.error) {
        alert("Login failure!");
        console.log(posts);
      } else {
        alert("Login successfully!");
        console.log(posts);
        localStorage.setItem("token", posts.token);
        window.location.replace("./admin/index.html");
      }
    })
    .catch((error) => console.log(error));
});
