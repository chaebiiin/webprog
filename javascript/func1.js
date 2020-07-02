function sum(a, b) {
    console.log("sum(a,b) 호출");
    var sum = a + b;
    var result = document.getElementById("show");
    result.innerHTML = sum;
}

function sum() {
    console.log("sum 호출");
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;

}
function mySum() {
    var result1 = sum(2, 4);
    console.log("result1의 결과는 " + result1);
}

function arraySum(ary) {
    var sum = 0;
    for (ar of ary) {
        sum += ar;
    }
    return sum;
}
function arrayTest() {
    var numAry = [3, 4, 5, 6, 7];
    var result2 = arraySum(numAry);
    console.log(result2);
}
function funcTest() {
    funcTest1(hellofunc1());
}
function funcTest1(hellofunc) {
    var hello = document.getElementById("show").innerHTML;
    // console.log(hello);
    hello += " World~~~";
    document.getElementById("show").innerHTML = hello;
}
function hellofunc1(){
    // console.log("helloFunc");
    document.getElementById("show").innerHTML = "HELLO!";
}
// function hellofunc(){
//     console.log(hellofunc);
//     document.getElementById("show").innerHTML =  "HELLO!!";
// }