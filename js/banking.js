// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function () {
    // get the amount diposited
    const depositeInput = document.getElementById('deposit-input');
    const newDepositeAmountText = depositeInput.value;

    //update deosit total
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    

    const depositTotal = document.getElementById('diposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositeAmount;
    depositTotal.innerText = newDepositTotal;
    

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
     balanceTotal.innerText = newBalanceTotal;

    // clear the diposite input filed
    depositeInput.value = '';
});

// handle withdrow event handler
document.getElementById('withdrow-button').addEventListener('click', function () {
    // get the amount withdrow
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;
    const newWithdrowAmount = parseFloat(withdrowAmountText);
    console.log(newWithdrowAmount);

    // set withdrow total
    const withdrowTotal = document.getElementById('withdrow-total');
    const withdrowTotalText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(withdrowTotalText);
    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal;


    // update account balance after withdrow
    const balanceTotal = document.getElementById('balance-total'); 
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText)
    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    balanceTotal.innerText = newBalanceTotal;

    //  clear the withdrow input filed
    withdrowInput.value = '';
})
   
