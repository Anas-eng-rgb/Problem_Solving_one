function finalGrade() {
    var grade = +prompt("Please Enter Your Grade");
    var project = +prompt("Please Enter The Number Of Projects");
    if(((grade >= 0) && (grade <= 100)) && (project > 0)) {
        if((grade >= 90) || (project > 10)) {
            console.log("100");
        }

        else if(((grade >= 75) && (grade < 90)) || ((project >= 5) && (project < 10))) {
            console.log("90");
        }

        else if(((grade >= 50) && (grade < 75)) || ((project >= 2) && (project < 5))) {
            console.log("75");
        }

        else {
            console.log("In Other Cases");
        }
    }
}


finalGrade();