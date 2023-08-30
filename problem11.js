function testing() {
    var x = +prompt("Enter Frist Number Please");
    var y = +prompt("Enter Second Number Please");
    var product = x * y;
    if((x > 0) && (y > 0)) {
        console.log(`${x} * ${y}  =  ${product}  is Positive`);
    }

    else if((x < 0) || (y < 0)) {
        console.log(`${x} * ${y} = ${product} is Negative`);
    }
    
    else if((x == 0) || (y == 0)) {
        console.log(`${x} * ${y} = ${product} is Zero`);
    }

    else {
        console.log("Invalid");
    }
}

testing();