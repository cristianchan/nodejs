var grades = [100,50,75];
var totalGrade = 0;
grades.forEach(function(grade){
	totalGrade += grade; 
})
totalGrade = totalGrade/grades.length;
console.log(totalGrade);