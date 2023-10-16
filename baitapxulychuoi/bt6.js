//Bài tập 6: Đếm số từ
//Viết một hàm nhận vào một chuỗi và trả về số lượng từ trong chuỗi. Ví dụ: Nếu chuỗi là "This is a sentence.", hàm sẽ trả về 4.

function demso(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        count += 1;
    }
    return count;
}
console.log(demso("test123456789042321"))