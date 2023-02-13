import { Layout, Menu, Row, theme } from "antd";
// import background from "../../public/assets/doctors.jpg";
import "../../pages/login/index.css";
import { Button } from "antd";

const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      id="header"
      className="Layout"
      //   style={{
      //     backgroundImage: `url(${background})`,
      //     height: "100vh",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "cover",
      //   }}
    >
      <Header
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div className="logo" />
        <Menu
          style={{ display: "block", backgroundColor: "transparent" }}
          mode="horizontal"
        >
          <Menu.Item
            key={1}
            style={{ float: "left", color: "white", fontSize: 16 }}
          >
            <b>eDoc.</b>|THE ECHANNELLING PROJECT
          </Menu.Item>
          <Menu.Item key={2} style={{ float: "right", color: "white" }}>
            SIGNIN
          </Menu.Item>
          <Menu.Item key={3} style={{ float: "right", color: "white" }}>
            SIGNUP
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 30,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <b>Avoid Hasseles & Delays</b>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Maxime mollitia, molestiae quas vel sint commodi repudiandae
              <br /> eius sed odit fugiat iusto fuga praesentium optio.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="primary" style={{}}>
              Make Appointment
            </Button>
          </div>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        A Web Solution by <b>Youcef</b>
      </Footer>
    </Layout>
  );
};
export default App;
