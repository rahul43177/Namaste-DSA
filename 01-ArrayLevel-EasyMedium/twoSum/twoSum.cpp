#include<iostream>
#include<vector>
#include<unordered_map>

using namespace std;

vector<int> twoSum(vector<int> arr , int target) {
    int n = arr.size();
    unordered_map<int , int>mpp;
    
    for(int i = 0;i<n;i++){
        int currentValue = arr[i];
        int compliment = target - currentValue;
        if(mpp.find(compliment) != mpp.end()) {
            return {mpp[compliment] , i};
        }
        mpp[currentValue] = i;
    }
    return {-1 , -1};
}

int main() {
    vector<int> arr = {5,7,12,6,3,29};
    int target = 15;

    vector<int> pairSum = twoSum(arr , target);
    for(auto val : pairSum) {
        cout << val << " ";
    }
}
