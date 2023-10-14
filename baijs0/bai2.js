function cuuchuong(number){
    for(let i=1;i<=10;i++){
        console.log(`${number}*${i}=${number*i}`);
    }
}
for(let i=1;i<=10;i++){
    console.log(`Bang cuu chuong:${i}`);
    cuuchuong(i);
    console.log("\n");
}