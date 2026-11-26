document.querySelector("#btn").addEventListener("click", async function(){

let d=document.querySelector("#data"),m=document.querySelector("#msg");
m.innerText="Loading...";
d.innerHTML="";

try{
let res=await fetch("https://jsonplaceholder.typicode.com/users");
if(!res.ok) throw Error();

let users=await res.json();
d.innerHTML=users.map(u=>`<tr>
<td>${u.id}</td><td>${u.name}</td>
<td>${u.email}</td><td>${u.phone}</td>
</tr>`).join("");

m.innerText="";
}catch{
m.innerText="Error loading data!";
}

});
