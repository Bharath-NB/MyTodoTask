    import React, { useState } from 'react';
    import TodoForm from './Components/TodoForm';
    import TodoList from './Components/TodoList';
    import './App.css';

    const App = () => {
      const [todos, setTodos] = useState([]);
      const [editingTodo, setEditingTodo] = useState(null);
      const [filter, setFilter] = useState('both');

      const addTodo = (todo) => {
        setTodos([...todos, todo]);
      };

      const editTodo = (updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
        setEditingTodo(null);
      };

      const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };

      const toggleStatus = (id, status) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, status } : todo)));
      };

      const filteredTodos = todos.filter(todo => 
        filter === 'both' ? true : todo.status === filter
      );

      return (
        <div className="container">
          <h1>My Todo</h1>
          <TodoForm addTodo={addTodo} editTodo={editTodo} editingTodo={editingTodo} />
          <div className="header-row">
            {todos.length > 0 && <h2>My Todos</h2>}
            <div className="filter-select">
              <label>Status Filter: </label>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="both">Both</option>
                <option value="completed">Completed</option>
                <option value="not completed">Not Completed</option>
              </select>
            </div>
          </div>
          <TodoList 
            todos={filteredTodos} 
            deleteTodo={deleteTodo} 
            setEditingTodo={setEditingTodo} 
            toggleStatus={toggleStatus} 
          />
        </div>
      );
    };

    export default App;
