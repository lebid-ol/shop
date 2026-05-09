import { Link, useParams } from "react-router-dom";
import { useUsers } from "../context/UsersContext";

function UserDetailsPage() {
  const { id } = useParams();
  const { users, loading, toggleUserStatus } = useUsers();

  if (loading) {
    return <h2>Загрузка пользователя...</h2>;
  }

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return (
      <div>
        <h2>Пользователь не найден</h2>
        <Link to="/users">Вернуться к списку</Link>
      </div>
    );
  }

  return (
    <div className="details">
      <h1>{user.name}</h1>

      <p><strong>Возраст:</strong> {user.age}</p>
      <p><strong>Роль:</strong> {user.role}</p>
      <p><strong>Описание:</strong> {user.description}</p>

      <p>
        <strong>Статус:</strong>{" "}
        <span className={user.isOnline ? "online" : "offline"}>
          {user.isOnline ? "Онлайн" : "Оффлайн"}
        </span>
      </p>

      <button onClick={() => toggleUserStatus(user.id)}>
        Изменить статус
      </button>

      <br />
      <br />

      <Link to="/users">Назад к пользователям</Link>
    </div>
  );
}

export default UserDetailsPage;