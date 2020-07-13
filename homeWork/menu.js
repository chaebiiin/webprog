var coffeeData = [{ "no": 1, "menuName": "Americano", "type": "hot/ice", "price": 3400 },
{ "no": 2, "menuName": "latte", "type": "hot/ice", "price": 4000 },
{ "no": 3, "menuName": "Mocha", "type": "hot/ice", "price": 4500 },
{ "no": 4, "menuName": "Cappuccino", "type": "hot/ice", "price": 5500 }]
var coffees = ['no', 'menuName', 'type', 'price'];

var teaData = [{ "no": 1, "menuName": "Peachtea", "type": "hot/ice", "price": 3000},
{ "no": 2, "menuName": "Greentea", "type": "hot/ice", "price": 4100 },
{ "no": 3, "menuName": "Milktea", "type": "hot/ice", "price": 4600 },
{ "no": 4, "menuName": "Honeytea", "type": "hot/ice", "price": 4500}]
var teas = ['no', 'menuName', 'type', 'price'];

var dessertData = [{ "no": 1, "menuName": "Cake", "price": 3000 },
{ "no": 2, "menuName": "Cookie", "price": 4100},
{ "no": 3, "menuName": "Macaroon", "price": 4600 },
{ "no": 4, "menuName": "HoneyBread", "price": 4500 }];
var desserts = ['no', 'menuName', 'price'];

window.onload = function () {
    createCoffeeTable(coffeeData);
    createTeaTable(teaData);
    createDessertTable(dessertData);
}

function createCoffeeTable() {
    var $table = $('<table />').attr({ 'border': '1', 'cellPadding': '0px', 'cellSpacing': '0px'});
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
    var $table = $('<table />').attr({ 'border': '1', 'cellPadding': '0px', 'cellSpacing': '0px' });
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
    var $table = $('<table />').attr({ 'border': '1', 'cellPadding': '0px', 'cellSpacing': '0px' });
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
        $tr.append($('<td />').append($('<input />').attr('type', 'checkbox')));
        $table.append($tr);
    });


    $('#show3').append($table);
}

function mouseenterfunc() {
    $(this).css('color', 'red');
}
function mouseoutFunc() {
    $(this).css('color', '');
}
