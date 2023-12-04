//functions are used to seperate logic

const hello = () => {
    console.log("hey how are you")
    return "hi"
  }
  
  function onePlusAvg(x, y) {
    console.log("Have been done")
    //for rounding off Math.round((x+y)/2)
    return 1 + (x + y) / 2
  }
  
  //Arrow function 
  const sum = (p, q) => {
    return p + q
  }
  
  let a = 1
  let b = 2
  let c = 3
  
  let d = hello();
  console.log(d)
  console.log("one plus average of a and b is ", onePlusAvg(a, b))
  console.log("one plus average of b and c is ", onePlusAvg(b, c))
  console.log("one plus average of a and c is ", onePlusAvg(a, c))