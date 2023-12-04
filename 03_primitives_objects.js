//n - null
//n - number
//s - symbol
//s - string
//b - boolean
//b - bigint
//u - undefined
let a = null;
let b = 345;
let c = false; //can be true also
let d = BigInt("657") + BigInt("6")
let e = "amit"
let f = Symbol("I am a nice symbol")
let g = undefined //let g is also same
console.log(a, b, c, d, e, f, g)
console.log(typeof d)

//objects in JS
//obeject is a non-primitive data type
const item = {
  'Amit': true,
  'Elvish': false,
  'Smarak': 69,
  'Tulsi': undefined
}
console.log(item["Elvish"])
console.log(item["sdf"])