import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodoContextProvider } from "./store/todos-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <h1>Hello world</h1>
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
