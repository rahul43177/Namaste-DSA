#include<iostream>
#include<vector>

using namespace std;

int maxProfit(vector<int> prices) {
    int minPrice = prices[0];
    int maxProfit = 0;
    for(int i = 0;i<prices.size();i++) {
        if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return maxProfit; 
}

int main() {
    vector<int> prices = {7,1,5,3,6,4};
    int profit = maxProfit(prices);
    cout << "The profit --- " << profit << endl ;
}