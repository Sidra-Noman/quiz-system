// The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.
//  #! /user/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1:What is TypeScript?",
        choices: ["A)JavaScript framework", "B)JavaScript superset with types", "C)Database tool", "D)CSS preprocessor"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2:Which of the following types is not a primitive type in TypeScript?",
        choices: ["A)string", "B)boolean", "C)number", "D)array"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3:How do you compile TypeScript to JavaScript?",
        choices: ["A) tsc", "B) node", "C) npm run", "D) ts-node"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4:Which TypeScript feature catches errors during development?",
        choices: ["A) Dynamic typing", "B)Static typing", "C)No typing", "D)Duck typing"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5:What is the common file extension for TypeScript?",
        choices: ["A) .ts", "B) .tsx", "C).js", "D) Both A and B"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "B)JavaScript superset with types":
        console.log("1.Correct!");
        ++score;
        break;
    default:
        console.log("1.Incorrect!");
}
switch (quiz.question_2) {
    case "D)array":
        console.log("2.Correct!");
        ++score;
        break;
    default:
        console.log("2.Incorrect!");
}
switch (quiz.question_3) {
    case "A) tsc":
        console.log("3.Correct!");
        ++score;
        break;
    default:
        console.log("3.Incorrect!");
}
switch (quiz.question_4) {
    case "B)Static typing":
        console.log("4.Correct!");
        ++score;
        break;
    default:
        console.log("4.Incorrect!");
}
switch (quiz.question_5) {
    case "D) Both A and B":
        console.log("5.Correct!");
        ++score;
        break;
    default:
        console.log("5.Incorrect!");
}
console.log(`Score:${score}`);
