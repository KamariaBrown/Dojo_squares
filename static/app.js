var a = React.createElement("h1", {style:{backgroundColor:'	#0000ff', color:"white",height:"257px",width:"253px",display:"inline-block"}},"white on blue");
var b = React.createElement("h1", {style:{backgroundColor:'	#ff0000', color:"#0000ff",height:"257px",width:"253px",display:"inline-block"}},"blue on red");
var c= React.createElement("h1", {style:{backgroundColor:'	#ffbfcb', color:"#2d8100",height:"257px",width:"253px",display:"inline-block"}},"green on pink");
ReactDOM.render(a, document.getElementById('box1')); 
ReactDOM.render(b, document.getElementById('box2')); 
ReactDOM.render(c, document.getElementById('box3'));

console.log("saying hello")