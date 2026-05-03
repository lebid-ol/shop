import UserDetails from "./UserDetails";

function UserList({ users, selectedId, onSelectUser }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="card-wrapper">
          
          <div
            className={`card ${
              user.isOnline ? "online-card" : "offline-card"
            }`}
            onClick={() =>
              onSelectUser(user.id === selectedId ? null : user.id)
            }
          >
            <h3>{user.name}</h3>

            <p>
              Статус:{" "}
              {user.isOnline ? (
                <span className="online">Онлайн</span>
              ) : (
                <span className="offline">Оффлайн</span>
              )}
            </p>
          </div>

          {selectedId === user.id && (
            <UserDetails user={user} />
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;