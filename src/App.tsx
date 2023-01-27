import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodoContextProvider } from "./store/todos-context";

function App() {
  return (
    <TodoContextProvider>
      <h1>Hello World!</h1>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
