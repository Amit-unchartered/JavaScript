const prompt = require('prompt-sync')();
let x = Math.floor((Math.random() * 100) + 1);
console.log(x)
let i=1
let score=100
while(i<=100){
    let a = prompt("guess the number -- > ")
    if(a > x){
        console.log(`The guessed number ${a} is greater than random number ${x}`)
        score = score-1
        i++
    }else if(a < x){
        console.log(`The guessed number ${a} is smaller than random number ${x}`)
        score = score-1
        i++
    }else{
        console.log(`The guessed number ${a} is equal to random number ${x}`)
        return console.log("The final score is --> ", score)
    }
}
