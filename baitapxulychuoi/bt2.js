//Bài tập 2: Đếm số lượng ký tự
//Viết một hàm nhận vào một chuỗi và một ký tự, sau đó trả về số lần xuất hiện của ký tự đó trong chuỗi. Ví dụ: Nếu chuỗi là "programming" và ký tự là "m", hàm sẽ trả về 2.

function coutstring(String, char) {
    let array = String.split("");
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (char === array[i]) {
            count++;
        }
    }
    return count;
}
console.log(coutstring("hellohhhhhhh", "e"))