function caculatorjs(number){
    let sum=1;
    for(let i=2;i<=number;i++){
        sum+=1/Math.pow(i,3);
    }
    return sum.toFixed(3);
}
console.log(caculatorjs(5))