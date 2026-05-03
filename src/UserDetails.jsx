function UserDetails({ user }) {
  return (
    <div className="details">
      <p><strong>Возраст:</strong> {user.age}</p>
      <p><strong>Роль:</strong> {user.role}</p>
      <p><strong>Описание:</strong> {user.description}</p>

      {user.isOnline ? (
        <p className="online">Пользователь сейчас онлайн</p>
      ) : (
        <p className="offline">Пользователь сейчас оффлайн</p>
      )}
    </div>
  );
}

export default UserDetails;