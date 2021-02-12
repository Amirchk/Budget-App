const BudgetValue = document.getElementById("BudgetInput");

const expenses = document.getElementById("Expense");
const Balance = document.getElementById("Balacnes");

let PriceOfItem = document.getElementById("ItemPrice");
const Item_name = document.getElementById("ItemName");
const ExpTitle = document.getElementById("ExpenseTitle");
const ExpVal = document.getElementById("ExpenseValue");

function ShowYourBudget(){
    let budgetshow = document.getElementById("BudgetHere");
    budgetshow.innerHTML = BudgetValue.value;
}

function ShowRemainingBudget(){
    expenses.innerHTML = PriceOfItem.value;
    let BalanceValue =  BudgetValue.value - PriceOfItem.value
    
    Balance.innerHTML = BalanceValue;
    
    let ExpT = document.createElement("H3");
    ExpT.innerHTML = Item_name.value;
    ExpTitle.appendChild(ExpT);
    
    let Expval = document.createElement("H3");
    Expval.innerHTML = PriceOfItem.value;
    ExpVal.appendChild(Expval);
}