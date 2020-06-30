var num = 'Hi!!!!';
document.write(num);
console.log(num);
// window.alert(num);

var num1, num2, num3;
num1 = 10;
num2 = "입니다.";
num3 = num1 + num2;

document.write('<br>' + '결과값은 ' + num3);
document.write("<ul>")
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        document.write('<li> i의값은' + i + '입니다. </li>');
        console.log('i의 값은' + i + '입니다');
    }
}
document.write("</ul>");

var titleAry = ['이름','국어','영어','수학'];
var nameAry = ['H','K','P'];
document.write('<table border="1">');
document.write('<tr>');
for(var i=0; i<titleAry.length; i++){
    document.write('<th>'+titleAry[i]+'</th>');
}
document.write('</tr>');

for(var i=0; i<nameAry.length; i++){
    document.write('<tr>');
    document.write('<td style="background-color:gold;">' + nameAry[i] + '</td>');
    for(var j=0; j<3; j++){
        document.write('<td>' + (j+10) + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');