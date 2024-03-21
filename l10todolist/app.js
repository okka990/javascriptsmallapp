// Get ui

var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',(e)=>{
    // console.log("hay");

    addnew();
    e.preventDefault();
});

var gettodos = JSON.parse(localStorage.getItem('todos'));
// console.log(gettodos);

if(gettodos){
    gettodos.forEach(gettodo=>addnew(gettodo));
}

function addnew(todo){
    let todotext = gettextbox.value;
    console.warn(todotext);


    if(todo){
        todotext = todo.text;
    }

    if(todotext){

        const li = document.createElement('li');
    // const i = document.createElement('i');

        if(todo && todo.done){
            li.classList.add('completed');
        }
   
    // li.appendChild(i);
    // console.log(li)
    li.appendChild(document.createTextNode(todotext));
    // console.log(li);
    getul.appendChild(li);
    gettextbox.value="";
    gettextbox.focus();

    updatelocalstorage();

    li.addEventListener('click',function(){
        li.classList.toggle('completed');
        updatelocalstorage();
    });

    li.addEventListener('contextmenu',function(e){
        li.remove();
        updatelocalstorage();
        e.preventDefault();
    });

    }

}



function updatelocalstorage(){
    var getalllis = document.querySelectorAll('li');

    // console.warn(getalllis);
    const todos = [];

    getalllis.forEach(getallli=>{
        // console.log(getallli.textContent);

        todos.push({
            text:getallli.textContent,
            done:getallli.classList.contains('completed')
        });

    });

    console.log(todos);

    localStorage.setItem('todos',JSON.stringify(todos));
}
//29TD

 // localStorage.setItem('name','aung');
// hello


