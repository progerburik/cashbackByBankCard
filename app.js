console.log('worked');

const regularPurchases = 10000;
const increasedPurchases = 50000;
const specialPurchases = 80000;

const regularPercent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;

let cashback = regularPurchases * regularPercent + increasedPurchases * increasedPercent + specialPurchases * specialPercent;

const maxCashback = 3000;

if (cashback > maxCashback) {
    cashback = maxCashback;
}
console.log(cashback + ' ' + 'рублей');