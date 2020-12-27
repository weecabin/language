const ms=require("./mystrings")

const str ="this is a test string. i'll look for test substrings in this string"

let srch = 
{
  locate:
    [
      [1,"look "],
      [1," in"]
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