let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || []; //se ele não retornar algo guardado padrão ele retorna um array vazio


function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        //for expecifico para array, o todos e a variavel 'todo' ele vai percorrer cada um dos itens e retornar na variavel todo.
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let pos = todos.indexOf(todo); //ele vai procurar no array de todos o indice no valor de todo passado.
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        //passando atribute de adicionar onclick e apos a função passando concatenada no parametro pos.

        let linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText); // adicionar todotext dentro do todoelement
        todoElement.appendChild(linkElement); // adicionar botao de excluir

        listElement.appendChild(todoElement); // adicionar cada um um do todoelement
    }
}

renderTodos();

function addTodo() {
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() { //Ela vai salvar a lista de todos e salvar no Storage
    localStorage.setItem('list_todos', JSON.stringify(todos)); //convertando o vetor em JSON, stringFy vai transforma o vetor em uma string
}

//Salvando no localStorage que e global. Set item que vai setar um valor no storage.
//Ele nao guarda vetores ou objetos e simples uma chave valor que guarda em STRING. 