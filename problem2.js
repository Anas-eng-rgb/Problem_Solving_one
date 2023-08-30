function is_perfect() {
    var num = Number(prompt("Enter Any Number To check The Square Root"));
    if (num > 0) {
        var sr = parseInt(Math.sqrt(num));
        if ((sr * sr) == num) {
            return true;
        }

        else {
            return false;
        }
    }
}

console.log(is_perfect());