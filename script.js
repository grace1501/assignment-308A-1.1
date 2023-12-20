// Part 1: Stack Overflow

// let counter = 0;

// function countFunc() {
//     counter++;
//     countFunc();
// }

// try {
//     countFunc();
// } catch(e) {
//     console.log('The error is: ' + e);
//     console.log('The maximum call stack size is: ' + counter);
// } finally {
//     console.log('This is the end.')
// }



// Part 2: Trampolines
// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.

// let resultArr = [];

// function flattenArr(arr) {
//     for (let index in arr) {
//         if (Array.isArray(arr[index])){
//             flattenArr(arr[index]);
//         }
//         else {
//             resultArr.push(arr[index]);
//         }
//     }
//     return resultArr;
// }

// console.log(flattenArr(
//     [0,
//         [1,2],
//         [[3,4,
//             [5]
//         ],6],
//         7
//     ]))


// Part 3: Deferred Execution
const textHolder = document.getElementById('text-holder');

function isPrime(num){
    for (let i=2; i<num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function listPrime(n){
    for(let i=1; i<=n; i++) {
        if (isPrime(i)) {
            let newLine = document.createElement('p');
            newLine.innerHTML = `<p>Prime number: ${i} </p>`;
            textHolder.appendChild(newLine);
        }
    }
    
}

listPrime(10000);
setTimeout(()=> {
    window.alert('The calculation is finished.')}
    , 500);
