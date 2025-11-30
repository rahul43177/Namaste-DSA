#include <iostream>
#include <vector>

using namespace std;

int removeDuplicates(vector<int> &arr) {
  // we will use 2 pointers
  //  j -> which will act as a place holder
  //  i -> who will go places and check things
  int j = 0;
  for (int i = 1; i < arr.size(); i++) {
    if (arr[i] != arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return j + 1;
}

int main() {
  vector<int> arr = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
  int unique = removeDuplicates(arr);
  cout << "The number of unique elements are " << unique;
}
