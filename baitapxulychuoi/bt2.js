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