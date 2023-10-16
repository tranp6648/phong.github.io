function finduocchung(n) {
    let customarray = [];
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            customarray.push(i);
        }
    }
    return customarray;
}
function kt(n) {
    let array = finduocchung(n);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];


    }
    if (sum === n) {
        return true;
    }
    return false;
}
console.log(kt(28))