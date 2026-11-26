
const h=React.createElement;

let data=[
["Leanne Graham","Sincere@april.biz","Gwenborough"],
["Ervin Howell","Shanna@melissa.tv","Wisokyburgh"],
["Clementine Bauch","Nathan@yesenia.net","McKenziehaven"],
["Patricia Lebsack","Julianne.OConnor@kory.org","South Elvis"],
["Chelsey Dietrich","Lucio_Hettinger@annie.ca","Roscoeview"]
];

function Navbar(){
return h("header",{style:{background:"#19192f",color:"white",padding:"15px 20px",display:"flex",justifyContent:"space-between"}},
h("h2",{style:{margin:0}},"Dashboard"),"Welcome, Admin");
}

function Sidebar(){
let [active,set]=React.useState("Home");
return h("aside",{style:{background:"#172442",color:"white",width:262,padding:20}},
h("h3",null,"Menu"),
...["Home","Analytics","Users","Settings"].map(x=>
h("p",{key:x,onClick:()=>set(x),style:{padding:10,cursor:"pointer",background:active==x?"#304366":"transparent"}},x)));
}

function Dashboard(){
let [users]=React.useState(data);
let cards=[["TOTAL USERS","10","#087bfa"],["REVENUE","$1500","#16a34a"],["ORDERS","30","#e63946"],["GROWTH","+12%","#f59e0b"]];

return h("main",{style:{background:"#f1f3f6",padding:20,flex:1,minWidth:0}},
h("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:20}},
...cards.map(c=>h("div",{key:c[0],style:{background:"white",padding:22,borderRadius:10,boxShadow:"0 3px 10px #ddd"}},
c[0],h("h1",{style:{color:c[2],margin:0}},c[1])))),
h("h3",null,"Recent Users"),
h("div",{style:{overflowX:"auto"}},
h("table",{style:{width:"100%",background:"white",borderCollapse:"collapse",textAlign:"left"}},
h("thead",{style:{background:"#19192f",color:"white"}},
h("tr",null,...["Name","Email","City"].map(x=>h("th",{key:x,style:{padding:12}},x)))),
h("tbody",null,...users.map((u,i)=>h("tr",{key:i,style:{borderBottom:"1px solid #ddd"}},
...u.map((x,j)=>h("td",{key:j,style:{padding:10}},x))))))));
}

function App(){
return h(React.Fragment,null,
h(Navbar),
h("div",{style:{display:"flex",minHeight:"calc(100vh - 60px)",flexWrap:"wrap"}},
h(Sidebar),h(Dashboard)));
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
