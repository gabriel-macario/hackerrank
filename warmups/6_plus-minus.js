function plusMinus(arr) {
    var numPos = 0;
    var numNeg = 0;
    var numZer = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            numPos++;
        } else if(arr[i] < 0) {
            numNeg++;
        } else {
            numZer++;
        }
    }

    console.log(numPos/arr.length);
    console.log(numNeg/arr.length);
    console.log(numZer/arr.length);
}
