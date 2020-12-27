const ms=require("./mystrings")

const str ="this is a test string. i'll look for test substrings in this string"

let srch = 
{
  locate:
    [
      [2,"test "],
      [1," in"]
    ],
  replace:
    [
      [" ",""]
    ]
}

console.log(srch.locate)
let test=ms.FindBracketed(str,srch.locate,srch.replace);
console.log(test)