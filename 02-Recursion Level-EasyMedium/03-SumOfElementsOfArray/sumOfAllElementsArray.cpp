#include<iostream>
#include<vector>

using namespace std;

int sumOfAllElementsUsingArrAndLength(vector<int>&arr , int len) {
        int index = len - 1; 
        if(index == 0) {
            return arr[0];
        }

    return arr[index] + sumOfAllElementsUsingArrAndLength(arr,len-1);
}

int sumOfAllElementsUsingArrAndIndex(vector<int>&arr , int index) {
    if(index == 0) return arr[index]; 

    return arr[index] + sumOfAllElementsUsingArrAndIndex(arr , index-1);
}

int main() {
    vector<int> arr = {1,2,3,4,5}; //sum = 15 
    int len = arr.size();
    int lastIndex = len - 1; //we usually start from the last index 
    int sum = sumOfAllElementsUsingArrAndLength(arr , len);
    int sum2 = sumOfAllElementsUsingArrAndIndex(arr, lastIndex);

    cout << "The sum of all the elements with method 1 : " << sum << endl; 
    cout << "The sum of all the elements with method 2 : " << sum2 << endl; 
    return 0 ;
}