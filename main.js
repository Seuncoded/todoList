const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
let todoarr = []




function dispList(){
    listContainer.innerHTML = "";
    for (let i = 0; i < todoarr.length; i++) {
        listContainer.innerHTML += `<li>${todoarr[i]} 
        <span><button id="btn1" onclick=delItem(${i})>Delete</button>
        <button id="btn2" onclick=editItem(${i})>Edit</button></span></li>`

    }
}


function addTodoList() {
    if (inputBox.value == '') {
        alert('You Must Write Something')
    } else {
        todoarr.unshift(inputBox.value);
        dispList()

    }
    inputBox.innerHTML = "";
}


function delItem(p){
    todoarr.splice(p, 1);
    dispList()
}


function editItem(r){
    let changing = prompt('Enter The New List');
    todoarr.splice(r, 1, changing);
    dispList()
}