const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");  // To add cross icon at the end of each task
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData()
}

// click functionality for checking and deleting the task
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// To display even after refreshing
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()