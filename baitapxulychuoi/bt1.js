//Bài tập 1: Đảo ngược chuỗi
//Viết một hàm nhận vào một chuỗi và trả về chuỗi đảo ngược của nó. Ví dụ: Nếu nhập vào "Hello", hàm sẽ trả về "olleH".

function reveserstring(string) {
    return string.split("").reverse().join("");
}
console.log(reveserstring("hello"))