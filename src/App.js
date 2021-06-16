import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        text: inputValue,
        id: uuidv4(),
        favourite: false,
      },
    ]);
    
  };
  const addTodoAsFavourite = () => {
    addTodo();

    addFavourite()
    
  };

  const RemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const addFavourite=(id,text,favourite)=>{

    setTodos([...todos,{id,text,favourite:true}])


  }
  
  return (
    <div className="App">
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>elave et</button>
      <button onClick={addTodoAsFavourite}>favorit kimi elave et</button>

      <section>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.text}</h1>
            <button onClick={() => RemoveTodo(todo.id)}>
              <i className="fa fa-times"></i>
            </button>
            <button
              style={todo.favourite ? { color: "red" } : null}
              onClick={() => addFavourite(todo.id,todo.text.todo.favourite)}
            >
              <i className="fa fa-heart"></i>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
