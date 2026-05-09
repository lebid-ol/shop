import { createContext, useContext, useEffect, useState } from "react";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Александр", age: 28, role: "Developer", isOnline: true, description: "Frontend разработчик" },
        { id: 2, name: "Ирина", age: 32, role: "Designer", isOnline: false, description: "UX/UI дизайнер" },
        { id: 3, name: "Максим", age: 25, role: "QA", isOnline: true, description: "Тестировщик" },
        { id: 4, name: "Ольга", age: 30, role: "Manager", isOnline: false, description: "Проект менеджер" },
        { id: 5, name: "Дмитрий", age: 35, role: "DevOps", isOnline: true, description: "Инженер инфраструктуры" },
      ]);

      setLoading(false);
    }, 700);
  }, []);

  function toggleUserStatus(id) {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, isOnline: !user.isOnline }
          : user
      )
    );
  }

  return (
    <UsersContext.Provider value={{ users, loading, toggleUserStatus }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}