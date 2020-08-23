// This is for jQuery

$('#id_add_person').click(addPerson);

function addPerson(){
    var html = '<tr>\
        <td>{0}</td>\
        <td>{1}</td>\
        <td>{2}</td>\
    </tr>'.format(
        $('#id_persons_table tbody tr').length + 1,
        $('#id_name').val(), // Getter
        'Remove'
    );
    $('#id_persons_table tbody').append(html);
    $('#id_name').val(''); // Setter
}