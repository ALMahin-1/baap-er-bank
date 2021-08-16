// input field function direction
function inputField(value) {
    const inputField = document.getElementById(value);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);
    // clear the input field
    inputField.value = '';

    return inputFieldAmount;
}

// Cureent balacne field
function currentBalance(cureent, inputAmount) {
    // get deposit current amount 
    const currentBalance = document.getElementById(cureent);
    const currentAmount = parseFloat(currentBalance.innerText);
    
    // sum current deposit and periveus deposit
    const newTotal = inputAmount + currentAmount;
    currentBalance.innerText = newTotal;
}

// Mian Balance 
function mainUpdateBalance(inputAmount, isAdd) {
    // account main balance
    const mainBalance = document.getElementById('balance-current');
    // const mainCurrentBalance = parseFloat(mainBalance.innerText);
    const mainCurrentBalance = ensaficientBalance();

    // update main balance 
    if (isAdd == true) {
        const mainTotalBalance = mainCurrentBalance + inputAmount;
        mainBalance.innerText = mainTotalBalance;
    }
    else {
        const mainTotalBalance = mainCurrentBalance - inputAmount;
        mainBalance.innerText = mainTotalBalance;
    }

}

// Insufficient withdraw balance error
function ensaficientBalance() {
    // account main balance
    const mainBalance = document.getElementById('balance-current');
    const mainCurrentBalanceText = mainBalance.innerText;
    const mainCurrentBalance = parseFloat(mainCurrentBalanceText);
    return mainCurrentBalance;
    
}



// Deposit Amount
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit input 
    const depositInputAmount = inputField('deposit-input');
    if (depositInputAmount > 0) {
        // current balance field function
        currentBalance('deposit-courrent', depositInputAmount);
        // Main Balance update
        mainUpdateBalance(depositInputAmount, true);
    }

    /* 
    // account main balance
    const mainBalance = document.getElementById('balance-current');
    const mainCurrentBalance = parseFloat(mainBalance.innerText);

    // update main balance 
    const mainTotalBalance = mainCurrentBalance + depositInputAmount;
    mainBalance.innerText = mainTotalBalance; 
    */
})

// Withdraw Amount
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get the input field function
    const withdrawInputAmount = inputField('withdraw-input');
    const AvailablecurrentBalance = ensaficientBalance();

    if (withdrawInputAmount > 0 && withdrawInputAmount <= AvailablecurrentBalance) {
        // current balance field function
        currentBalance('withdraw-courrent', withdrawInputAmount);
        // Main Balance update
        mainUpdateBalance(withdrawInputAmount, false);
    }
    if (withdrawInputAmount > AvailablecurrentBalance) {
        alert("Insufficient Balance");
    }
    /*
     // account main balance
    const mainBalance = document.getElementById('balance-current');
    const mainCurrentBalance = parseFloat(mainBalance.innerText);

    // update main balance 
    const mainTotalBalance = mainCurrentBalance - withdrawInputAmount;
    mainBalance.innerText = mainTotalBalance; 
    */  
})