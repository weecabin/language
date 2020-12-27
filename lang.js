const ms=require("./mystrings")
const str="a misc string to be used as a search target. I'll create search locate parameters tp extract substrings out of this string";

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
  document.getElementById("params").innerHTML=JSON.stringify(srch,null,2);
}

function extract()
{
  
}