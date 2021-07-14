export const data = {
    todos: [],

    getStorage: function(){
        if(localStorage.length > 0){
            JSON.parse(localStorage.getItem('todos')).forEach(todo => {
                data.todos.push(todo)
            })
        } else {
            setStorage();
        }    
    },

    setStorage: function(){
        localStorage.setItem('todos', JSON.stringify(data.todos))
    },
}