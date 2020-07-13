var jsonData = [{ "id": 1, "first_name": "Joannes", "last_name": "Glanz", "gender": "Female" ,"btn1":"","btn2":""},
{ "id": 2, "first_name": "Britney", "last_name": "Connerly", "gender": "Female" ,"btn1":"","btn2":""},
{ "id": 3, "first_name": "Conan", "last_name": "Gipp", "gender": "Male" ,"btn1":"","btn2":""},
{ "id": 4, "first_name": "Pauli", "last_name": "Doale", "gender": "Female" ,"btn1":"","btn2":""},
{ "id": 5, "first_name": "Wolfie", "last_name": "Loache", "gender": "Male" ,"btn1":"","btn2":""},
{ "id": 6, "first_name": "Imojean", "last_name": "Gaiter", "gender": "Female" ,"btn1":"","btn2":""},
{ "id": 7, "first_name": "Starlene", "last_name": "Speares", "gender": "Female" ,"btn1":"","btn2":""},
{ "id": 8, "first_name": "Larisa", "last_name": "McPhater", "gender": "Female" ,"btn1":"","btn2":""},
{ "id": 9, "first_name": "Karoly", "last_name": "Kivlehan", "gender": "Male" ,"btn1":"","btn2":""},
{ "id": 10, "first_name": "Corbie", "last_name": "Briston", "gender": "Male" ,"btn1":"","btn2":"" }]

var titles = ['id', 'first_name', 'last_name', 'gender','btn1','btn2'];
/*
$(document).ready(function () {
    createTable(jsonData);
    console.log($('#show').text());
});
*/
window.onload=function(){
    createTable(jsonData);
   // console.log($('#show').text());
}
function createTable(jsonData){
    var $table = $('<table />').attr({'border': '1','cellPadding': '0px','cellSpacing': '0px','align': 'center'});
    var $tr = $('<tr />');
    titles.forEach(function (o,i,a) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);
    //데이터 영역
    jsonData.forEach(function (o) {
        $tr = $('<tr />').mouseenter(mouseenterfunc)
                        .mouseout(mouseoutFunc);
        titles.forEach(function (f) { //필드
            if(f == 'btn1'){
               $tr.append($('<td />').append($('<button  onClick="onclickFunc()">확인</button>')));
            }else if(f == 'btn2'){
                $tr.append($('<td />').append($('<button class="delete" onClick="onDeleteFunc(\''+o['first_name']+'\')">삭제</button>')));
            
            }else{
                $tr.append($('<td />').text(o[f]));
            }
        });
        
        
        $table.append($tr);

    });

    // $().name ();

    $('#show').html($table);
}

function mouseenterfunc(){
    $(this).css('color', 'red');
}
function mouseoutFunc(){
    $(this).css('color', '');
}
function onclickFunc(){
    var str = prompt("입력해 주세요","기본값");
    alert("입력된 값은 "+str+" 입니다");

}
function onDeleteFunc(value){
    filterAry = jsonData.filter(function (o, i, a) {
        return o.first_name != value;
    });

    jsonData = filterAry;
    
   createTable(filterAry);
}