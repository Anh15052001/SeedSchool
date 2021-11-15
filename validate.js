var postAPI='https://seedschool.herokuapp.com/v2/api-docs'
fetch(postAPI)
    .then(function (response){
        return response.json();
    })
    .then(function (posts) {
        console.log(posts)
    }).catch(function (err){
        console.log('Có lỗi')
})
alert('Hi javascrpi')

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
    var postAPI='https://jsonplaceholder.typicode.com/posts'
    fetch(postAPI)
        .then(function (response){
          return response.json();
    })
        .then(function (posts) {
             console.log(posts)
        })
}
