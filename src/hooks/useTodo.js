import { useState } from "react";

export const useTodo = (data) => {
  const [todos, setTodos] = useState(data);

  const addTodo = (todo) => {
    const item = {
      title: todo,
      isComplete: false,
      isEditable: false,
    };

    setTodos([...todos, { ...item, id: todos.length + 1 }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditable: !todo.isEditable } : { ...todo }
      )
    );
  };

  const updateTodo = (id, value) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: value, isEditable: false }
          : { ...todo }
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
      )
    );
  };

  const sortTodos = (value) => {
    console.log(value);

    setTodos([...todos.sort((a, b) =>  a[value] > b[value] ? 1 : -1)]);
  };

  return {
    todos,
    deleteTodo,
    editTodo,
    updateTodo,
    addTodo,
    toggleTodo,
    sortTodos,
  };
};
