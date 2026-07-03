Hãy giải thích cho tôi sự khác biệt giữa mảng 1 chiều và mảng 2 chiều trong JavaScript. Mảng 2 chiều bản chất có phải là mảng chứa các mảng khác không?

Đúng vậy. Trong JavaScript, "mảng 2 chiều" thực chất không phải là một kiểu dữ liệu riêng, mà là một mảng mà mỗi phần tử của nó lại là một mảng khác (array of arrays).

1. Mảng 1 chiều

Mảng 1 chiều là một danh sách các phần tử nằm trên một hàng.

Ví dụ:

let fruits = ["Táo", "Cam", "Chuối"];

Cấu trúc:

Chỉ số:   0       1        2
        -------------------------
fruits = ["Táo", "Cam", "Chuối"]

Truy cập phần tử:

console.log(fruits[0]); // Táo
console.log(fruits[2]); // Chuối

Chỉ cần một chỉ số.

fruits[index]
2. Mảng 2 chiều

Mảng 2 chiều là một mảng chứa nhiều mảng con.

Ví dụ:

let cinemaSeats = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 1]
];

Nếu nhìn trực quan:

[
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 1]
]

Có thể tưởng tượng như một bảng:

        Cột
        0 1 2
      +-------+
Hàng0 |0 1 0|
Hàng1 |1 0 0|
Hàng2 |0 0 1|
      +-------+

Muốn lấy một phần tử phải có hai chỉ số:

cinemaSeats[row][col]

Ví dụ:

console.log(cinemaSeats[0][1]); // 1
console.log(cinemaSeats[2][0]); // 0
3. Tại sao nói mảng 2 chiều là mảng chứa các mảng?

Hãy thử in từng phần tử:

let cinemaSeats = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 1]
];

console.log(cinemaSeats[0]);

Kết quả:

[0, 1, 0]

Điều này cho thấy:

cinemaSeats là một mảng.
Phần tử đầu tiên (cinemaSeats[0]) cũng là một mảng.

Nếu tiếp tục:

console.log(cinemaSeats[0][1]);

Diễn ra theo hai bước:

Bước 1

cinemaSeats[0]

Nhận được:

[0, 1, 0]

Bước 2

Lấy phần tử thứ 1 của mảng đó:

[0, 1, 0][1]

Kết quả:

1
4. So sánh trực quan
Mảng 1 chiều
let numbers = [10, 20, 30];
numbers
   │
   ▼
+----+----+----+
|10  |20  |30  |
+----+----+----+
Mảng 2 chiều
let matrix = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];
matrix
   │
   ▼
+------------------+
|  ──────────────  |
| |10|20|30|       |
|  ──────────────  |
|  ──────────────  |
| |40|50|60|       |
|  ──────────────  |
|  ──────────────  |
| |70|80|90|       |
|  ──────────────  |
+------------------+

Thực chất là:

matrix
│
├── [10,20,30]
├── [40,50,60]
└── [70,80,90]
5. Vì sao phải dùng hai vòng lặp?

Mỗi hàng là một mảng riêng.

Ví dụ:

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

Muốn duyệt hết:

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

        console.log(matrix[i][j]);

    }

}

Diễn ra như sau:

i = 0
    matrix[0]
       ↓
    [1,2,3]

        j = 0 → 1
        j = 1 → 2
        j = 2 → 3

i = 1
    matrix[1]
       ↓
    [4,5,6]

        j = 0 → 4
        j = 1 → 5
        j = 2 → 6

i = 2
    matrix[2]
       ↓
    [7,8,9]

        j = 0 → 7
        j = 1 → 8
        j = 2 → 9
6. Khi nào dùng mảng 1 chiều và mảng 2 chiều?
Mảng 1 chiều: dùng khi dữ liệu là một danh sách đơn giản, ví dụ:
Danh sách học sinh
Danh sách sản phẩm
Danh sách tên khách hàng
Mảng 2 chiều: dùng khi dữ liệu có cấu trúc hàng và cột, ví dụ:
Sơ đồ ghế rạp chiếu phim
Bàn cờ vua
Ma trận số
Bảng điểm học sinh theo môn học
Bản đồ ô vuông trong trò chơi
Kết luận
Mảng 1 chiều là một mảng chứa các giá trị và truy cập bằng một chỉ số (array[index]).
Mảng 2 chiều trong JavaScript không phải là kiểu dữ liệu đặc biệt, mà là một mảng mà mỗi phần tử là một mảng khác. Vì vậy, để lấy một giá trị, bạn truy cập theo hai bước: chọn mảng con (array[row]), rồi chọn phần tử trong mảng con (array[row][col]). Điều này giải thích vì sao cú pháp là array[row][col] và vì sao thường cần hai vòng lặp để duyệt toàn bộ dữ liệu.
