let balance = 2658;

let interestRate = 0.039;

let interestBalance = 0;

let montlyContribution = 587;

 

for (let i = 1; i <= 12; i++) {

    let monthlyInterest = (balance * interestRate) / 12;

    interestBalance += monthlyInterest;

   

    console.log("*** Month: " + i + " ***");

    console.log();

    console.log("Balance: " + balance);

    console.log("Monthly Interest: " + monthlyInterest);

    console.log("Interest Balance: " + interestBalance);

    console.log();

 

    balance += montlyContribution;

 

    if (i === 12) {

        balance += interestBalance;

        console.log("Final Balance: " + balance);

    }

}
