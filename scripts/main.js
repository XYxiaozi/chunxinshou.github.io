/*就像在这里注释一下玩玩*/
//这个也是注释，但只注释一行
/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

let myVariable = "邢赟";

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

alert("你好！");

document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼！");
});

document.querySelector("img").addEventListener("click", () => {
  alert("别戳我，我怕疼！");
});*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nova-15-Ultra-256GB-带感绿.png") {
    myImage.setAttribute("src", "images/nova-15-Ultra-256GB-零度白.png");
  } else {
    myImage.setAttribute("src", "images/nova-15-Ultra-256GB-带感绿.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.请输入你的名字.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};
