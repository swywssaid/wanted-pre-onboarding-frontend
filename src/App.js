import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/todo" element={<TodosPage />} />
    </Routes>
  );
}

export default App;
