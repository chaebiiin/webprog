var num;
document.write(typeof num);
document.write("<br>");

num = 10;
document.write(typeof num);
document.write("<br>");

num = "NICE";
document.write(typeof num);
document.write("<br>");

num = {
    name: "H",
    age: 19
}
document.write(typeof num);
var num1, num2, num3;
num1 = "HELLO";
num2 = 10;
num3 = 5;
num = num1 + (num2 + num3);
console.log(num);

num3 = "15";
console.log(num2 == num3);
var sum = 0;
for (var i = 0; i < 10; i++) {
    if (i < 5)
        continue;

    sum += i;
}
console.log("결과 값은 : " + sum);

var $sum = 10;
var _sum = 20;
var sum1 = null;
var num1 = 10;