'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", ""),
  appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
  b = +prompt("Во сколько обойдется?", "");
  
  if (typeof(a) === 'string' && typeof(a) != null
  && typeof(b) != null && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    --i;
  }
}

// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//   b = +prompt("Во сколько обойдется?", "");
//   if (typeof(a) === 'string' && typeof(a) != null
//   && typeof(b) != null && a != '' && b != '' && a.length < 50) {
//     appData.expenses[a] = b;
//     i++;
//   }
// }

// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//   b = +prompt("Во сколько обойдется?", "");
//   if (typeof(a) === 'string' && typeof(a) != null
//   && typeof(b) != null && a != '' && b != '' && a.length < 50) {
//     appData.expenses[a] = b;
//     i++;
//   }
// }
// while (i < 2);
  


appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на один день составляет: " + appData.moneyPerDay + " рублей");

if (appData.moneyPerDay < 100) {
  console.log("Уровень достатка меньше минимума");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500) {
  console.log("Уровень достатка минимальный");
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 1000) {
  console.log("Уровень достатка средний");
} else if (appData.moneyPerDay > 1000) {
  console.log("Уровень достатка хороший");
} else {
  console.log("Что то пошло не так");
}