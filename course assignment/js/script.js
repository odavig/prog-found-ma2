//ein
var petArray = ["cat", "cow", "dog"];

//zwei
console.log(petArray[1]);

//drei
petArray.push("sheep");

//vier
console.log(petArray.length)

//fünf
var catObject = {
  color: "black",
  name: "cat",
  age: "11",
}

//sechs
console.log(catObject.age);

//sieben
var catArray = [""];
catArray.push(catObject);

//acht
for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i]);
}

//neun
function logToConsole(animal) {
  console.log(animal);
}

//zehn
logToConsole("donkey");
