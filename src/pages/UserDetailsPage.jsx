import { useParams, Link } from "react-router-dom";
import { useUsers } from "../context/UsersContext";
import { Layout, Card, Button, Tag, Spin, Alert } from "antd";

const { Content } = Layout;

function UserDetailsPage() {
  const { id } = useParams();
  const { users, loading, toggleUserStatus } = useUsers();

  if (loading) {
    return <Spin size="large" />;
  }

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <Alert message="Пользователь не найден" type="error" />;
  }

  return (
    <Layout>
      <Content style={{ padding: "40px" }}>
        <Card title={user.name}>
          <p>Возраст: {user.age}</p>
          <p>Роль: {user.role}</p>
          <p>{user.description}</p>

          <Tag color={user.isOnline ? "green" : "red"}>
            {user.isOnline ? "Онлайн" : "Оффлайн"}
          </Tag>

          <br /><br />

          <Button
            type="primary"
            onClick={() => toggleUserStatus(user.id)}
          >
            Изменить статус
          </Button>

          <br /><br />

          <Button>
            <Link to="/users">Назад</Link>
          </Button>
        </Card>
      </Content>
    </Layout>
  );
}

export default UserDetailsPage;