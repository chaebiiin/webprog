var coffeeData = [{ "no": 1, "menuName": "Americano", "type": "hot/ice", "price": 3400 },
{ "no": 2, "menuName": "Latte", "type": "hot/ice", "price": 4000 },
{ "no": 3, "menuName": "Mocha", "type": "hot/ice", "price": 4500 },
{ "no": 4, "menuName": "Cappuccino", "type": "hot/ice", "price": 5500 },
{ "no": 5, "menuName": "Espresso", "type": "hot", "price": 5000 },
{ "no": 6, "menuName": "Macchiato", "type": "hot/ice", "price": 4800 },
{ "no": 7, "menuName": "Hazelnut", "type": "hot/ice", "price": 4600 }];
var coffees = ['no', 'menuName', 'type', 'price'];

var teaData = [{ "no": 1, "menuName": "PeachTea", "type": "hot/ice", "price": 3000 },
{ "no": 2, "menuName": "GreenTea", "type": "hot/ice", "price": 4100 },
{ "no": 3, "menuName": "MilkTea", "type": "hot/ice", "price": 4600 },
{ "no": 4, "menuName": "HoneyTea", "type": "hot/ice", "price": 4500 },
{ "no": 5, "menuName": "GrainLatte", "type": "hot/ice", "price": 5500 },
{ "no": 6, "menuName": "GingerTea", "type": "hot/ice", "price": 4300 },
{ "no": 7, "menuName": "PeppermintTea", "type": "hot/ice", "price": 4500 }];


var teas = ['no', 'menuName', 'type', 'price'];

var dessertData = [{ "no": 1, "menuName": "Cake", "price": 3000 },
{ "no": 2, "menuName": "Cookie", "price": 4100 },
{ "no": 3, "menuName": "Macaroon", "price": 4600 },
{ "no": 4, "menuName": "HoneyBread", "price": 4500 },
{ "no": 5, "menuName": "Chocoba", "price": 1500 },
{ "no": 6, "menuName": "Waffle", "price": 4500 }];
var desserts = ['no', 'menuName', 'price'];

// window.onload = function () {
//     createCoffeeTable(coffeeData);
//     createTeaTable(teaData);
//     createDessertTable(dessertData);
// }

$(document).ready(function () {
    createCoffeeTable(coffeeData);
        createTeaTable(teaData);
        createDessertTable(dessertData);
});


function createCoffeeTable() {
    var $table = $('<table />').attr({ 'border': '1', 'cellPadding': '5px', 'cellSpacing': '5px' });
    var $tr = $('<tr />');
    coffees.forEach(function (o, i, a) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);

    //데이터 영역
    coffeeData.forEach(function (o) {
        $tr = $('<tr />').mouseenter(mouseenterfunc)
            .mouseout(mouseoutFunc);
        coffees.forEach(function (f) { //필드
            $tr.append($('<td />').text(o[f]))

        });
        $tr.append($('<td />').append($('<input />').attr('type', 'checkbox')));
        $table.append($tr);
    });

    $('#show1').append($table);
}
function createTeaTable() {
    var $table = $('<table />').attr({ 'border': '1', 'cellPadding': '5px', 'cellSpacing': '5px' });
    var $tr = $('<tr />');
    teas.forEach(function (o, i, a) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);

    //데이터 영역
    teaData.forEach(function (o) {
        $tr = $('<tr />').mouseenter(mouseenterfunc)
            .mouseout(mouseoutFunc);
        teas.forEach(function (f) { //필드
            $tr.append($('<td />').text(o[f]));
        });
        $tr.append($('<td />').append($('<input />').attr('type', 'checkbox')));
        $table.append($tr);
    });

    $('#show2').append($table);
}
function createDessertTable() {
    var $table = $('<table />').attr({ 'border': '1', 'cellPadding': '5px', 'cellSpacing': '5px' });
    var $tr = $('<tr />');
    desserts.forEach(function (o, i, a) {
        $tr.append($('<th />').text(o));
    });
    $table.append($tr);

    //데이터 영역
    dessertData.forEach(function (o) {
        $tr = $('<tr />').mouseenter(mouseenterfunc)
            .mouseout(mouseoutFunc);
        desserts.forEach(function (f) { //필드
            $tr.append($('<td />').text(o[f]));
        });
        $tr.append($('<td />').append($('<input />').attr({ 'type': 'checkbox' })));
        $table.append($tr);
    });

    $('#show3').append($table);

}

function mouseenterfunc() {
    $(this).css('color', 'red');
}
function mouseoutFunc() {
    $(this).css('color', '');
    console.log(this);
}

// function deleteFunc() {
//     $($tr).remove();
//     console.log($tr);
// }



