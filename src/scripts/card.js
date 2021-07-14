import { data } from './storageApi.js'

export const view = {
  render: function(){
    document.getElementById('todo-list').innerHTML = data.todos.map(todo => this.getHTML(todo)).join(' ')
    document.getElementById('todos-counter').textContent = data.todos.length
  },

  getHTML: function(todo){
    return `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${todo.title}</div>
  <div class="card-body">
    <h5 class="card-title">${this.getDate()}</h5>
    <h5 class="card-title">${todo.text}</h5>
  </div>
</div>
    `
  },

  getDate: function(){
    let year = new Date().getFullYear()
    let month = new Date().getMonth() + 1
    if(month < 10){
      month = '0' + month
    }
    
    let day = new Date().getDate()
    if(day < 10){
      day = '0' + day
    }
    
    let hours = new Date().getHours()
    if(hours < 10){
      hours = '0' + hours
    }
    
    let minutes = new Date().getMinutes()
    if(minutes < 10){
      minutes = '0' + minutes
    }
    
    return `${day}-${month}-${year} ${hours}:${minutes}`
  }
}