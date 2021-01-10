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

function setup()
{
  document.getElementById("strtosearch").innerHTML=str
  document.getElementById("searchstr").value=JSON.stringify(srch);
}

function extract()
{
  //window.alert("Extract");
  let newsrch = JSON.parse(document.getElementById("searchstr").value)
  strtosearch= document.getElementById("strtosearch").innerHTML;
  let res = FindBracketed(strtosearch,newsrch.locate,newsrch.replace);
  document.getElementById("extracted").innerHTML=res;
}
