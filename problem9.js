function sum() {
    var n = +prompt("Enter The Number Of Elements");
    const arr = [n];
    var s = 0;
    var count_e = 0;
    var count_o = 0;
    for (var i = 0; i < n ; i++) {
        var y = +prompt("Enter the index of " + i);
        s +=y;

        if (y % 2 == 0) {
            count_e = count_e + 1;
        }

        if (y % 2 != 0) {
            count_o = count_o + 1;
        }
    }

    for (var i = 0; i < n ; i++) {
        console.log(i+1);
    }

    console.log("The Sum Of Numbers IS: " + s);
    console.log("The Number Of Even IS: " + count_e);
    console.log("The Number Of Odd IS: " + count_o);
}

sum();