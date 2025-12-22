#include<iostream>
using namespace std; 

int sumOfNNaturalNumbers(int n) {
    if(n==0) return 0;
    return n + sumOfNNaturalNumbers(n-1);
}

int main() {
    int n ;
    cout << "please enter the value of n" <<endl;
    cin >> n; 

    int sum = sumOfNNaturalNumbers(n);
    cout << "Sum:"<<sum << endl; 
    return 0;
}