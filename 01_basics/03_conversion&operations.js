let score = null

// console.log(typeof score)

let num = Number(score)  //this will convert the string into number but will be NaN -> Not a Number
// console.log(typeof num)
// console.log(num)   

// console.log("6" / "2")

//String conversion
// "33" -> 33
// "33abc" -> NaN
// null -> 0
// true -> 1
// false -> 0
// undefined -> NaN

/*
String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

The conversion follows the rules:

Value	        Becomes…
undefined	    NaN
null	        0
true / false	1 / 0

string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.



Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

Follows the rules:

Value	                        Becomes…
0, null, undefined, NaN, ""	    false
any other value	                true
*/

//**********************   Operations   ********************8
//Addition operator
console.log(2+2) // 4
console.log("2" + "2") // "22"
console.log(2 + 2 + '1') // 41
console.log('1' + 2 + 2) // 122

//Substraction and other operators
console.log('6' - 2) // 4
console.log(6 - '2') // 4
console.log('6' / '2') // 4

let str = "2"
console.log(+str)
console.log(typeof +str) // number -> unary + oprtor converts the string or any other datatype into number

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5