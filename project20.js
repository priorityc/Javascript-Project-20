document.querySelector("h1").style.color = "green";
//change text
document.querySelector("h1").innerHTML = 'Hello';
//alert
  let alert= document.querySelector('h1').innerHTML = ('Hello');
//THIS IS TASK TWO
 /* window.alert(('h1').innerHTML=('Hello'));
  
  //display current date
const date = new Date();
 document.getElementById('date').innerHTML = date;

 //set date birthday

 const birthday = new Date();
 const month = new Date();
 const year = new Date();

 birthday.setDate(30);
 month.setDate(11);
 year.setDate(1983);
 console.log(birthday);

 document.getElementById("Birth-day").innerHTML = birthday;*/
  
 //coment in the code above to see the effect UTC
/*const  Localdate = new Date();

const date = Localdate.toUTCString();
document.getElementById('date').innerHTML = date;

//TASK 3*/

 

answer = prompt('Please tell me what is your favorite colour?');
  if(answer.includes(answer.toLowerCase())) {

    Stylebody = () => {
      /*let newcolor = (answer);*/
    let element=document.querySelector('body');
    element.style.background=answer;

}
  }
  window.addEventListener("click", Stylebody());
  

