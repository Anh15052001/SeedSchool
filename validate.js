


function validateform() {
    var name = document.myform.username.value;
    var password = document.myform.password.value;

    if (name == null || name == "") {
        alert("Tài khoản không được để trống");
        return false;
    } else if (password.length < 6) {
        alert("Mật khẩu phải ít nhất 6 kí tự");
        return false;
    }
    var postAPI='https://seedschool.herokuapp.com/api/v1/account/login'
    fetch(postAPI,{

        method:"POST",

        body: JSON.stringify({

            username: "string",

            password: "string"

        }),

        headers: {

            "Content-type": "application/json; charset=UTF-8"

        }

    })
        .then(function (response){
          return response.json();
    })
        .then(function (posts) {
             console.log(posts)
        })
}
