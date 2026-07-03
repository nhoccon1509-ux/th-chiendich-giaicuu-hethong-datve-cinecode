/**
 * HỆ THỐNG ĐẶT VÉ CINECODE
 */

// NHIỆM VỤ 1: Mảng 2 chiều quản lý ghế ngồi (5 hàng, 10 cột)
let cinemaSeats = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
];

// NHIỆM VỤ 2: Mảng 1 chiều quản lý danh sách chờ
let waitlistArray = [
    "NguyenVanA",
    "TranThiB",
    "LeVanC"
];

// NHIỆM VỤ 3: Hàm đặt ghế
function bookSeat(row, col) {
    // Kiểm tra vị trí có hợp lệ không
    if (row < 0 || row >= cinemaSeats.length ||
        col < 0 || col >= cinemaSeats[0].Length) {
        console.log("Vị trí ghế không hợp lệ.");
        return;
        }
    
    // Kiểm tra ghế đã được đặt chưa
    if (cinemaSeats[row][col] === 0) {
        cinemaSeats[row][col] = 1;
        console.log(`Đặt ghế (${row}, ${col}) thành công.`);
    } else {
        console.log(`Ghế (${row}, ${col}) đã được đặt.`);
    }
}
// Nhiệm VỤ 4: Hàm thêm khách vào danh sách chờ
function addToWaitlist(customerName) {
    console.log(`Thêm ${customerName} vào danh sách chờ.`);
}


// =======================
// Kiểm tra kết quả
// =======================

// Đặt ghế
bookSeat(0, 2); // Thành công
bookSeat(0, 1); // Đã được đặt

// Thêm khách
addToWaitlist("PhamVanD");

// In kết quả
console.log("Sơ đồ ghế:");
console.log(cinemaSeats);

console.log("Danh sách chờ:");
console.log(waitlistArray);