import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, checkTodo, deleteTodo } from '../features/todo'

function TodoApp() {
  const todos = useSelector((state)=> state.todo.items);
  const dispatch = useDispatch();

  const handleSubmit = (FormData) => {
    const todoName = FormData.get('todo')
    dispatch(addTodo(todoName))
  }
  return (
    <div className=' flex flex-col gap-5 justify-center items-center'>
      <h1>Todo App</h1>
      <form action={handleSubmit}>
        <input type="text" placeholder='Enter something' name='todo' required className='mr-3 outline-none rounded border' />
        <button type='submit' className='bg-red-500 text-white px-4'>Add +</button>
      </form>

      {todos && (
        <div className='w-1/4'>
          {todos.map((todo)=> (
            <div key={todo.id} className='flex justify-between items-center w-full mb-3'>
               <input
              type="checkbox"
              checked={todo.isChecked}
              onChange={() => dispatch(checkTodo(todo.id))}
            />
              <span className={`${todo.isChecked ? 'line-through' : ""}`}>{todo.text}</span>
              <button className='bg-black text-white px-3' onClick={()=> dispatch(deleteTodo(todo.id))} >x</button>
            </div>
          ))}
        </div>
      ) }
    </div>
  )
}

export default TodoApp