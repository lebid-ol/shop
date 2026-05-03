import { useState } from "react";
import UserList from "./UserList";
import "./index.css";

function App() {
  const [users] = useState([
    { id: 1, name: "Александр", age: 28, role: "Developer", isOnline: true, description: "Frontend разработчик" },
    { id: 2, name: "Ирина", age: 32, role: "Designer", isOnline: false, description: "UX/UI дизайнер" },
    { id: 3, name: "Максим", age: 25, role: "QA", isOnline: true, description: "Тестировщик" },
    { id: 4, name: "Ольга", age: 30, role: "Manager", isOnline: false, description: "Проект менеджер" },
    { id: 5, name: "Дмитрий", age: 35, role: "DevOps", isOnline: true, description: "Инженер инфраструктуры" },
  ]);

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="app">
      <h1>Пользователи</h1>

      <UserList
        users={users}
        selectedId={selectedId}
        onSelectUser={setSelectedId}
      />
    </div>
  );
}

export default App;