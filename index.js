
document.addEventListener("visibilitychange", function() {
  if (document.hidden){
      console.log("Hidden");
  } else {
      console.log("Visible");
      location.reload();
  }
});




const dateInfo = new Date();
const getYear = dateInfo.getFullYear();
const array = ["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec",];
const month = array[dateInfo.getMonth()];
const getDate = dateInfo.getDate();
document.getElementById("date").innerHTML =
  `${getDate}` + " " + `${month}` + " " + `${getYear}`;

setInterval(() => {
  let d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}, 1000);


let inputValue = document.getElementById("form-input");
const storeDiv = document.getElementById("parent-divSecond");
let button = document.getElementById("plus-icon");
let storeData = document.getElementById("Additional-div").innerHTML;
console.log(storeData);
localStorage.setItem("data", `${storeData}`);


var num;
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  if (parseInt(localStorage.getItem("biki")) > 0) {
    num = parseInt(localStorage.getItem("biki"))+1;
  } else {
    num = 0;
  }
} else {
  num = 0;
}

button.addEventListener("click", function () {
  if (inputValue.value === "") {
    alert("Enter your to do !");
  } else {
    localStorage.setItem("biki", `${num}`);
    let indexNum = parseInt(localStorage.getItem("biki"));
    console.log(indexNum);
    let UserEntered = inputValue.value;
    let creatDiv = document.createElement("div");
    storeDiv.appendChild(creatDiv);
    creatDiv.classList.add("added");
    document.getElementsByClassName("added")[indexNum].innerHTML =
      localStorage.getItem("data");
    let spanElm = document.createElement("span");
    let text = document.createTextNode(`${UserEntered}`);
    spanElm.appendChild(text);
    spanElm.classList.add("spanText");
    spanElm.setAttribute("id", "span-box" + `${indexNum}`);
    let checkBox =
      document.getElementsByClassName("sub-divs")[indexNum].firstElementChild;
    checkBox.setAttribute("id", "checkBox" + `${indexNum}`);
    // console.log(spanElm);
    let para = document.getElementsByClassName("divs-para")[indexNum];
    para.appendChild(spanElm);
    num++;
  }
  inputValue.value = "";
  saveInfo();
});

let listContainer = document.getElementById("parent-divSecond");
listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    let getId = event.target.getAttribute("id");
    let SliceId = getId.slice(0, 5);
    if (SliceId === "check") {
      document.getElementById(`${getId}`).classList.toggle("addImage");
      document
        .getElementById(`${getId}`)
        .nextElementSibling.firstElementChild.classList.toggle("text-decor");
    } else {
      document.getElementById(`${getId}`).classList.toggle("text-decor");

      let parent = document.getElementById(`${getId}`).parentElement;
      parent.previousElementSibling.classList.toggle("addImage");
    }

    saveInfo();
  } else if (event.target.tagName === "IMG") {
    event.target.parentElement.remove();
    localStorage.setItem("biki", `${num--}`);
    console.log(num);
    saveInfo();
  }
});

function saveInfo() {
  localStorage.setItem("information", storeDiv.innerHTML);
}

function showInformation() {
  storeDiv.innerHTML = localStorage.getItem("information");
}

showInformation();

