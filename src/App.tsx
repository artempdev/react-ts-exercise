import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import ExtraPage from "./components/ExtraPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{padding: 15}}>
        <NavLink style={{padding: 15}} to="/">Home</NavLink>
        <NavLink style={{padding: 15}} to="/users">Users</NavLink>
        <NavLink style={{padding: 15}} to="/todos">Todos</NavLink>
      </div>
      <Routes>
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/" element={<ExtraPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
