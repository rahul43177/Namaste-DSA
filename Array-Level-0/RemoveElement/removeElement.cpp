/*
Inspector says: "Is this item good (nums[i] != val)?"
✅ YES → Pack it at station j, move station forward
❌ NO  → Skip it, keep station at same position
*/

#include<iostream>
#include<vector>

using namespace std;

int removeElement(vector<int> &arr , int val) {
    int j = 0;
    for(int i = 0;i<arr.size();i++) {
        if(arr[i] != val) {
            arr[j] = arr[i];
            j++;
        }
    }
    return j ;
}


int main() {
    vector<int> arr = {0,1,2,2,3,0,4,2};
    int valueToFilter = 2 ;
    int filtered = removeElement(arr , valueToFilter);
    cout << "The number of elements left are " << filtered << endl;
    for(auto val : arr) {
        cout << val << " ";
    }
    return 0 ;
}
