import { view } from './card.js';
import { data } from './storageApi.js';

const addTodoBtn = document.getElementById('add-todo-btn')
const deleteAllTodosBtn = document.getElementById('delete-all-todos-btn')
const deleteLastTodosBtn = document.getElementById('delete-last-todo-btn')

const modal = document.getElementById('modal')
const fieldTitle = document.getElementById('field-title')
const fieldText = document.getElementById('field-text')

const saveTodoBtn = document.getElementById('save-todo-btn')
const closeTodoBtn = document.getElementById('close-todo-btn')

const app = () => {
    data.getStorage()
    view.render()

    addTodoBtn.addEventListener('click', () => {
        toggle(modal)
    })
    
    closeTodoBtn.addEventListener('click', () => {
        toggle(modal)
    })

    saveTodoBtn.addEventListener('click', () => {
        let title = fieldTitle.value
        let text = fieldText.value
    
        data.todos.push({title, text})
        toggle(modal)
        view.render()
        data.setStorage()
    })

    deleteAllTodosBtn.addEventListener('click', () => {
        data.todos.splice(0,data.todos.length)
        view.render()
        data.setStorage()
    })
    
    deleteLastTodosBtn.addEventListener('click', () => {
        data.todos.pop()
        view.render()
        data.setStorage()
    })
}
app()

// Modal
function toggle(elem){
    elem.classList.toggle('active')
}

const dragAndDrop = () => {
    const card = document.getElementById('card-todo')
}