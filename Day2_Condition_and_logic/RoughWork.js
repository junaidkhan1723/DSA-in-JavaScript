
//1.
// function maxOfThree(a, b, c) {
//   let max;
//   if (a > b && a > c) {
//     max = a;
//   } else if (b > a && b > c) {
//     max = b;
//   } else {
//     max = c;
//   }
//   console.log(max);
// }

// maxOfThree(24, 24, 3);


//2-------------------------------------------------------

// function maxOfThree(a, b, c) {
//   let max;
//   if (a >= b && a >= c) {
//     max = a;
//   } else if (b >= c) {
//     max = b;
//   } else {
//     max = c;
//   }
//   console.log(max);
// }

// maxOfThree(24, '55', 3);
//==============================================================
// function maxOfThree(a, b, c) {
//   let max;
//   if (a > b || a > c) {
//     max = a;
//   } else if (b > a || b > c) {
//     max = b;
//   } else {
//     max = c;
//   }
//   console.log(max);
// }

// maxOfThree(24, 34, 34);


// console.log(Math.max(24,55,65,44))

//-----------------------------------------------------------------

// function numberChecker(num){
//     if(num >0){
//         console.log(`the number ${num} is Positive`);
        
//     }else if (num < 0){
//         console.log(`the number ${num} is negitive`);
        
//     }
//     else{
//      console.log('the number is Zero');}
    
// }

// numberChecker(0)

//----------------------------------------------------------------------

// function ElectricityBill(units) {
//   let Ebill = 0;

//   if (units > 300) {
//     Ebill += (units - 300) * 12;
//     units = 300;
//   }
//   if (units > 200) {
//     Ebill += (units - 200) * 10;
//     units = 200;
//   }
//   if (units > 100) {
//     Ebill += (units - 100) * 7;
//     units = 100;
//   }
//   if (units > 0) {
//     Ebill += units * 5;
//   }

//   console.log(Ebill);
// }

// ElectricityBill(230); 
//------------------------------------------------------------------------

// function ElectricityBill(units){
//     Ebill = 0;
//     if(units<=100){
//     Ebill= units * 5
//     }else if (units <= 200){
//         Ebill = (100*5) + (units-100)*7
//     }else if(units <= 300){
//         Ebill = (100*5) + (100*7) + (units-200) * 10
//     }
//     else{
//         Ebill = (100*5) + (100*7)+(100*10)+(units -300) *12
//     }
//     console.log(Ebill)
// }
// ElectricityBill(230)