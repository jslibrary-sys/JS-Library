function update(){
let l=document.querySelector("#list");
document.querySelector("#count").innerText=l.children.length+" tasks";
}

function add(){
let i=document.querySelector("#task");
if(!i.value.trim())return;

let li=document.createElement("li");
li.style="display:flex;gap:10px;padding:10px;background:#eee;margin:8px 0;border-radius:5px";

let s=document.createElement("span");
s.innerText=i.value;
s.style="flex:1";

let e=document.createElement("button");
e.innerText="Edit";
e.onclick=()=>{
let v=prompt("Edit task",s.innerText);
if(v&&v.trim())s.innerText=v;
};

let d=document.createElement("button");
d.innerText="Delete";
d.onclick=()=>{li.remove();update()};

li.append(s,e,d);
document.querySelector("#list").append(li);
i.value="";
update();
}
