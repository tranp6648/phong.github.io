function ispreme(number){
   if(number<=1){
      return false;
   }
   for(i=2;i<=Math.sqrt(number);i++){
      if(number%i==0){
         return false;
      }
   }
   return true;
}
console.log(ispreme(2))