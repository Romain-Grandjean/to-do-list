NoText = () => {
  return alert("You need to enter a task");
}
 Newtask = () => {
  let userInput = document.querySelector("#userText").value;
  let newP = document.createElement("span");
  newP.className = "tasksText";
  let text = document.createTextNode(userInput);
  newP.appendChild(text);

  if (userInput == "") {
    return NoText();
  }

  let tasks = document.querySelector(".tasks");
  let divResult = document.createElement("divResult");
  divResult.className = "divResult";
  tasks.appendChild(divResult);

  divResult.appendChild(newP);

  let deleteButton = document.createElement("button");
  deleteButton.className = "button-delete";
  divResult.appendChild(deleteButton);

  // document.querySelector('.button-delete').addEventListener('click', () => {
  //   divResult.remove();
  //   });

deleteButton.addEventListener('click', () => {
    divResult.remove();
    });


  document.querySelector("#userText").value = "";

 }

document.querySelector('.buttonAdd').addEventListener('click', () => {
  return Newtask();
});

function enter(e) {
  if (e.keyCode == 13) {
  return Newtask();
}
};

document.querySelector('#userText').addEventListener('keypress', enter);






