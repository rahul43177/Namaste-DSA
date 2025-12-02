#include<iostream>
#include<vector>
#include<algorithm>

using namespace std; 

int findMaxConsecutiveOnes(vector<int> arr) {
    int currentOnes = 0; 
    int maxOnes = 0; 
    
    for(int i = 0;i<arr.size();i++) {
        if(arr[i] == 1) {
            currentOnes++; 
        } else {
            currentOnes = 0;
        }
        
        maxOnes = max(currentOnes , maxOnes);
    }
    return maxOnes;
}

int main() {
    vector<int> arr = {1,1,0,1,1,1};  //3
    int maxOnes = findMaxConsecutiveOnes(arr);
    cout << "The max ones in the array are : " << maxOnes << endl; 
}