import { Layout, Image } from "antd";
import SideMenu from "../../components/SideMenu";
import FiuberLogo from "../../assets/fiuber-logo.jpeg"
import AppRoutes from "../../components/AppRoutes";
import Login from "../Login"
import useAuth from "../../useAuth";

import { useEffect } from "react";
const { Sider, Content, Footer } = Layout;

const Home = () => {
  const { accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) console.log("Access token de app", accessToken);
  }, [accessToken]);

  return (
    <div>
    {
      !accessToken ? 
      (
        <Login />
      ) : 
      (
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
      )
    }
    </div>
  )
};

export default Home;