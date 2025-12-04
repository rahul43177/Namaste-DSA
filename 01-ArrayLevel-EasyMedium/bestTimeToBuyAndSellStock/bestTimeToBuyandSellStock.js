/**
 * @param {number[]} prices
 * @return {number}
 */
/*
LeetCode Problem 121: Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

---

### Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

### Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit is 0.

---

### Constraints:
- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

*/

function findMaximumProfit(prices) {
    /**
     * 
     * I will find a min price 
     * 
     * min 
     * maxProfit
     * 
     * [7,1,5,3,6,4]
     *  0 1 2 3 4 5 
     * 
     * min = 7 
     * max = 1 - 7 => -6 > maxProfit -> 
     * 
     * min = 1 
     * 5-1 = 4 
     * 3-1 = 2 
     * 6-1 = 5 
     * 4-1 = 3 
     * 
     */

    let min = prices[0]; //min 
    let maxProfit = 0;
    


    for(let i = 1;i<prices.length;i+=1) {
        if(prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min; 
        }

        if(prices[i] < min) {
            min = prices[i]; 
        }
    }
    return maxProfit; 
}



console.log("--- Basic Cases ---");

const prices1 = [7, 1, 5, 3, 6, 4];
console.log(`Input: [${prices1}]`);
console.log("Output:", findMaximumProfit(prices1)); // Expected: 5
console.log("--------------------");

const prices2 = [7, 6, 4, 3, 1];
console.log(`Input: [${prices2}]`);
console.log("Output:", findMaximumProfit(prices2)); // Expected: 0
console.log("--------------------");


console.log("\n--- Edge Cases ---");

const prices3 = [2, 5];
console.log(`Input: [${prices3}]`);
console.log("Output:", findMaximumProfit(prices3)); // Expected: 3
console.log("--------------------");

const prices4 = [5, 2];
console.log(`Input: [${prices4}]`);
console.log("Output:", findMaximumProfit(prices4)); // Expected: 0
console.log("--------------------");

const prices5 = [3, 3, 3, 3, 3];
console.log(`Input: [${prices5}]`);
console.log("Output:", findMaximumProfit(prices5)); // Expected: 0
console.log("--------------------");

const prices6 = [10];
console.log(`Input: [${prices6}]`);
console.log("Output:", findMaximumProfit(prices6)); // Expected: 0
console.log("--------------------");

const prices7 = [];
console.log(`Input: [${prices7}]`);
console.log("Output:", findMaximumProfit(prices7)); // Expected: 0
console.log("--------------------");


console.log("\n--- More Complex Scenarios ---");

const prices8 = [1, 2, 3, 4, 5];
console.log(`Input: [${prices8}]`);
console.log("Output:", findMaximumProfit(prices8)); // Expected: 4
console.log("--------------------");

const prices9 = [3, 8, 1, 4, 6, 9];
console.log(`Input: [${prices9}]`);
console.log("Output:", findMaximumProfit(prices9)); // Expected: 8
console.log("--------------------");

const prices10 = [2, 9, 1, 3];
console.log(`Input: [${prices10}]`);
console.log("Output:", findMaximumProfit(prices10)); // Expected: 7
console.log("--------------------");

const prices11 = [10000, 0, 9000, 10, 8000];
console.log(`Input: [${prices11}]`);
console.log("Output:", findMaximumProfit(prices11)); // Expected: 9000
console.log("--------------------");

const prices12 = [5, 4, 3, 2, 8, 1, 9];
console.log(`Input: [${prices12}]`);
console.log("Output:", findMaximumProfit(prices12)); // Expected: 8
console.log("--------------------");