import { useUsers } from "../context/UsersContext";
import UserList from "../components/UserList";

function UsersPage() {
  const { users, loading } = useUsers();

  if (loading) {
    return <h2>Загрузка пользователей...</h2>;
  }

  return (
    <div>
      <h1>Пользователи</h1>
      <UserList users={users} />
    </div>
  );
}

export default UsersPage;