/**
 * Input: Số tiền USD
 * Const: Mệnh giá USD
 * Output: Số tiền VND
 */
const Menh_Gia_USD=23500;
var So_Tien_USD=prompt("Nhập số tiền (USD): ");
var So_Tien_Quy_Doi=So_Tien_USD*Menh_Gia_USD;
console.log("Số tiền sau quy đổi: ", So_Tien_Quy_Doi);