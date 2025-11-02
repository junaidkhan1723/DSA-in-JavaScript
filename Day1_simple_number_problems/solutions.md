### 1. Print Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

---

### 2. Print Numbers from N to 1 without changing the loop condition of above question

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(num - i + 1);
}
```

---

### 3. Print All Even Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

### 4. Sum of First N Natural Numbers

**Brute Force Solution**

```js
console.time();

const num = 1000000000n;
let sum = 0n;

for (let i = 1n; i <= num; i++) {
  sum += i;
}

console.log(sum);
console.timeEnd(); // More time, less memory.
// Time Complexity O(n), beacuse loop runs n times (1 billion iterations)
// Space complexity O(1), we only store two variables (sum, i), no extra memory grows with input.
```

**Optimized Solution**

```js
console.time();

const num = 1000000000n;
let sum = (num * (num + 1n)) / 2n;

console.log(sum);
console.timeEnd(); // less time, less memory.
// Time Complexity O(1),  constant time. No matter how big n is, the formula executes once.
// Space Complexity O(1), only uses 1-2 variables
```

---

### 5. Product (Factorial) of N

```js
// Time Complexity O(n)
console.time();

const num = 10n;
let product = 1n;

for (let i = 1n; i <= num; i++) {
  product *= i;
}

console.log(product);
console.timeEnd();
```

---

### 6. Sum of All Even Numbers up to N

```js
// Time Complexity O(n)
console.time();

const num = 100000000n;  
let sum = 0n;

for (let i = 1n; i <= num; i++) {
  if (i % 2n === 0n) sum += i;
}

console.log(sum);
console.timeEnd(); // takes apx. 7sec to complete

// using formula 
console.time();
let num1= 100000000;
let sum1 = 0;

let k = num1 / 2 ; // when u think about it if we take number from 1 to 10, their are 5 even number(2,4,6,8,10) exactly half of 10, if u take number from 1 to 100 then it has 50 even number

let sum1 = k * (k + 1) 

console.log(sum1); // takes apx. 0.08sec to complete
console.timeEnd();
```

---

### 7. Print Squares of Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  // console.log(i ** 2n);
  // console.log(i * i);
  console.log(Math.pow(i, 2));
}
```
