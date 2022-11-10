import { Layout, Image } from "antd";
import SideMenu from "../src/components/SideMenu";
import FiuberLogo from "./assets/fiuber-logo.jpeg"
import AppRoutes from "./components/AppRoutes";

const { Sider, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src={FiuberLogo}
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          BackOffice Fiuber ©2022
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
