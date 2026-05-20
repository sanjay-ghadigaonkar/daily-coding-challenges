//  Calculates the total income from an array of transactions.
//  arr - The array of transaction amounts.
//  The total sum of positive transactions.

const transactions = [2000, -500, 3000, -1200, 5000];

function calculateTotalIncome(arr) {
  let TottalIncome = arr.filter((amount) => amount > 0); // first use filter for extarct the plush value
  let finelValue = TottalIncome.reduce((total, amount) => total + amount, 0); // and use reduse for extract value for tottal expence

  return finelValue;
}
console.log("Total Income:", calculateTotalIncome(transactions));
// Expected Output: Total Income: 10000

//...........................................................................................................................
// for loop method

const expence = [2000, -500, 3000, -1200, 5000];
function TotalIncome(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element > 0) {
      total = total + element;
    }
  }
  return total;
}
console.log("Total Income:", TotalIncome(expence));
// Expected Output: Total Income: 10000

// ...............................................................................................................................

// reduce method and ef else
const expencesss = [2000, -500, 3000, -1200, 5000];
function TotalExpencee(array) {
  let total = 0;
  const totalValue = array.reduce((total, amount) => {
    if (amount > 0) {
      return total + amount;
    } else {
      return total;
    }
  }, 0);
  return totalValue;
}

console.log("Total Income:", TotalExpencee(expencesss));
// Expected Output: Total Income: 10000
