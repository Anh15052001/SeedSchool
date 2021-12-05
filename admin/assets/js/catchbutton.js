// create-menu.html

$('#mod-menu-btn').click(function() {
    if ($('#mod-menu-btn').text() == "Chỉnh sửa thực đơn") {
        $('.menu-form').prop('disabled', false);
        $('#mod-menu-btn').text("Lưu thay đổi");
        $('#mod-menu-btn').removeClass('green-btn');
        $('#mod-menu-btn').addClass('blue-btn');
    } else {
        $('.menu-form').prop('disabled', true);
        $('#mod-menu-btn').text("Chỉnh sửa thực đơn");
        $('#mod-menu-btn').removeClass('blue-btn');
        $('#mod-menu-btn').addClass('green-btn');
    }
});

// change-info.html

$('#change-info-btn').click(function() {
    if ($('#change-info-btn').text() == "Chỉnh sửa thông tin") {
        $('.info-form').prop('disabled', false);
        $('#change-info-btn').text("Lưu thay đổi");
        $('#change-info-btn').removeClass('green-btn');
        $('#change-info-btn').addClass('blue-btn');
    } else {
        $('.info-form').prop('disabled', true);
        $('#change-info-btn').text("Chỉnh sửa thông tin");
        $('#change-info-btn').removeClass('blue-btn');
        $('#change-info-btn').addClass('green-btn');
    }
});

// create-event.html

var del_event;

$(document).on('click', '.del-event-btn', function() {
    del_event = $(this).parents('.widget-box');
});

$(document).on('click', '#del-event', function() {
    del_event.remove();

    if (!$('#event-box-list>.widget-box').length) {
        $('#event-box-list').prepend(
            "<div class='widget-box' id='no-event'>" +
            "<div class='wc-title' style='border: none'>" +
            "<h4>" +
            "Hiện chưa có hoạt động nào" +
            "</h4>" +
            "</div>" +
            "</div>"
        );
    }

    $("html, body").stop().animate({ scrollTop: 0 }, 0, 'swing');
});

$(document).on('click', '.mod-event-btn', function() {
    let mod_btn = $(this),
        this_widget = mod_btn.parents('.widget-box'),
        name = this_widget.find('.input-event-name');

    if (mod_btn.text() == "Chỉnh sửa") {
        this_widget.find('.form-control').prop('disabled', false);
        mod_btn.text("Lưu lại");
    } else {
        this_widget.find('.form-control').prop('disabled', true);
        this_widget.find('h4').text(name.val());
        mod_btn.text("Chỉnh sửa");
    }
});

$(document).on('click', '#add-event', function() {
    let name = $('#add-event-dialog #add-event-name'),
        participant = $('#add-event-dialog #add-event-participant'),
        condition = $('#add-event-dialog #add-event-condition'),
        time = $('#add-event-dialog #add-event-time'),
        date = $('#add-event-dialog #add-event-date'),
        place = $('#add-event-dialog #add-event-place'),
        fee = $('#add-event-dialog #add-event-fee');

    if ($('#event-box-list>#no-event').length) {
        $('#no-event').remove();
    }

    $('#event-box-list').prepend(
        "<div class='widget-box'>" +
        "<div class='wc-title'>" +
        "<h4>" + name.val() + "</h4>" +
        "</div>" +
        "<div class='widget-inner'>" +
        "<form class='edit-profile m-b30'>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Tên hoạt động" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control' type='text' value='" + name.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Đối tượng" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control' type='text' value='" + participant.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Điều kiện" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control' type='text' value='" + condition.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Thời gian" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control' type='time' value='" + time.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Ngày diễn ra" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control' type='date' value='" + date.val() + "' min='2001-02-11' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Địa điểm" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control' type='text' value='" + place.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Phí tham gia" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control' type='number' value='" + fee.val() + "' step=1000 disabled>" +
        "</div>" +
        "</div>" +

        "<div class='row flex' style='justify-content: flex-end;'>" +
        "<button class='green-btn ntf-event-btn' type='button' style='margin-right: 15px;' data-toggle='modal' data-target='#ntf-event-dialog' data-backdrop='static'>" + "Thông báo" + "</button>" +
        "<button class='blue-btn mod-event-btn' type='button' style='margin-right: 15px; width: 100px'>" + "Chỉnh sửa" + "</button>" +
        "<button class='red-btn del-event-btn' type='button' style='margin-right: 15px;' data-toggle='modal' data-target='#del-event-dialog' data-backdrop='static'>" + "Xóa hoạt động" + "</button>" +
        "</div>" +
        "</form>" +
        "</div>" +
        "</div>"
    );

    $('#add-event-dialog form')[0].reset();

    $("html, body").stop().animate({ scrollTop: 0 }, 500, 'swing');
});

