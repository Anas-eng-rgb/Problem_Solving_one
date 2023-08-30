function sum() {
    var x = +prompt("Enter Number One");
    var y = +prompt("Enter Number Two");
    var s = 0;
    for(var i = x ; i < y ; i++) {
        if (i % 2 != 0) {
            s = s + i;
        }
    }
    console.log("The Sum Is: " + s);
}

sum();