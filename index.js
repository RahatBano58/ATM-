import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 5859;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!");
    console.log("Welcome To Rahat Bano ATM ");
}
let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        message: "Please Select Option",
        type: "list",
        choices: ["Withdraw", "Fast Cash", "Check balance"],
    },
]);
if (operationAnswer.operation === "Withdraw") {
    let amountWithdraw = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number",
        },
    ]);
    if (amountWithdraw.amount <= myBalance) {
        let balance = myBalance - amountWithdraw.amount;
        console.log(`Your Remaining Balance is: ${balance}`);
    }
    else {
        console.log("insufficient balance");
    }
}
else if (operationAnswer.operation === "Fast Cash") {
    let fastCashAns = await inquirer.prompt([
        {
            name: "amount",
            message: "Select Your Amount",
            type: "list",
            choices: ["1000", "2000", "3000", "5000", "10000"],
        },
    ]);
    if (fastCashAns.amount <= myBalance) {
        let balance3 = myBalance - fastCashAns.amount;
        console.log(`Your remaining balance is ${balance3}`);
    }
}
else if (operationAnswer.operation === "Check balance") {
    console.log(`Your Remaining Balance is: ${myBalance}`);
}
else {
    console.log("your pin is wrong");
}
