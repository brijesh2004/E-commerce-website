/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {

  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {

    x.className += " responsive";

  }
  else {

    x.className = "topnav";

  }

}



function signBtn1(){
 

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;

if(username === ""){
  alert("please enter the name");
}
else if(email === ""){
  alert("please enter the email id");
}
else {
      alert(`You Have Successfully Sign in with Your name is ${username} and email is ${email}`);
      document.getElementById('gr').innerHTML="signed";
      let a= document.getElementById('a');
   a.href="index.html"
   



  // let a = document.createElement("a");
  // a.innerText="Back";
  // a.style.textDecoration="none";
  // a.href="index.html"


  // document.getElementById("root").appendChild(a);
 
  // signbtn.innerText=username;
  
 // console.log(username);

  // console.log(username);
  }
}
