//Bài tập 3: Chuẩn hóa tên
//Viết một hàm nhận vào một chuỗi chứa tên và chuẩn hóa nó theo định dạng "Họ Và Tên". Ví dụ: Nếu nhập vào "ngUYỄN VăN a", hàm sẽ trả về "Nguyễn Văn A".

function formatstring(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}
console.log(formatstring("ngUYỄN VăN a"))