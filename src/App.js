import React, { useState } from "react";
import ToDo from "./components/ToDo";
import TodoList from "./components/TodoList";

function App() {

  
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(35).substring(2,5),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todos) => todos.id !== id)])
  };

  const handlToggle = (id) => {
    setTodos([...todos.map((todos) => todos.id === id ? {...todos, complete: !todos.complete} : {...todos})])
  };

  return (
    <div className="App">
      <header>
        <h1>Количество задач № {todos.length}</h1>
      </header>
      <TodoList addTask={addTask} />
      {todos.map((todo) => {
        return(
          <ToDo
            key={todos.id}
            todos={todo}
            toggle={handlToggle}
            removeTask={removeTask} />
        ) 
      })}
    </div>
  );
}

export default App;
