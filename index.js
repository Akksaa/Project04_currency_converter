#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 151.64,
    CNY: 7.23,
    PKR: 278,
    INR: 83.28,
    SAR: 3.75
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: "Choose the currency you want to change from:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "CNY", "PKR", "INR", "SAR"]
    },
    {
        name: "to",
        message: "Choose the currency you want to change to:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "JPY", "CNY", "PKR", "INR", "SAR"]
    },
    {
        name: "amount",
        message: "Enter the amount:",
        type: "number"
    },
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = Math.round(baseAmount * toAmount);
console.log(convertedAmount);
