import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import { useState } from "react";


function App() {
  const onDelete = (todo) =>{
    console.log("I am delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  }
  const[todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to market to get the job 1 done"
    },
    {
      sno: 2,
      title: "Go to ghat",
      desc: "You need to go to ghat to get the job 2 done"
    },
    {
      sno: 3,
      title: "Go to house",
      desc: "You need to go to house to get the job 3 done"
    },
  ]);

  return (
    <>
      <Header title="My Todo List" />
      <Todos todos ={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
