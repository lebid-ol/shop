import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function Navbar() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Главная</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/users">Пользователи</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to="/about">О проекте</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;