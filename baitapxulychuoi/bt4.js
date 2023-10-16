//Bài tập 4: Loại bỏ khoảng trắng
//Viết một hàm nhận vào một chuỗi và loại bỏ tất cả các khoảng trắng thừa trong chuỗi. Ví dụ: Nếu chuỗi là " Hello     world    ", hàm sẽ trả về "Hello world".

function khoangtrang(str) {
    return str.trim();
}
console.log(khoangtrang("Hello     world    "))