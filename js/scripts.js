//login button for event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none" ; //click>login-area id khujche>loginArea variable er vitor style e {display= none } kaj korche
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block" ;
});

//deposit button for event handler
const depositBtn = document.getElementById("addDeposit");// deposit button take dhorlam depositBtn diye
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

    document.getElementById("depositAmount").value = ""; 

});

//withdraw button for event handler
const withdrawBtn = document.getElementById("addwithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);//withdraw korle balance reduce hobe sejnno -1 diye multiply korchi
    
    document.getElementById("withdrawAmount").value = "";

});

function getInputNumber(id){
    const amount = document.getElementById(id).value; //ami jei id tar value k float korte chacchi sei value ta (amount) diye dhorbe 
    const amountNumber = parseFloat(amount); //dhore float e convert korbe r seta amountNumber e rakhbe
    return amountNumber; // sei converted id tai return korbe amountNumber nam e
}

function updateSpanText(id, addedNumber){//2ta parameter 1 id 2 variable (addedNumber)
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const total =  addedNumber + currentAmount;//
    document.getElementById(id).innerText = total;
}

