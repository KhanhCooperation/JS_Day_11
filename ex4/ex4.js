/**
 * Input: Chiều dài và chiều rộng
 * Xử lý:
 *  +Chu vi: (dài+rộng)*2
 *  +Diện tích: dài*rộng
 * Output: Chu vì và Diện Tích
 */
var chieuDai=parseFloat(prompt("Chieu dai: "));
var chieuRong=parseFloat(prompt("Chieu rong: "));
var chuVi=(chieuDai+chieuRong)*2;
var dienTich=chieuDai*chieuRong;
console.log("Chu vi: ", chuVi);
console.log("Dien tich: ",dienTich );