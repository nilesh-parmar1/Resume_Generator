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