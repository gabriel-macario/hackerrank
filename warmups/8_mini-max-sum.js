function miniMaxSum(arr) {
    var highestVal = arr[0];
    var lowestVal = arr[0];
    var total = 0;
    var minimum = 0;
    var maximum = 0;

    for (var i = 0; i < arr.length; i++) {
        total += arr[i];

        if (arr[i] > highestVal) {
            highestVal = arr[i];
        } else if (arr[i] < lowestVal) {
            lowestVal = arr[i];
        }
    }

    minimum = total - highestVal;
    maximum = total - lowestVal;

    console.log(minimum + " " + maximum);
}
