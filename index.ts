import inquirer from "inquirer";
let answer = await inquirer.prompt([{
    name:"age",
    type:"number",
    message:"Enter your age please"
}])
console.log("Insha Allah, in "+(60-answer.age) +"years you will be 60 years old.");