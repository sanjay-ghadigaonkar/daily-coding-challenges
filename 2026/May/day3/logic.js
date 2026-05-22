// Challenge: The Transaction Analyzer
// Expected Output
// totalIncome: 9500,
// totalExpense: -3700,
// largestExpense: -2000

const transactions = [5000, -2000, 3000, -500, -1200, 1500];

function analyzeTransactions(arr) {
  // Extracted positive integers using filter() and aggregated the total income using reduce()
  let totalIncome = arr
    .filter((item) => item > 0)
    .reduce((sum, item) => sum + item, 0);

  /// Filtered negative transactions aggregated the total income using reduce()
  let totalExpense = arr
    .filter((item) => item < 0)
    .reduce((sum, item) => sum + item, 0);
  // Filtered negative transactions and utilized the Math.min() static method with spread syntax to isolate the maximum expense
  const expensesList = arr.filter((item) => item < 0);
  const largestExpense = Math.min(...expensesList);

  return {
    totalIncome,
    totalExpense,
    largestExpense,
  };
}
console.log("totalIncome :", analyzeTransactions(transactions));
