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
}
function validateform1() {
    var name = document.myform1.username1.value;
    var password = document.myform1.password1.value;

    if (name == null || name == "") {
        alert("Tài khoản không được để trống");
        return false;
    } else if (password.length < 6) {
        alert("Mật khẩu phải ít nhất 6 kí tự");
        return false;
    }
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
        email.focus;
        return false;
    }
    else{
        alert('OK roi day, Email nay hop le.');
    }
}
