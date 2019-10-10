$(document).ready(function () {
    let campusSelected = $('.edit-sala #campus_id').attr('data-value');
    $(`#campus_id option[value=${campusSelected}]`).attr('selected', true)

    $('.openModalExcluir').click((e) => {
        let item = e.target
        let idItem = $(item).data('id');
        let type = $(item).data('type');
        $('#modalExcluir  a.excluir').attr('href', `${type}/excluir/${idItem}`);
        $('#modalExcluir').show();
    })
})