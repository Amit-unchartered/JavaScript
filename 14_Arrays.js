let marks_class_12 = [91, 82, 84, 95, false, "NOT present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])

//if we try to access the index which is not present then we will get UNDEFINED
console.log(marks_class_12[6])

//to find the length of array
console.log("The length marks of class_12 are", marks_class_12.length)

//adding value to the array
marks_class_12[6] = 89
//changing the value of an array
marks_class_12[0] = 96
console.log(marks_class_12)

//in JS arrays are objects
console.log(typeof marks_class_12)

//printing all the values of array using FOR loop
for(let i = 0; i < marks_class_12.length; i++){
    console.log(marks_class_12[i])
}