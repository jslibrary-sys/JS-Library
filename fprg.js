
let d=document.getElementById("d"),v="";
document.addEventListener("click",e=>{
let b=e.target.closest("[data-value],[data-action]");
if(!b)return;
if(b.dataset.action==="clear"){v="";d.innerText="0"}
else if(b.dataset.action==="equal"){
try{let r=eval(v);if(!Number.isFinite(r))throw 0;v=String(r);d.innerText=v}
catch{v="";d.innerText="Error"}
}else{v+=b.dataset.value;d.innerText=v}
});
