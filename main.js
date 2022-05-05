// Grades
// 1. Create a variable called "testGrade" which is a random number between 0 and 100.
// 2. Create a series of conditionals that returns which letter grade corresponds with the score. For reference:
// 0 to 65 is an "F"
// 65 to 70 is a "D"
// 71 to 79 is a "C"
// 80 to 89 is a "B"
// 90 to 100 is an "A"

var testGrade = Math.floor(Math.random() * 100);
// var testGrade = 81
console.log(testGrade);
if (testGrade >= 0 && testGrade <= 65) {
    console.log('You get an F');
} else if ( testGrade > 65 && testGrade <= 70){
    console.log('You get a D');
}else if (testGrade > 70 && testGrade <= 80) {
    console.log('You get a C');
}else if ( testGrade >80 && testGrade <= 89  ){
    console.log('You get a B');
} else if(testGrade >=90 ) {
    console.log('You get an A');
} else {
    console.log('Sorry, you may need to retake this test');
}
