// By adding the ', {}' it allows us to import something specific from the React Library.
import React, {useState, useEffect} from "react";
import './App.css';
//Importing Components
import Form from "./components/Forms";
import TodoList from "./components/TodoList";

function App() {
  // States
  // 'inputText' is the value, and 'setInputText' is a function that allows you to change that value.
  // The empty pair of quote inside 'useState' is our initial state.
  const [inputText, setInputText] = useState("");
  /* We create another piece of state because we want to store 'todo' items and want to have the inputText as well as
  /  attributes like 'completed' and and Id.
  */
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Side effects
  // Run once when we start up the app
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save local todo items
  const saveLocalTodos = () => {
    // Here we're just adding things to the local storage.
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    // Here we're checking if we have some todo item saved or if we don't.
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    /* 'className' is the way to create a 'class' attribute in JSX because 'class' is a JS reserved keyword 
    /   to create classes.
    */
    <div className="App">
      <header>
        <h1>Courtney's ToDo List</h1>
      </header>
      {/* Making a call to our components. */}
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
