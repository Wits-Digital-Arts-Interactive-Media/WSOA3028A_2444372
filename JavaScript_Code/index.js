//practicing my java
function MyperfectSquares(){
    let A = 1;
    let x = 3;
    let y = 5;
    let z = 8;
   let isTrue  = true;
    const formular = A*A;
    const formular1 = x*x;
    const formular2 = y*y;
    document.getElementById("Design.html").innerHTML ="design"

    console.log(formular * formular1 % formular2 + formular2);
    return;
}
MyperfectSquares(); //execute the first fucntion 

function MyPrimeNumbers(){
    let current = 2;

    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;//the first prime number
        if (n % 2 === 0 || n % 3 === 0) return false;
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
    }

    return function nextPrimeNumber() {
        while (!isPrime(current)) {//for as long as the number is a prime number and not even, it will output it here
            ++current;
            
        }
        return current++;
    };
    
}
const nextPrimeNumber = MyPrimeNumbers();//executtes second function

function main(){
    let value = 0;
    for (let i = 0; i <= 10; i++){
        ++value;
    }
    return true;
}
main();
console.log(main);
 


 


