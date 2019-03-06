/*let student = {
    name: "Zach", 
    awesome: true,
    degree: "Javascript",
    week: 1

}

for (let item in student) {
    console.log()
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'ragdoll'];

for (let cat in catArray) {
    console.log(catArray[cat]);
}
  */

  let student = "david";
let capName;
  for(let x in student) {
    if (x == 0) {
        capName  = student[x].toUpperCase();
    } else {       
        capName += student[x].toLowerCase(); 
    } 
  }
  console.log(capName);