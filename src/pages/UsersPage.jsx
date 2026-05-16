import { Layout, Typography, Spin, Alert } from "antd";
import { useUsers } from "../context/UsersContext";
import UserList from "../components/UserList";

const { Content } = Layout;
const { Title } = Typography;

function UsersPage() {
  const { users, loading } = useUsers();

  if (loading) {
    return <Spin size="large" style={{ margin: "50px" }} />;
  }

  if (!users.length) {
    return <Alert message="Пользователи не найдены" type="info" />;
  }

  return (
    <Layout>
      <Content style={{ padding: "40px" }}>
        <Title>Пользователи</Title>
        <UserList users={users} />
      </Content>
    </Layout>
  );
}

export default UsersPage; 