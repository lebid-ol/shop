import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/users">Пользователи</Link>
        <Link to="/about">О проекте</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;