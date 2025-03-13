function addNewWEField() {
  // console.log("Testing js live");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2")
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Add more here");
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton"); // Fixed this line
  
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2")
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Add more here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating resume
function generateResume() {
  // console.log("gnerating")

  let nameField=document.getElementById('nameField').value;
  let nameT1=document.getElementById('nameT1')
  nameT1.innerHTML=nameField;

  document.getElementById("nameT2").innerHTML= nameField;

  document.getElementById("emailT").innerHTML= document.getElementById('emailField').value;

  document.getElementById("numT").innerHTML= document.getElementById('numField').value;
  
  document.getElementById("addressT").innerHTML= document.getElementById('addressField').value;

  document.getElementById("fbT").innerHTML= document.getElementById('fbField').value;

  document.getElementById("instaT").innerHTML= document.getElementById('instaField').value;

  document.getElementById("linkT").innerHTML= document.getElementById('linkedinField').value;

  document.getElementById("numT").innerHTML= document.getElementById('numField').value;


  // objective
  document.getElementById("objectiveT").innerHTML= document.getElementById('objField').value;


  //  work experience
  let wes=document.getElementsByClassName("weField");

  let str="" ;
  
  for(let e of wes) {
    str=str+ `<li> ${e.value} </li>`;}

    document.getElementById('weT').innerHTML=str;
  

  //  academic qualification
  let aqs=document.getElementsByClassName("aqField");

  let str1="" ;
  
  for(let e of aqs) {
    str1+=`<li> ${e.value} </li>` ;}

    document.getElementById('aqT').innerHTML=str1;


    // code for setting image 

// Inside your generateResume function, replace the image handling code with this:

// code for setting image 
let file = document.getElementById('profileField').files[0];

if (file) {
  let reader = new FileReader();
  
  // Set up the onload event handler before calling readAsDataURL
  reader.onload = function() {
    document.getElementById("imgTemplate").src = reader.result;
  };
  
  // Start reading the file
  reader.readAsDataURL(file);
} else {
  console.log("No profile image selected");
}

// Then continue with the rest of your function
document.getElementById('resume-form').style.display='none';
document.getElementById('resume-template').style.display='block';

    // set image to template

    reader.onloadend=function() {
      
      document.getElementById("imgTemplate").src=reader.result
    }

  document.getElementById('resume-form').style.display='none';
  document.getElementById('resume-template').style.display='block';


}


// print resume
function printResume() {
  window.print();
}