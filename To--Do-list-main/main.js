const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const deleteBtn = document.querySelector(".delete-btn")


const addInput = function(){
    if(taskInput.value == ""){
        alert("error")
    }else if(taskInput.value !== ""){
        let newItem = document.createElement("li");
        newItem.innerHTML = `<span>${taskInput.value}</span><button class="delete-btn">Sil</button>`;
        todoList.appendChild(newItem);
        taskInput.value = ""
    }
}
addBtn.addEventListener("click", addInput);

const clear = function(event){
    if(event.target.classList.contains("delete-btn")){
        event.target.parentElement.remove()
    }
}
todoList.addEventListener("click", clear);

