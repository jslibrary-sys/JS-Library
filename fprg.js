
let d=document.getElementById("d"),v="",done=false;
function show(){d.innerText=v||"0"}
function clear(){v="";done=false;show()}
function add(k){
if(done&&!/[+\-*/]/.test(k))v="";
done=false;
if(k==="."){
let a=v.split(/[+\-*/]/).pop();
if(a.includes("."))return;
if(!a)v+="0";
}
v+=k;show();
}
function equal(){
try{
if(!v||!/^[\d.+\-*/() ]+$/.test(v))throw 0;
let r=Function("return ("+v+")")();
if(!Number.isFinite(r))throw 0;
v=String(r);done=true;show();
}catch{v="";d.innerText="Error";done=true}
}
document.addEventListener("click",e=>{
let b=e.target.closest("[data-value],[data-action]");
if(!b)return;
if(b.dataset.action==="clear")clear();
else if(b.dataset.action==="equal")equal();
else add(b.dataset.value);
});
document.addEventListener("keydown",e=>{
let k=e.key;
if(/^[0-9.+\-*/]$/.test(k)){e.preventDefault();add(k)}
else if(k==="x"||k==="X"){e.preventDefault();add("*")}
else if(k==="Enter"||k==="="){e.preventDefault();equal()}
else if(k==="Backspace"){e.preventDefault();v=v.slice(0,-1);done=false;show()}
else if(k==="Escape"||k==="Delete"){e.preventDefault();clear()}
});
