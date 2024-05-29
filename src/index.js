const students = [
  { name: "Laura", age: 22, email: "laura@email.com" },
  { name: "Anna", age: 21, email: "anna@email.com" },
  { name: "Lluis", age: 28, email: "lluis@email.com" },
  { name: "Dani", age: 21, email: "dani@email.com" },
  { name: "Leo", age: 33, email: "leo@email.com" },
  { name: "Clara", age: 24, email: "clara@email.com" },
  { name: "Marc", age: 24, email: "marc@email.com" },
  { name: "Adriana", age: 28, email: "adriana@email.com" },
  { name: "Diego", age: 32, email: "diego@email.com" },
  { name: "Mar", age: 30, email: "mar@email.com" },
  { name: "Helena", age: 22, email: "helena@email.com" },
  { name: "Javi", age: 33, email: "javi@email.com" },
  { name: "Lorena", age: 34, email: "lorena@email.com" },
  { name: "Constanza", age: 28, email: "constanza@email.com" },
];

const studentList = document.getElementById("studentsList")


let printButton=document.getElementById("printButton")
printButton.addEventListener("click", function(event){

  event.preventDefault

students.map((e)=> {
  const name = document.createElement("li")

  name.innerText=e.name
studentList.appendChild(name)
const age = document.createElement("li")

age.innerText=e.age
studentList.appendChild(age)

})

})
console.log(name)

