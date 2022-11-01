import { Layout, Image } from "antd";

const { Sider, Content, Footer } = Layout;

const App = () => {
        return (
                <Layout>
                    <Sider style={{ height: "100vh", backgroundColor: "white" }}>
                        <Image
                            src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
                            preview={false}
                        />
                    </Sider>
                    <Layout>
                        <Content>
                            {/*<AppRoutes />*/}
                        </Content>
                        <Footer style={{ textAlign: "center" }}>
                            BackOffice Fiuber ©2022
                        </Footer>
                    </Layout>
                </Layout>
        );
}

export default App;
