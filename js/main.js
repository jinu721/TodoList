const inputField = document.getElementById('inp');
const buttonAdd = document.getElementById('btn');

const sectionBody = document.getElementById('section-body');

let count=0;

let buttonAddClick = ()=>{
    if(inputField.value == ""){
        inputField.style.border = "solid 2px red";
    }else{
        inputField.style.border = "solid 2px grey";
        createList();
        inputField.value = "";
    }
}

let checkInp = ()=>{
    if(inputField.value == ""){
        inputField.style.border = "solid 2px red";
    }else{
        inputField.style.border = "solid 2px grey";
    }
}

let createList = ()=>{
    let no = document.createElement('p');
    let date = document.createElement('p');
    let name = document.createElement('p');
    let edit = document.createElement('div');
    let del = document.createElement('div');
    let done = document.createElement('div');
    let noDiv = document.createElement('div');
    let dateDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    let actionDiv = document.createElement('div');

    let content = document.createElement('div');
    noDiv.classList.add('noDiv');
    dateDiv.classList.add('dateDiv');
    nameDiv.classList.add('nameDiv');
    actionDiv.classList.add('actionDiv');
    edit.classList.add('edit');
    del.classList.add('delete');
    done.classList.add('done');
    content.classList.add('content');
    count++;
    no.innerText = count;
    date.innerText = getCurrentDate();
    name.innerText = inputField.value;
    edit.innerText = "Edit"
    del.innerText = "Delete"
    done.innerText = "Done"
    noDiv.appendChild(no);
    dateDiv.appendChild(date);
    nameDiv.appendChild(name);
    actionDiv.appendChild(edit);
    actionDiv.appendChild(del);
    actionDiv.appendChild(done);
    content.appendChild(noDiv);
    content.appendChild(dateDiv);
    content.appendChild(nameDiv);
    content.appendChild(actionDiv);
    sectionBody.appendChild(content);
    del.addEventListener('click',()=>{
        content.remove();
    });
    edit.addEventListener('click',()=>{
        let popup = document.getElementById('popup');
        let editInp = document.getElementById('inp-edit');
        let buttonCancel = document.getElementById('btn-cancel');
        let butttonUpdate = document.getElementById('btn-update');
        editInp.value = name.innerText;
        popup.style.display = "block";
        buttonCancel.addEventListener('click',()=>{
            popup.style.display = "none";
        })
        butttonUpdate.addEventListener('click',()=>{
            name.innerText = editInp.value;
            popup.style.display = "none";
        })
    })
    done.addEventListener('click',()=>{
        name.style.textDecoration = "line-through";
    })
}

let getCurrentDate= ()=>{
    let date = new Date();
    let year = date.getFullYear();
    let monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
    let month = monthNames[date.getMonth()];
    let day = date.getDate();
    let hours = date.getHours();
    let ampm = hours>=12?"PM":"AM";
    hours = hours%12;
    hours = hours?hours:12;
    let minutes = date.getMinutes();
    minutes = minutes<10? "0"+minutes:minutes;
    let fullTime = month+" "+day+","+year+" / "+hours+":"+minutes+" "+ampm;
    return fullTime;
}

buttonAdd.addEventListener('click',buttonAddClick);
inputField.addEventListener('input',checkInp);