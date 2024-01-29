const prices = [7, 1, 5, 3, 6, 4];
let buy = Infinity; //max
let profit = 0; // min
for (let i = 0; i < prices.length; i++) {
  if (buy > prices[i]) buy = prices[i]; // at min in given nums
  if (profit < prices[i] - buy) profit = prices[i] - buy; // max diff
}
console.log(profit);
