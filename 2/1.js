// This for JS

document.getElementById('id_add_name').addEventListener('click', addName);

function addName(){
    var html = '<tr>\
        <td>{0}</td>\
        <td>{1}</td>\
        <td>{2}</td>\
    </tr>'.format(
        1,
        '',
        'Remove'
    );
    document.getElementById('id_persons_table').innerHTML += html;
    
}