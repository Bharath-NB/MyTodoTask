import React from 'react';
import '../App.css';

const TodoItem = ({ todo, deleteTodo, setEditingTodo, toggleStatus }) => {
  const getStatusColor = () => {
    return todo.status === 'completed' ? 'green' : 'red';
  };

  return (
    <div className="todo-card">
      <div className="todo-details">
        <h3>{todo.taskName}</h3>
        <p>{todo.description}</p>
      </div>
      <div className="todo-actions">
        <select 
          value={todo.status} 
          onChange={(e) => toggleStatus(todo.id, e.target.value)}
          style={{ backgroundColor: getStatusColor(), color: 'white' }} // Apply dynamic color and text color here
        >
          <option value="not completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
        <button 
          className="small" 
          onClick={() => setEditingTodo(todo)} 
          style={{ backgroundColor: 'green', color: 'white' }} // Apply green background color and white text color to the "Edit" button
        >
          Edit
        </button>
        <button 
          className="small" 
          onClick={() => deleteTodo(todo.id)} 
          style={{ backgroundColor: 'red', color: 'white' }} // Apply red background color and white text color to the "Delete" button
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
