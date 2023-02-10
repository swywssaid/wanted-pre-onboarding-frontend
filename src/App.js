import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodosPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
