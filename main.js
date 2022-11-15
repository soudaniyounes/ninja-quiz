const correctAnswer=["A","A","A","A"];
const form=document.querySelector("form");
const divScor=document.querySelector(".scor");

form.addEventListener("submit",(a)=>{

a.preventDefault();

let score=0;
const Answer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

Answer.forEach((answer,index)=>{

  if(answer === correctAnswer[index]){
    score+=25;
  }
});
window.scrollTo(0,0);

divScor.style.display="block";

let output=0;
const timer=setInterval(()=>{
  
  divScor.querySelector("span").innerText=`${output}% `;

  if(output === score){
    clearInterval(timer);
  }else{
    output++;
  }

},10);

});
// let i=0;
// let timer=setInterval(()=>{
//   i++;
//   console.log(i);
//  if(i === 10){
//   clearInterval(timer);
//  }
// },1000);