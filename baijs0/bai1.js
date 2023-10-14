function chan(number){
  for(i=1;i<=number;i++){
   if(i%2==0){
    console.log(i)
   }
  }
}
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function dayso(end) {
  for (let i = 1; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

dayso(5);