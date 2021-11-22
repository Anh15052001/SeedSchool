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

var del;

$(document).on('click', '.del-event-btn', function() {
    del = $(this).parents('.widget-box');
});

$(document).on('click', '#del-event', function() {
    del.remove();

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
        this_widget = mod_btn.parents('.widget-box');

    if (mod_btn.text() == "Chỉnh sửa") {
        this_widget.find('.event-form').prop('disabled', false);
        mod_btn.text("Lưu lại");
    } else {
        this_widget.find('.event-form').prop('disabled', true);
        mod_btn.text("Chỉnh sửa");
    }
});

$(document).on('click', '#add-event', function() {
    let name = $('#add-event-dialog #add-name'),
        participant = $('#add-event-dialog #add-participant'),
        condition = $('#add-event-dialog #add-condition'),
        time = $('#add-event-dialog #add-time'),
        date = $('#add-event-dialog #add-date'),
        place = $('#add-event-dialog #add-place');

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
        "<input class='form-control event-form' type='text' value='" + name.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Đối tượng" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control event-form' type='text' value='" + participant.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Điều kiện" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control event-form' type='text' value='" + condition.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Thời gian" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control event-form' type='time' value='" + time.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Ngày diễn ra" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control event-form' type='date' value='" + date.val() + "' min='2001-02-11' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='form-group row'>" +
        "<label class='col-md-2 col-form-label'>" + "Địa điểm" + "</label>" +
        "<div class='col-md-10'>" +
        "<input class='form-control event-form' type='text' value='" + place.val() + "' disabled>" +
        "</div>" +
        "</div>" +

        "<div class='row flex' style='justify-content: flex-end;'>" +
        "<button class='blue-btn mod-event-btn' type='button' style='margin-right: 15px; text-align: center; width: 100px;'>" + "Chỉnh sửa" + "</button>" +
        "<button class='red-btn del-event-btn' data-toggle='modal' data-target='#del-event-dialog' data-backdrop='static' type='button' style='margin-right: 15px;'>" + "Xóa hoạt động" + "</button>" +
        "</div>" +
        "</form>" +
        "</div>" +
        "</div>"
    );

    $('#add-event-dialog form')[0].reset();

    $("html, body").stop().animate({ scrollTop: 0 }, 500, 'swing');
});