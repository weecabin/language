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
  //window.alert("in setup");
  document.getElementById("srchstr").innerHTML=str;
  document.getElementById("params").value= 
  //"testing\nsecond line";
  //JSON.stringify(srch,null,2);
  JSON.stringify(srch);
}

function extract()
{
  //window.alert("Extract");
  let newsrch = JSON.parse(document.getElementById("params").value)
  let res = FindBracketed(str,newsrch.locate,newsrch.replace);
  document.getElementById("res").value=res;
}
