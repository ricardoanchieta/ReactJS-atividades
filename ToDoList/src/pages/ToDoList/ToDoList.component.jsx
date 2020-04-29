import '../../App.css';
import '../../components/TodoForm';
import '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

export default function ToDoList(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (storageTodos) {
        setTodos(storageTodos);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);
  
    function addTodo(todo) {
      setTodos([todo, ...todos]);
    }
  
    function toggleComplete(id) {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      );
    }
  
    function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  
    return (
      <div className="container input-field col s12">
        
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    );
}
