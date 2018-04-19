function timeConversion(s) {
    var hourStr = s.slice(0, 2);
    var minStr = s.slice(3, 5);
    var secStr = s.slice(6, 8);
    var per = s.slice(-2);
    var milHour = 0;
    var milHourStr = hourStr;

    if (per === "AM" & hourStr === "12") {
        milHourStr = "00";
    } else if (per === "PM" & hourStr !== "12") {
        milHour = parseInt(hourStr, 10) + 12;
        milHourStr = milHour.toString();
    }

    return (milHourStr + ":" + minStr + ":" + secStr);
}
