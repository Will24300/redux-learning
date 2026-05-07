import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function TodoApp() {
  const [inputText, setInputText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  



  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      dispatch(addTodo(inputText));
      setInputText('');
    }
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
      setEditingId(null);
    }
  };

  const remainingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Redux Todo List</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new todo..."
          style={{ width: '70%', marginRight: '10px', padding: '5px' }}
        />
        <button type="submit">Add</button>
      </form>

      <div style={{ margin: '20px 0' }}>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('active'))}>Active</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(clearCompleted())}>Clear Completed</button>
      </div>

      <div style={{ margin: '10px 0' }}>
        <strong>{remainingCount}</strong> items remaining
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ 
            margin: '10px 0', 
            padding: '10px', 
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ flex: 1 }}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span style={{ 
                  flex: 1,
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}>
                  {todo.text}
                </span>
                <button onClick={() => startEditing(todo)}>Edit</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

      {filteredTodos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>No todos to display</p>
      )}
    </div>
  );
}

export default TodoApp;