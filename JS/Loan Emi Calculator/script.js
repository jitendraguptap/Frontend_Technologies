
    function showLoanDetails() {
      var loanType = document.getElementById("loanType").value;
      var personalLoanDetails = document.getElementById("personalLoanDetails");
      var homeLoanDetails = document.getElementById("homeLoanDetails");

      if (loanType === "PersonalLoan") {
        personalLoanDetails.style.display = "block";
        homeLoanDetails.style.display = "none";
      } else if (loanType === "HomeLoan") {
        personalLoanDetails.style.display = "none";
        homeLoanDetails.style.display = "block";
      }
    }
    function calculateEMI() {
      var loanType = document.getElementById("loanType").value;

      if (loanType === "PersonalLoan") {
        calculatePersonalLoanEMI();
      } else if (loanType === "HomeLoan") {
        calculateHomeLoanEMI();
      }
    }

    function calculatePersonalLoanEMI() {
      var loanAmount = parseFloat(document.getElementById("loanAmount").value);
      var annualInterestRate = 10; // Replace with the actual annual interest rate
      var loanDuration = parseInt(document.getElementById("loanDuration").value);

      var monthlyInterestRate = (annualInterestRate / 12) / 100;
      var numberOfPayments = loanDuration;
      var denominator = Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1;

      var emi = loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments) / denominator;

      displayEMIResult(emi);
    }

    function calculateHomeLoanEMI() {
      var loanAmount = parseFloat(document.getElementById("homeLoanAmount").value);
      var annualInterestRate = 8; // Replace with the actual annual interest rate
      var loanDuration = parseInt(document.getElementById("homeLoanDuration").value);

      var monthlyInterestRate = (annualInterestRate / 12) / 100;
      var numberOfPayments = loanDuration;
      var denominator = Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1;

      var emi = loanAmount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments) / denominator;

      displayEMIResult(emi);
    }

    function displayEMIResult(emi) {
      var resultDiv = document.getElementById("result");
      var emiResult = document.getElementById("emiResult");

      emiResult.textContent = "EMI: Rs." + emi.toFixed(3);
      resultDiv.style.display = "block";
    }
    
