$(document).ready(function () {
    let campusSelected = $('.edit-sala #campus_id').attr('data-value');
    $(`#campus_id option[value=${campusSelected}]`).attr('selected', true)

    console.log(campusSelected)
})