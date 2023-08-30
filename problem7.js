function fun() {
    var n = +prompt("Enter Any Number");
    for(var i = 1 ; i <= n ; i++) {
        if(n % i == 0) {
            console.log(i);
        }
    }
}


fun();