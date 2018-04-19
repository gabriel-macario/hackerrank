function diagonalDifference(a) {

    var leftTop = 0;
    var rightTop = 0;
    var numCol = a[0].length;

    //Top Left to Bottom Right Sum
    for (var i = 0; i < numCol; i++) {
        leftTop += a[i][i];
    }

    //Top Right to Bottom Left Sum
    for (var i = 0, j = numCol - 1; i < numCol; i++, j--) {
        rightTop += a[i][j];
    }

    return Math.abs(leftTop - rightTop);
}
