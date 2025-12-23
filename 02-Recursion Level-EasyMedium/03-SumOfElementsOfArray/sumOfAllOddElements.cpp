#include<iostream>
#include<vector>

using namespace std;

int sumOfAll(vector<int> arr , int index) {
    bool isOdd = arr[index] % 2 != 0; 
    if(index == 0) {
        if(isOdd) {
            return arr[index];
        } else {
            return 0;
        }
    }

    if(isOdd) {
        return arr[index] + sumOfAll(arr , index-1);
    } else {
        return 0 + sumOfAll(arr , index-1);
    }

}

int main() {
    vector<int> arr = {11,2,3,4,5};
    int lastIndex = arr.size()-1; 

    int sum = sumOfAll(arr , lastIndex);

    cout << "The sum is : "<<sum << endl; 
    return 0; 
}
