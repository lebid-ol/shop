import { Card, Button, Tag } from "antd";
import { Link } from "react-router-dom";

function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <Card
          key={user.id}
          style={{ marginBottom: 16 }}
          title={user.name}
        >
          <p>Роль: {user.role}</p>

          <Tag color={user.isOnline ? "green" : "red"}>
            {user.isOnline ? "Онлайн" : "Оффлайн"}
          </Tag>

          <br /><br />

          <Button type="primary">
            <Link to={`/users/${user.id}`}>Подробнее</Link>
          </Button>
        </Card>
      ))}
    </>
  );
}

export default UserList;