import { Link } from "react-router-dom";

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <Link
          key={user.id}
          to={`/users/${user.id}`}
          className="user-link"
        >
          <div className={`card ${user.isOnline ? "online-card" : "offline-card"}`}>
            <h3>{user.name}</h3>

            <p>
              Статус:{" "}
              <span className={user.isOnline ? "online" : "offline"}>
                {user.isOnline ? "Онлайн" : "Оффлайн"}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UserList;