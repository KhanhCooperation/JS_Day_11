/**
 * Input: số có 2 chữ số
 * Output: Tổng các chữ số
 */
var number=prompt("Nhập số có 2 chữ số: ");
var num1=Math.floor(number/10);
var num2=number%10;
var Sum=num1+num2;
console.log("Sum= ", Sum);