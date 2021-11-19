var del, mod;

$('#add-btn').click(function() {
    var name = $('#add-event-dialog #add-name'),
        participant = $('#add-event-dialog #add-participant'),
        condition = $('#add-event-dialog #add-condition'),
        time = $('#add-event-dialog #add-time'),
        date = $('#add-event-dialog #add-date'),
        place = $('#add-event-dialog #add-place');

    if ($('#event-box-list>#no-event').length) {
        $('#no-event').remove();
    }

    $('.add-event-btn').before(
        "<div class='widget-box'>" +
        "<div class='wc-title'>" +
        "<h4 class='event-name'>" + name.val() + "</h4>" +
        "</div>" +
        "<div class='widget-inner'>" +
        "<div class='noti-box-list'>" +
        "<ul>" +
        "<li>" +
        "<span class='notification-text'>" +
        "<span>" + "<strong>" + "Đối tượng:" + "</strong>" + "</span>" +
        "<span class='event-participant'>" + participant.val() + "</span>" +
        "</span>" +
        "</li>" +
        "<li>" +
        "<span class='notification-text'>" +
        "<span>" + "<strong>" + "Điều kiện:" + "</strong>" + "</span>" +
        "<span class='event-condition'>" + condition.val() + "</span>" +
        "</span>" +
        "</li>" +
        "<li>" +
        "<span class='notification-text'>" +
        "<span>" + "<strong>" + "Thời gian:" + "</strong>" + "</span>" +
        "<span class='event-time'>" + time.val() + "</span>" +
        "</span>" +
        "</li>" +
        "<li>" +
        "<span class='notification-text'>" +
        "<span>" + "<strong>" + "Ngày:" + "</strong>" + "</span>" +
        "<span class='event-date'>" + date.val() + "</span>" +
        "</span>" +
        "</li>" +
        "<li>" +
        "<span class='notification-text'>" +
        "<span>" + "<strong>" + "Place:" + "</strong>" + "</span>" +
        "<span class='event-place'>" + place.val() + "</span>" +
        "</span>" +
        "</li>" +
        "<li style='display: flex; justify-content: flex-end'>" +
        "<button class='modify-event-btn' data-toggle='modal' data-target='#modify-event-dialog' data-backdrop='static'>" + "Chỉnh sửa" + "</button>" +
        "<button class='delete-event-btn' data-toggle='modal' data-target='#delete-event-dialog' data-backdrop='static'>" + "Xóa hoạt động" + "</button>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "</div>"
    );
    $('#add-event-dialog form')[0].reset();
});

$('.delete-event-btn').click(function() {
    del = $(this).parents('.widget-box');
});

$('#delete-btn').click(function() {
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
});