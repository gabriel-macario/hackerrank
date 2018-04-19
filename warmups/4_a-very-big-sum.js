function aVeryBigSum(n, ar) {
    var sum = 0;

    for (var i = 0; i < n; i++) {
        sum += ar[i];
    }

    return sum;
}
