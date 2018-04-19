/* Note: The main and serviceLane functions had to be altered in order to allow the widths to be passed in */
function serviceLane(n, cases, arr) {
    var oneWidth = [0];
    var twoWidth = [0];
    var threeWidth = [0];
    var results = [];


    for (var i = 0; i < arr.length; i++) {
        oneWidth.push(oneWidth[i]);
        twoWidth.push(twoWidth[i]);
        threeWidth.push(threeWidth[i]);
        if (arr[i] === 1) {
            oneWidth[i+1] += 1;
        } else if (arr[i] === 2) {
            twoWidth[i+1] += 1;
        } else if (arr[i] === 3) {
            threeWidth[i+1] +=1;
        }
    }

    for (var i = 0; i < cases.length; i++) {

        var startIndex = cases[i][0];
        var endIndex = cases[i][1] + 1;


        if (oneWidth[endIndex] > oneWidth[startIndex]) {
            results.push(1);
        } else if (twoWidth[endIndex] > twoWidth[startIndex]) {
            results.push(2);
        } else {
            results.push(3);
        }
    }

    return results;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    var width = readLine().split(' ');
    var widths = width.map(Number);
    var cases = [];
    for(cases_i = 0; cases_i < t; cases_i++){
       cases[cases_i] = readLine().split(' ');
       cases[cases_i] = cases[cases_i].map(Number);
    }
    var result = serviceLane(n, cases, widths);
    console.log(result.join("\n"));



}
