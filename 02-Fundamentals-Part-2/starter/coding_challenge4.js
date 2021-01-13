const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    let tip;
    let total;
    if(bill >= 50 && bill <= 300){
        tip = bill * .15;
        total = bill + tip;
    }else if(bill > 300){
        tip = bill * .2;
        total = bill + tip;
    }else{
        tip = 0;
        total = bill + tip;
    }
    tips.push(tip);
    totals.push(total);
};

bills.forEach(bill => {
    calcTip(bill)
});

console.log(tips);
console.log(totals);

const calcAverage = (arr) =>{
    let result = 0;
    arr.forEach(element => {
        result = result + element;
    });
    let average = result / arr.length;
    return average;
}

let myArr = [10, 10, 9];

console.log(calcAverage(totals));