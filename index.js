const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click" , palindrome);


function palindrome(){
   const word = document.querySelector(".input-text").value;
   let len = word.length;

   let start = word.substring(0 , Math.floor(len /2));
  
   let end = word.substring(len - Math.floor(len /2));
   
   let flip = [...end].reverse().join("");
   console.log(flip);

  if( start == flip){
    result.innerHTML = `${word.toUpperCase()} is a Palindrome` ; }
 else{
        result.innerHTML = `${word.toUpperCase()} is Not a Palindrome`;  }

}
