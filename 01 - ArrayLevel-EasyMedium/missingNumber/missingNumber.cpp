#include<iostream>
#include<vector>

using namespace std ;

int missingNumber(vector<int> arr) {
    int n = arr.size();
    cout << "The size of array is " << n << endl; 
    int totalSum = (n*(n+1))/2;
    cout << "The total sum is " << totalSum << endl; 
    int sumOfElements =0; 
    for(int i = 0;i<n;i++) {
        sumOfElements+=arr[i];
    }
    cout << "The sum of elements we have " << sumOfElements << endl; 
    return totalSum - sumOfElements;
}

int main() {
    vector<int> arr = {9,6,4,2,3,5,7,0,1};
    int missing = missingNumber(arr);
    cout << "The missing number in the array is -- " << missing << endl;
    return 0 ;
}