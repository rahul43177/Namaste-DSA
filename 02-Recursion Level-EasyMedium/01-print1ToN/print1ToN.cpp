#include<iostream>
using namespace std; 

void print1ToN(int n) {
    if(n==0) return; 
    print1ToN(n-1);
    cout << n <<endl; 
}

int main() {
    int n; 
    cout << "please enter the value of n" <<endl; 
    cin >> n ; 
    print1ToN(n);
    return 0; 
}