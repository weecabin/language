//const ms=require("./mystrings")
let str="a misc string to be used as a search target. I'll create search locate parameters tp extract substrings out of this string";

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
  document.getElementById("params").innerHTML= 
  //"testing\nsecond line";
  JSON.stringify(srch,null,2);
}

function extract()
{
  window.alert("Extract");
  let res = FindBracketed(srch.locate,srch.replace,str);
  document.getElementById("res").innerHTML=res;
}