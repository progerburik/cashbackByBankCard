console.log('worked');

// обычные покупки - 1 - 15_000;
// повышенные покупки - 15_001 - 150_000;
// специальные покупки - 150_001;

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