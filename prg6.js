
let d=document.getElementById("d"),v="",done=false;

function show(){d.textContent=v||"0"}
function clear(){v="";done=false;show()}

function add(k){
if(done&&!"+-*/".includes(k))v="";
done=false;
if(k==="×")k="*";
if(k==="÷")k="/";
if(k==="."){
let a=v.split(/[+\-*\/]/).pop();
if(a.includes("."))return;
if(!a)v+="0";
}
if("+-*/".includes(k)){
if(!v&&k!=="-")return;
if(/[+\-*\/]$/.test(v))v=v.slice(0,-1);
}
v+=k;show();
}

function equal(){
try{
if(!v||/[+\-*\/]$/.test(v)||!/^[0-9+\-*\/(). ]+$/.test(v))throw 0;
let r=Function('"use strict";return ('+v+')')();
if(!Number.isFinite(r))throw 0;
v=String(r);done=true;show();
}catch{v="";d.textContent="Error";done=true}
}

document.addEventListener("click",e=>{
let b=e.target.closest("[data-value],[data-action]");
if(!b)return;
if(b.dataset.action==="clear")clear();
else if(b.dataset.action==="equal")equal();
else if(b.dataset.value)add(b.dataset.value);
});

document.addEventListener("keydown",e=>{
let k=e.key;
if(k==="x"||k==="X"||k==="×")k="*";
if(k==="÷")k="/";
if("0123456789.+-*/".includes(k)){e.preventDefault();add(k)}
else if(k==="Enter"||k==="="){e.preventDefault();equal()}
else if(k==="Backspace"){e.preventDefault();v=v.slice(0,-1);done=false;show()}
else if(k==="Escape"||k==="Delete"){e.preventDefault();clear()}
});
