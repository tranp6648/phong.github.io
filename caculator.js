let cat = document.getElementById('cat');
let result = document.getElementById('result');
let str = "";

function calc(value) {
    str += value;
    cat.innerHTML = str;
}

function resultas() {
    result.innerHTML = eval(str);

}

function ca() {
    str = ""
    cat.innerHTML = str;

}

function Delete() {

    var result = str.substring(0, str.length - 1);
    cat.innerHTML = result;
    str = result;


}