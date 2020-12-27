const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const avgDolphins = calcAverage(10, 10, 10);
const avgKoalas = calcAverage(5, 5, 5);


const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins >= (avgKoalas *2)){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas} )`;
    }else if(avgKoalas >= (avgDolphins *2)){
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
    }else{
        return `Theres no winners :( `;
    }
}

console.log(checkWinner(avgDolphins, avgKoalas));