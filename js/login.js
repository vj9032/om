let taskName = document.querySelector("#tsk-name")
let taskDesc = document.querySelector("#tsk-desc")
let submit = document.getElementById("submit")
submit.onclick = sbmit
let tasks = []
let main = document.getElementById("itemList")
let taskBox = document.createElement("div")
taskBox.setAttribute("id" , "task")
function sbmit(){
    let priority = document.querySelector('input[name="priority"]:checked')
    let taskBox = document.createElement("div")
    taskBox.setAttribute("id" , "task")
    let doneBtn = document.createElement("button")
    let deleteBtn = document.createElement("button")
    doneBtn.setAttribute("class" , "btns")
    deleteBtn.setAttribute("class" , "btns")
    doneBtn.innerText = "✅"
    deleteBtn.innerText = "❌"
    deleteBtn.onclick = function() {
        remove(deleteBtn)
    }
    doneBtn.onclick = function(){
        completed(doneBtn)
    }
    let tsknm = document.createElement("h2")
    let tskdec = document.createElement("p")
    let tskPriority = document.createElement('h3')
    tskPriority.innerText = priority.value
    tsknm.innerText = taskName.value
    tskdec.innerText = taskDesc.value
    taskBox.appendChild(doneBtn)
    taskBox.appendChild(deleteBtn)
    taskBox.appendChild(tsknm)
    taskBox.appendChild(tskdec)
    taskBox.appendChild(tskPriority)
    main.appendChild(taskBox)
}

function remove(button){
    button.parentElement.remove();
}

function completed(button){
    button.parentElement.style.backgroundColor = "green"
    // button.parentElement.style.textDecoration = "line-through"
}

console.log(tasks)