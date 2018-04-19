function solve(a0, a1, a2, b0, b1, b2) {
    var results = [0, 0];
    var scores1 = [a0, a1, a2];
    var scores2 = [b0, b1, b2];

    for (var i = 0; i < scores1.length; i++) {
        if (scores1[i] > scores2[i]) {
            results[0]++;
        } else if (scores1[i] < scores2[i]) {
            results[1]++;
        }
    }

    return results;

}
