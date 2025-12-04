#include<iostream>
#include<vector>

using namespace std;

vector<char>reverseString(vector<char>&s) {
    int n = s.size();
    int half = n/2 ; 
    int i = 0;
    for(int i = 0;i<half;i++) {
        int temp = s[i];
        s[i] = s[n-i-1];
        s[n-i-1] = temp;
    }
    return s;
}

int main() {
    vector<char> s = {'h','e','l','l','o'};
                //     0   1   2   3   4 
// 5/2 = 2 
// 
    vector<char> reverse = reverseString(s);
    for(auto val : s) {
        cout << val << " ";
    }
}
