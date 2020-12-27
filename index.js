const ms=require("./mystrings")

const str ="this is a test string. i'll look for test substrings in this string. latlon 32.7336006165,-117.190002441 for KSAN";

let srch = 
{
  locate:
    [
      [1,"latlon "],
      [1," for"]
    ],
  replace:
    [
      ["",""]
    ]
}
console.log(str)
console.log(srch.locate)
console.log(srch.replace)
let test=ms.FindBracketed(str,srch.locate,srch.replace);
console.log(test)
//console.log(JSON.stringify(srch,null,2))