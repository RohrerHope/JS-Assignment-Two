const task3Element = document.getElementById("task-3");
let name = "Carlos";
let age = 41;
let liveCity = "Cork";

function alertText() {
  alert("Hello there");
}

function alertName(name) {
  alert(name);
}

alertText();

alertName(name);

task3Element.addEventListener("click", alertText);

function personInfo(name, age, location) {
  const personDeclaration = `My name is ${name}, I'm ${age} and I live in ${location}`;
  return personDeclaration;
}

alert(personInfo(name, age, liveCity));
