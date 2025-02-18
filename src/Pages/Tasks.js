import React from 'react';

function Task() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")
  const [TodoEditing, setTodoEditing] = React.useState(null)
  const [editingText, setEditingText] = React.useState("")

  React.useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  React.useEffect(() => {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)

      if(loadedTodos) {
        setTodos(loadedTodos)
      }
}, [])

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }

    setTodos([...todos].concat(newTodo))
    setTodo("")
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)

    setTodos(updatedTodos)
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText("")
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
        <button type="submit">Add Task</button>
      </form>
      {todos.map((todo) => <div key={todo.id}> 

        {TodoEditing === todo.id ?
        
        (<input type="text" onChange={(e) => setEditingText(e.target.value)}
        value={editingText} />)
          :
        (<div>{todo.text}</div>)}

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <input type="checkbox" onChange={() => toggleComplete(todo.id)}
      checked={todo.completed} />

      {TodoEditing === todo.id ? (<button onClick={() => editTodo(todo.id)}
      >Submit Updates</button>) : (<button onClick={() => setTodoEditing(todo.id)}
      >Update Task</button>)}
      
      

    </div>)}
    </div>
    
  );

}

export default Task;