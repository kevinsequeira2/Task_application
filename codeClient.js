// clean the input

function clear() {
    let clear= document.getElementById("text").value="";
}

// add new task
function add() {
    
    let list= document.createElement("li");
    let text= document.getElementById("text").value;
    console.log(text);
    let content=document.createTextNode("------} "+text);
    list.appendChild(content);
    document.getElementById("father").appendChild(list);
    clear();
    
}
