//Bài tập 5: Chuyển đổi sang dạng title
//Viết một hàm nhận vào một chuỗi và chuyển đổi nó sang dạng title case (chữ cái đầu mỗi từ viết hoa). Ví dụ: Nếu chuỗi là "welcome to javascript", hàm sẽ trả về "Welcome To Javascript".

function tittle(Str) {
    let words = Str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();

    }
    return words.join(" ");
}
console.log(tittle("hello b"))