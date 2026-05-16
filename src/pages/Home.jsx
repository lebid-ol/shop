import { Layout, Typography, Button, Card } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <Layout>
      <Content style={{ padding: "40px" }}>
        <Card>
          <Title>Главная страница</Title>

          <Paragraph>
            Добро пожаловать в приложение пользователей.
          </Paragraph>

          <Button type="primary">
            <Link to="/users">Перейти к пользователям</Link>
          </Button>
        </Card>
      </Content>
    </Layout>
  );
}

export default Home;