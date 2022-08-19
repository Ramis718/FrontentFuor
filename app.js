// console.log("123bjbjb")


// let string = prompt("tell me ur name!!!")

// let regExp = /y/i;
// console.log(string.match(regExp));


// const letter = "AAaaaDDdd"

// let redExp = /a/gi;
// console.log(letter.match(redExp));


// const number = "1234567654322456786545678";

// let redExp = /\d/g;
// console.log(number.match(redExp));
// console.log(number.replace(redExp, "*"));


// const phoneInput = document.querySelector(".phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");


// // console.log(phoneCheck);
// // console.log(phoneInput);
// // console.log(phoneResult);

// const phoneRegExp =/\+996 \d{3} \d{2}-\d{2}-\d{2}/;

// phoneCheck.addEventListener("click", () => {
// // console.log(phoneInput.value);
//      if (phoneRegExp.test(phoneInput.value)) {
//         phoneResult.innerText = "ok";
//         phoneResult.style.color = "green";
//     } else{
//         phoneResult.innerText = "not ok";
//         phoneResult.style.color = "red";
//     }
// });


// dz 1 


// const idInput = document.querySelector(".idInput");
// const idCheck = document.getElementsByClassName("idCheck");
// const idResult = document.querySelector(".idResult"); 

// const idValidate = /^0\d{13}$|1\d{13}$/; 
// idCheck[0].addEventListener("click", () => { 
//     if (idValidate.test(idInput.value)) 
//     {  idResult.innerText = "man";  
//     idResult.style.color = 'blue';
//  } else {  
//     idResult.innerText = "woman ";  
//     idResult.style.color = 'red'; 
// }});

// ---------------------------------


const block = document.querySelector('.block');

let position = 0;


const move = () =>{
  position++;
  block.style.left = `${position}px`
  if (position < 350) {
      return move;
  }
};
 
click.addEventListener('click', move)