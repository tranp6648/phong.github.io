let input = document.getElementById('input');
let output = document.getElementById('output');
let str = '';

function calc(value) {
    str += value;

    input.innerHTML = str;

}

function total() {
    if (str == '') {
        output.innerHTML = '0';

    } else {
        output.innerHTML = eval(str);
    }

}

function AC() {
    let home = '';
    str = home;
    input.innerHTML = str;
    output.innerHTML = '0';
}

function C() {
    var result = str.substring(0, str.length - 1);
    input.innerHTML = result;
    str = result;

}