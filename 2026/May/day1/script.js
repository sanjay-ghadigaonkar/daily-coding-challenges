// Question 1: Find the Maximum Number (Array Logic)
// Task: Ek function banao jo ek numbers ka array le, aur usme se sabse bada (maximum) number dhoondh kar return kare.
// Example: * Input: [10, 5, 20, 8, 15]
// Output: 20

let InputValue = [10, 5, 20, 8, 15];
const max = Math.max(...InputValue);
console.log(max, "Math.max &  i use Spread Operator ");

// ........................................................................................................................
//  same qution but ( for loop method)

let MaxValue = [10, 5, 20, 8, 15, 444];
function HighValue(Array) {
  let HighNumValue = 0;

  for (let i = 0; i < MaxValue.length; i++) {
    let element = MaxValue[i];

    if (element > HighNumValue) {
      HighNumValue = element;
    }
  }
  return HighNumValue;
}
console.log(HighValue(MaxValue), "loop  method");

// ............................................................................................................................
// i solve this problem but i use reduse method

let BigNumber = [12, 14, 154, 55, 800, 1000];
function BgValue(array) {
  let HighValuePrice = array.reduce(
    (acc, curr) => (curr > acc ? curr : acc),
    array[0],
  );
  return HighValuePrice;
}
console.log(BgValue(BigNumber), "reduce  method");
