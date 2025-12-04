#include<iostream>

using namespace std;

void printNTo1(int n) {
    //base condition
    if(n==0) {
        return ;
    }
    cout << n << endl;
    printNTo1(n-1);
}

int main() {
    int n ;
    cout << "please enter the number value " << endl;
    cin >> n ;
    cout << "Starting the print from here :" <<endl ;
    printNTo1(n);
    return 0 ;
}
