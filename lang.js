//const ms=require("./mystrings")
let str="a misc string to be used as a search target. \n\
Locate parameters (below) are used to extract substrings out of this string.\n\
latlon 32.7336006165,-117.190002441 for KSAN";

let srch = 
{
  locate:
    [
      [1,"latlon"],
      [1,"for"]
    ],
  replace:
    [
      [" ",""]
    ]
}
const target= document.getElementById("strtosearch").innerHTML;
const parameters= document.getElementById("searchstr").value;
const result= document.getElementById("extracted").value;
function setup()
{
  //window.alert("in setup");
  target=str;
  parameters=JSON.stringify(srch);
}

function extract()
{
  //window.alert("Extract");
  let newsrch = JSON.parse(parameters)
  let res = FindBracketed(str,newsrch.locate,newsrch.replace);
  result=res;
}
