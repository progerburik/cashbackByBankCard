console.log('worked');

const regularPercent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;

const previousPurchases = 16000; // сумма конкретной покупки

let cashback;
if (previousPurchases <= 15000) {
    cashback = previousPurchases * regularPercent;
} else if (previousPurchases <= 150000) {
    cashback = previousPurchases * increasedPercent;
} else {cashback = 3000;
}
console.log(cashback + ' ' + 'рублей');