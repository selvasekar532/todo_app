import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

  };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value= {value}
       placeholder='Update Task' 
       onChange={(e) => setValue(e.target.value)}/>
       <button type="submit" class="todo-btn">Update Task</button>
    </form>
  )
}