function fibocy(n){
    let feboarray=[0,1];
    for(let i=2;i<=n;i++){
        feboarray[i]=feboarray[i-1]+feboarray[i-2]
    }
    return feboarray;
}
function print(n){
    let array=fibocy(n);
    for(let i=0;i<=n;i++){
        console.log(`phan tu thu ${i}:${array[i]}`)
    }
}
print(10)