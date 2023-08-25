import Header from "./components/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to market to get the job 1 done",
    },
    {
      sno: 2,
      title: "Go to ghat",
      desc: "You need to go to ghat to get the job 2 done",
    },
    {
      sno: 1,
      title: "Go to house",
      desc: "You need to go to house to get the job 3 done",
    },
  ];
  return (
    <>
      <Header title="My Todo List" />
      <Todos todos ={todos}/>
      <Footer />
    </>
  );
}

export default App;
