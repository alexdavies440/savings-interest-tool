window.addEventListener("load", function () {

    let form = document.querySelector("form");

    function Entry(month, balance, monthlyInterest, interestBalance) {
        this.month = month,
        this.balance = balance,
        this.monthlyInterest = monthlyInterest,
        this.interestBalance = interestBalance
    }

    document.addEventListener("submit", function (event) {
        
        let dataArray = [];
        let balance = 0;
        let interestRate = 0;
        let montlyContribution = 0;
        let interestBalance = 0;
        

        balance = Number(document.querySelector("input[name=balance]").value);
        interestRate = Number(document.querySelector("input[name=rate]").value) / 100;
        montlyContribution = Number(document.querySelector("input[name=contribution]").value);

        for (let i = 1; i <= 12; i++) {


            let monthlyInterest = (balance * interestRate) / 12;

            interestBalance += monthlyInterest;

            // console.log("*** Month: " + i + " ***");

            // console.log();

            // console.log("Balance: " + balance);

            // console.log("Monthly Interest: " + monthlyInterest);

            // console.log("Interest Balance: " + interestBalance);

            // console.log();

            let data = new Entry(i, balance, monthlyInterest, interestBalance);
            dataArray.push(data);

            balance += montlyContribution;



            if (i === 12) {

                balance += interestBalance;

                console.log("Final Balance: " + balance);
                console.log(dataArray);

            }

            let p = document.querySelector("p");
            p.innerHTML(dataArray);

        }
        event.preventDefault();
    })
})
