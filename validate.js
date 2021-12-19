document.getElementById("myform").addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.myform.username.value;
  var password = document.myform.password.value;
  if (name == null || name == "") {
    alert("Tài khoản không được để trống");
    return false;
  } else if (password.length < 6) {
    $(".alert--error").removeClass("hide");
    $(".alert--error").addClass("show");
    $(".alert--error").addClass("showAlert");
    $(".close-btn").click(function () {
      $(".alert--error").addClass("hide");
      $(".alert--error").removeClass("show");
    });
    // alert("Mật khẩu phải ít nhất 6 kí tự");
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
      console.log(posts);
      if (!posts.token) {
        document.getElementById("error").innerHTML =
          "Incorrect username or password";
        document.getElementById("username").focus();
      } else if (posts.token) {
        $(".alert--success").removeClass("hide");
        $(".alert--success").addClass("show");
        $(".alert--success").addClass("showAlert");
        $(".close-btn").click(function () {
          $(".alert--success").addClass("hide");
          $(".alert--success").removeClass("show");
        });
        // alert("Login successfully!");
        localStorage.setItem("token", posts.token);
        window.location.replace("./index.html");
      }
    })
    .catch((error) => console.log(error));
});
