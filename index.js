#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to Ali - Currency Convrtor"));
// Define the list of currencies and their exchange rates 
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 278.18,
    // Add more currencies and their exchannge rates here 
};
// Prompt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount convert:"
    }
]);
// Perform currency conversion by using Formula 
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Fromula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
