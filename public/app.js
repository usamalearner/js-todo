var list = document.getElementById("list")

function add_todo(){
    var todo_item = document.getElementById("todo-item")
    // console.log(todo_item.value)

    // create li tag with text node
    var li = document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)


    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("class","btn")
    // class = "btn" also can do styling
    delBtn.setAttribute("onClick","deleteItem(this)")
// poora element utha k pass krdega

    //  create edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class","edit")
    editBtn.setAttribute("onClick","editItem(this)")




    list.appendChild(li)

 



    todo_item.value = "" 
    // ye input ko empty krdega
  

    

}
function deleteItem(e){
    // console.log(e.parentNode)
    // e = delete button
    e.parentNode.remove() 
}
function del_all(){
    list.innerHTML = ""
    
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    console.log(e.parentNode.firstChild)
    // e.parentNode.firstChild.nodeValue = "usama"
    var editValue = prompt("enter edit value",val)
    e.parentNode.firstChild.nodeValue = editValue
}
