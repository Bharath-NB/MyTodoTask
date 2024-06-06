import React, { useState, useEffect } from 'react';
import '../App.css';

const TodoForm = ({ addTodo, editTodo, editingTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');

  useEffect(() => {
    if (editingTodo) {
      setTaskName(editingTodo.taskName);
      setDescription(editingTodo.description);
      setStatus(editingTodo.status);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      editTodo({ ...editingTodo, taskName, description, status });
    } else {
      addTodo({
        id: Date.now(),
        taskName,
        description,
        status
      });
    }
    setTaskName('');
    setDescription('');
    setStatus('not completed');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <textarea
        placeholder="Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{editingTodo ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TodoForm;
