const addToList = () => {
    let userInput = document.querySelector("#userText").value;
    let newP = document.createElement("p");
    let text = document.createTextNode(userInput);
    newP.appendChild(text);

    let tasks = document.querySelector(".tasks");
    tasks.style.display = "flex";
    tasks.style.flexFlow = "row nowrap";
    tasks.style.justifyContent = "center";

    let divResult = document.querySelector(".divResult");
    divResult.style.width = "82.8rem";
    divResult.style.height = "8.8rem";
    divResult.style.transform = "translateY(2.2rem)"
    divResult.style.backgroundColor = "white";
    divResult.style.border = "1px rgba(0, 0, 0, 0.05) solid";
    divResult.style.boxShadow = "0px 1px 3px 0px rgba(0, 0, 0, 0.05)"
    divResult.style.borderRadius = "8px";
    divResult.style.display = "flex";
    divResult.style.flexFlow = "row nowrap";
    divResult.style.justifyContent = "flex-start";
    divResult.style.alignItems = "center";

    let p = document.querySelector("p");
    p.style.marginLeft = "72px";

    document.querySelector(".divResult").appendChild(newP);
    document.querySelector(".result").appendChild(newP);
    document.querySelector("#userText").value = "";
  };