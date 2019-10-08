let thingsTodo = JSON.parse(localStorage.getItem('data'));
renderTodos();
let theClone = thingsTodo;
function addThingToDo() {
    let thingTodo = { text: "", isDone: false };
    thingTodo.text = document.getElementById('input').value;
    thingsTodo.push(thingTodo);
    renderTodos();
    setItem();
}
function renderTodos() {
    if (thingsTodo === null) { thingsTodo = []; }
    let listHTML = thingsTodo.map((item, i) => {
        let items =
            `<li class="${item.isDone ? 'done' : 'not-done'}">${item.text} 
            <a href="#" onclick="removeItem(${i})">x</a> 
            <a href="#" onclick="toggleDone(${i})">${item.isDone ? 'Toggle not Done' : 'Toggle Done'}</a>
        </li>`;
        return items;
    }).join("")
    document.getElementById('listThingsToDo').innerHTML = listHTML;
}
function removeItem(i) {
    thingsTodo.splice(i, 1);
    renderTodos(thingsTodo);
    setItem();
}
function toggleDone(i) {
    thingsTodo[i].isDone = !thingsTodo[i].isDone;
    renderTodos()
    console.log(thingsTodo[i].isDone)
    setItem();
}
function showThingsDone() {
    thingsTodo = thingsTodo.filter((thing) => {
        if (thing.isDone === true) { return true }
    })
    renderTodos();
    thingsTodo = theClone;
}
function showThingsUndone() {
    thingsTodo = thingsTodo.filter((thing) => {
        if (thing.isDone === false) { return true }
    })
    renderTodos();
    thingsTodo = theClone;
}
function showAll() {
    thingsTodo = theClone;
    renderTodos();
}
//------Catch Event----------
document.getElementById('addButton').addEventListener('click', function () {
    addThingToDo();
})
//----local storage--------
function setItem() {
    localStorage.setItem("data", JSON.stringify(thingsTodo));
}
