function birthdayCakeCandles(n, ar) {
    var highest = 0;
    var count = 0;

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > highest) {
            highest = ar[i];
            count = 0;
        }

        if (ar[i] === highest) {
            count++;
        }
    }

    return count;

}