// create-fee.html

var del_fee;

$(document).on('click', '.del-fee-btn', function() {
    del_fee = $(this).parents('.widget-box');
});

$(document).on('click', '#del-fee', function() {
    del_fee.remove();

    if (!$('#fee-box-list>.widget-box').length) {
        $('#fee-box-list').prepend(
            "<div class='widget-box' id='no-fee'>" +
            "<div class='wc-title' style='border: none'>" +
            "<h4>" +
            "Hiện chưa có khoản thu nào" +
            "</h4>" +
            "</div>" +
            "</div>"
        );
    }

    $("html, body").stop().animate({ scrollTop: 0 }, 0, 'swing');
});

$(document).on('click', '.mod-fee-btn', function() {
    let mod_btn = $(this),
        this_widget = mod_btn.parents('.widget-box'),
        name = this_widget.find('.input-fee-name');

    if (mod_btn.text() == "Chỉnh sửa") {
        this_widget.find('.form-control').prop('disabled', false);
        mod_btn.text("Lưu lại");
    } else {
        this_widget.find('.form-control').prop('disabled', true);
        this_widget.find('h4').text(name.val());
        mod_btn.text("Chỉnh sửa");
    }
});

$(document).on('click', '#add-fee', function() {
    let name = $('#add-fee-dialog #add-fee-name'),
        participant = $('#add-fee-dialog #add-fee-participant'),
        fee = $('#add-fee-dialog #add-fee-fee'),
        date = $('#add-fee-dialog #add-fee-date');

    if ($('#fee-box-list>#no-fee').length) {
        $('#no-fee').remove();
    }

    $('#fee-box-list').prepend(
        "<div class='widget-box'>" +

        "<div class='wc-title'>" +
        "<h4>" + name.val() + "</h4>" +
        "</div>" +

        "<div class='widget-inner'>" +
        "<form class='edit-profile m-b30'>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>Tên khoản thu</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control input-fee-name' type='text' value='" + name.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>Đối tượng</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control input-fee-participant' type='text' value='" + participant.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>Thành tiền</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control input-fee-fee' type='number' value='" + fee.val() + "' max='100000' min='0' step='1000' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>Hạn đóng</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control input-fee-date' type='text' value='" + date.val() + "' min='2001-02-11' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='row flex' style='justify-content: flex-end;'>" +
        "<button class='green-btn ntf-fee-btn' type='button' style='margin-right: 15px;' data-toggle='modal' data-target='#ntf-fee-dialog' data-backdrop='static'>Thông báo</button>" +
        "<button class='blue-btn mod-fee-btn' type='button' style='margin-right: 15px; width: 100px'>Chỉnh sửa</button>" +
        "<button class='red-btn del-fee-btn' type='button' style='margin-right: 15px;' data-toggle='modal' data-target='#del-fee-dialog' data-backdrop='static'>Xóa khoản thu</button>" +
        "</div>" +

        "</form>" +
        "</div>" +

        "</div>"
    );

    $('#add-fee-dialog form')[0].reset();

    $("html, body").stop().animate({ scrollTop: 0 }, 500, 'swing');
});