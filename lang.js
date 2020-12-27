//const ms=require("./mystrings")
let str="a misc string to be used as a search target. \n\
Locate parameters (below) are used to extract substrings out of this string";

let srch = 
{
  locate:
    [
      [2,"a "],
      [1," target"]
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
