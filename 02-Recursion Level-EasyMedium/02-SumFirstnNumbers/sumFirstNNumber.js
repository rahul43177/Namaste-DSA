function printSumOfFirstNNatualNumbers(n) {
    if (n == 0) return 0;

    return n + printSumOfFirstNNatualNumbers(n - 1);
}

console.log(printSumOfFirstNNatualNumbers(5)); // 15

