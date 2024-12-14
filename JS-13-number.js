/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the
 previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:
function sequence(){
    let num1 = Math.floor(Math.random()*16) ;
    let num2 = Math.floor(Math.random()*16) ;

    let arr = [num1, num2];
    for (let i = 2; i < 10; i++) {
        let nextNum = 2 * (arr[i-1] + arr[i-2]);
        arr.push(nextNum);
      }
      console.log(arr);
}
sequence();