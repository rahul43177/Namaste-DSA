#include<iostream>
#include<vector>

using namespace std; 

int removeDuplicates(vector<int>&arr) {
  int j = 0;
  for(int i = 1;i<arr.size();i++) {
    if(arr[i] != arr[j]) {
      j++;
      arr[j] = arr[i] ;
    }
  }
  return j+1; 
}

int main() {
  vector<int> arr = {0,0,1,1,1,2,2,3,3,4};
  int unique = removeDuplicates(arr) ;
  for(auto val : arr) { //new array
    cout << val << " " ; 
  }
  cout<<endl;

  cout << "The unique number in the array are " << unique << endl; 
  return 0 ;
  for(auto val : arr) {
    cout << "the current value " << val << endl ;
  }
}

