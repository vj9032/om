let taskName = document.querySelector("#tsk-name")
let taskDesc = document.querySelector("#tsk-desc")
let submit = document.getElementById("submit")
let main = document.getElementById("itemList")
let taskBox = document.createElement("div")
taskBox.setAttribute("id" , "task")
submit.onclick = sbmit



function check(){
    if (taskName.value== "" || taskDesc.value== "" ){
        return false
    }
    return true
}

function sbmit(){
    if(check()){
        let priority = document.querySelector('input[name="priority"]:checked')
        let taskBox = document.createElement("div")
        let doneBtn = document.createElement("button")
        let deleteBtn = document.createElement("button")
        let btnz = document.createElement("div")

        taskBox.setAttribute("id" , "task")
        doneBtn.setAttribute("class" , "btns")
        deleteBtn.setAttribute("class" , "btns")
        
        deleteBtn.onclick = function() {
            remove(deleteBtn)
        }
        doneBtn.onclick = function(){
            completed(doneBtn)
        }
        let tsknm = document.createElement("li")
        let tskdec = document.createElement("li")
        let tskPriority = document.createElement('li')
        let unLis = document.createElement("ul")
        unLis.appendChild(tsknm)
        unLis.appendChild(tskdec)
        unLis.appendChild(tskPriority)

        doneBtn.innerText = "✅"
        deleteBtn.innerText = "❌"
        tskPriority.innerText = priority.value
        tsknm.innerHTML = `<h1>${taskName.value}</h1>`
        tskdec.innerText = taskDesc.value

        btnz.appendChild(doneBtn)
        btnz.appendChild(deleteBtn)
        
        taskBox.appendChild(unLis)
        taskBox.appendChild(btnz)


        main.appendChild(taskBox)

        //reset inputs
        taskName.value = null
        taskDesc.value = null
        priority.checked= false

    }
    else{
        alert("enter valid task and task description")
    }
    
}

function remove(button){
    button.parentElement.parentElement.remove();
}

function completed(button){
    button.parentElement.parentElement.style.backgroundColor = "green"
    // button.parentElement.style.textDecoration = "line-through"
}
