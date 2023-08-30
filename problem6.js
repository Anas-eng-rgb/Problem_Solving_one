function fun() {
    var n = +prompt("Enter The Number Of Elements");
    const arr = [n];
    for (var i = 0; i < n; i++) {
        var y = +prompt("Enter The Index Of: " + i);
        if(y == 4 || y == 7) {
            console.log("You Are Lucky");
            break;
        }
    
        else {
            console.log("You Are Not Lucky");
        }
    }
}

fun();
