var jsonData = [{ "id": 1, "first_name": "Joannes", "last_name": "Glanz", "gender": "Female" },
{ "id": 2, "first_name": "Britney", "last_name": "Connerly", "gender": "Female" },
{ "id": 3, "first_name": "Conan", "last_name": "Gipp", "gender": "Male" },
{ "id": 4, "first_name": "Pauli", "last_name": "Doale", "gender": "Female" },
{ "id": 5, "first_name": "Wolfie", "last_name": "Loache", "gender": "Male" },
{ "id": 6, "first_name": "Imojean", "last_name": "Gaiter", "gender": "Female" },
{ "id": 7, "first_name": "Starlene", "last_name": "Speares", "gender": "Female" },
{ "id": 8, "first_name": "Larisa", "last_name": "McPhater", "gender": "Female" },
{ "id": 9, "first_name": "Karoly", "last_name": "Kivlehan", "gender": "Male" },
{ "id": 10, "first_name": "Corbie", "last_name": "Briston", "gender": "Male" }]

var titles = ['id', 'first_name', 'last_name', 'gender'];

$(document).ready(function () {
    var $table = $('<table />').attr('border', '1').attr('cellPadding', '0px').attr('cellSpacing', '0px')
                                .attr('align', 'center');
    var $tr = $('<tr />');
    titles.forEach(function (o) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);
    //데이터 영역

    jsonData.forEach(function (o) {
        $tr = $('<tr />').mouseenter(mouseenterfunc)
                        .mouseout(mouseoutFunc);
        titles.forEach(function (f) { //필드
            $tr.append($('<td />').text(o[f]));
        });
        $tr.append($('<td />').append($('<button />').text('확인').click(onclickFunc)));

        $table.append($tr);

    });

    $('#show').append($table);
});

function mouseenterfunc(){
    $(this).css('color', 'red');
}
function mouseoutFunc(){
    $(this).css('color', '');
}

function onclickFunc(){

}


