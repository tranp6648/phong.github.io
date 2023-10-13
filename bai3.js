function daonguoc(number){
  let myarray=Array.from(String(number),Number);
const name= myarray.reverse();
const string=parseInt(name.join(""))
console.log(string)
}
daonguoc(123)