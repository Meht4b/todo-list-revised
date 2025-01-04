var checkbox = document.querySelectorAll(".checkbox");

function checkboxTick(){
  if (this.checked) {
    this.nextSibling.nextElementSibling.style.display = 'flex';
  } else {
    this.nextSibling.nextElementSibling.style.display = 'none';
  }
}

for (i=0;i<checkbox.length;i++){
checkbox[i].addEventListener('change',checkboxTick);
}

document.getElementById('newTaskInputButton').onclick=submitFunction;
document.getElementById('newTaskInput').addEventListener('keypress',function(event){
    if (event.key == 'Enter'){
        event.preventDefault();
        document.getElementById('newTaskInputButton').click();
    }
})

function submitFunction(){
    
    const message = document.getElementById('newTaskInput').value;
    console.log('hh')
    if (message != ''){
        document.getElementById('newTaskInput').value='';
        const liChild = document.createElement('li');
        liChild.innerHTML = '<div class="newCheckbox"><input type="checkbox" class="checkbox"><div class="newCheckboxColor"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg></div></div>'

        const senderMessage = document.createElement('h3');
        senderMessage.innerHTML=message;

        
        liChild.appendChild(senderMessage);

        
        document.getElementById('taskList').appendChild(liChild);

        console.log(document.querySelectorAll(".checkbox")[document.querySelectorAll(".checkbox").length-1].nextElementSibling);

        var checkbox = document.querySelectorAll(".checkbox");
        for (i=0;i<checkbox.length;i++){
          checkbox[i].addEventListener('change',checkboxTick);
        }

        
        /*
        var messageBody = document.querySelector('#messages');
        messageBody.lastChild.scrollIntoView();
        */
    }

}

