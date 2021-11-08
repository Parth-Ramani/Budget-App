"use strict";

const year = {
  month: "long",
  year: "numeric",
};

const dt = new Date();
document.querySelector(".budget_title_month").innerHTML = dt.toLocaleDateString(
  "en-US",
  year
);

//// BudgetValue //////
let totalIncome

const budgetValue = document.getElementById("budget_value");
console.log(budgetValue);

// incomeValue
const incomeValue = document.getElementById("income_value");
console.log(incomeValue);

// expensesValue///

const expensesValue = document.getElementById("expenses_value");


function add() {
  const description = document.getElementById("description").value;
  const value = document.querySelector(".add_value").value;

  let html = `<div class="item clearfix" id="income-0">
  <div class="item_description">${description}</div>
  <div class="right clearfix">
    <div class="item_value">${value}</div>
    <div class="item_delete">
      <button class="item_delete_btn">
        <i class="far fa-times-circle"></i>
      </button>
    </div>
  </div>
</div>`;

  document.querySelector(".income_list").insertAdjacentHTML("beforeend", html);

  const income = document.getElementsByClassName("item_value");
  console.log(income);
 let incomeArr = [];
  for (const key of income) {
    console.log(key);
    incomeArr.push(Number(key.innerHTML));
  }
  console.log(incomeArr);

  let calcIncome = (prev, curr) => prev + curr;

 let totalIncome = incomeArr.reduce(calcIncome);
  incomeValue.innerHTML = totalIncome;
  
  ////
  const expenses = document.getElementsByClassName("item_vlue");

  console.log(expenses);

  let expensesArr = [];
  for (const key of expenses) {
    console.log(key);
    expensesArr.push(Number(key.innerHTML));
  }
  console.log(expensesArr);

  let calcExpense = (acc, curr) => acc + curr;

  let totalExpenses = expensesArr.reduce(calcExpense);
  

 let budget =  totalIncome - totalExpenses
 document.getElementById("budget_value").innerHTML = budget
}
function sub() {
  const description = document.getElementById("description").value;

  const value = document.querySelector(".add_value").value;

  console.log(description, value);

  let html = `<div class="item clearfix" id="income-0">
  <div class="item_description">${description}</div>
  <div class="right clearfix">
    <div class="item_vlue">${value}</div>
    <div class="item_delete">
      <button class="item_delete_btn">
        <i class="far fa-times-circle"></i>
      </button>
    </div>
  </div>
</div>`;

  document
    .querySelector(".expenses_list")
    .insertAdjacentHTML("beforeend", html);

  const expenses = document.getElementsByClassName("item_vlue");

  console.log(expenses);

  let expensesArr = [];
  for (const key of expenses) {
    console.log(key);
    expensesArr.push(Number(key.innerHTML));
  }
  console.log(expensesArr);

  let calcExpense = (acc, curr) => acc + curr;

  let totalExpenses = expensesArr.reduce(calcExpense);
  expensesValue.innerHTML = totalExpenses;
  console.log(totalExpenses);
  /////
  
}
