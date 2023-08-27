import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo";
import About from "./components/About";


function App() {
  let initTodo;
  console.log(localStorage.getItem("todos"));
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Added props", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodos = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodos]);

    console.log(myTodos);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todo List" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              )
            }}
          ></Route>
          <Route
            exact
            path="/about"
            render={() => {
              console.log("I am in about");
              return (
                <>
                  
                  <About />
                </>
              )
            }}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
