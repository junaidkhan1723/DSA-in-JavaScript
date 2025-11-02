// // solution 1
// console.time();
// let num = 1000000000n;

// let sum = 0n;

// for(let i=1n; i<= num; i++)
// {
//     sum += i
// }
// console.log(sum);
// console.timeEnd()


// // solution 2
// console.time();
// let num1 = 1000000000;

// let sum1 = (num1 * (num1 + 1)) / 2

// console.log(sum1);
// console.timeEnd()



//1
// console.time()
// let num3 = 100n;
// mul = 1n;

// for(let i = 1n; i<=num3; i++)
// {
//  mul *= i
// }
// console.log(mul);
// console.timeEnd()

// console.time()
// let num = 100000000n;
// let sum=0n;

// for(let i = 1n; i<=num; i++)
// {
//     if(i % 2n == 0n)
//     {
//         sum += i;
//     }
// }
// console.log(sum);
// console.timeEnd()


// console.time()
// let num1 = 100000000;
// let sum1=0;

// let k = num1 / 2

// sum1 = k * (k+1)

// console.log(sum1);
// console.timeEnd()

//1 
// console.time()
// let num= 1000000000;
// sq = (num * (num+1) * (2 * num +1 )) /6
// console.log(sq);
// console.timeEnd()

//2

// console.time()
// let num1=100;
//  for(let i = 1; i<= num1; i++)
//  {
//     console.log(Math.pow(i, 2));
    
//  }
//  console.timeEnd()

let num = 100;

for( let i = 1; i<= num; i++){
    if(i%3==0 || i%5 ==0)
    {
        console.log(i);
        
    }
}