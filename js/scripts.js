//login button for event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none" ; //click>login-area id khujche>loginArea variable er vitor style e {display= none } kaj korche
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block" ;
});

//deposit button for event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("currentDeposit", depositNumber);
    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit =  depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText("currentBalance", depositNumber);
    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceAmount = parseFloat(currentBalance);
    // const totalBalance =  totalDeposit + currentBalanceAmount;
    // document.getElementById("currentBalance").innerText = totalBalance;

 

});

//withdraw button for event handler
const withdrawBtn = document.getElementById("addwithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", depositNumber);
    


});

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const total =  depositNumber + currentAmount;
    document.getElementById(id).innerText = total;
}

