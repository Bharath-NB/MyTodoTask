// TodoList.jsx

import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

const TodoList = ({ todos, deleteTodo, setEditingTodo, toggleStatus }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          setEditingTodo={setEditingTodo}
          toggleStatus={toggleStatus}
          // Conditionally apply a class to the third todo item for large screens
          className={index === 2 ? "todo-item-large-screen" : ""}
        />
      ))}
    </div>
  );
};

export default TodoList;
