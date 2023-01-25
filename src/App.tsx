import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodoContextProvider } from "./store/todos-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <h1>You can see the entered new todos below</h1>
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
