let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
}

//problem 1
for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//problem 2
for(key in marks){
    console.log("the marks of " + key + " are " + marks[i])
}