//Bài tập 3: Chuẩn hóa tên
//Viết một hàm nhận vào một chuỗi chứa tên và chuẩn hóa nó theo định dạng "Họ Và Tên". Ví dụ: Nếu nhập vào "ngUYỄN VăN a", hàm sẽ trả về "Nguyễn Văn A".

function formatstring(str) {
    let word=str.split(" ");
    for(let i=0;i<word.length;i++){
        word[i]=word[i].charAt(0).toUpperCase()+word[i].substring(1).toLowerCase();
    }
    return word.join(" ")
  }
console.log(formatstring("ngUyen vAn A"))