function staircase(n) {
    var cur = 1;

    while (cur <= n) {
        var stair = "";

        for (var i = 0; i < n - cur; i++) {
            stair += " ";
        }

        for (var i = 0; i < cur; i++) {
            stair += "#";
        }

        console.log(stair);
        cur++;
    }
}
