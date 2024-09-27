import {
  Input,
  Button,
  Form,
  notification,
  Col,
  Row,
  Divider,
  message,
  Descriptions,
} from "antd";
import { Link } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  const { setUser } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const res = await loginUserAPI(values.email, values.password);
    if (res.data) {
      message.success("Logined successfully");
      localStorage.setItem("access_token", res.data.access_token);
      setUser(res.data.user)
      navigate("/");
    } else {
      notification.error({
        message: "Error login",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
  };
  return (
    <Row justify={"center"} style={{ marginTop: "40px" }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <legend style={{ fontSize: "20px", margin: "30px 0px 10px 0px" }}>
            Login
          </legend>
          <Form form={form} layout="vertical" name="basic" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                loading={loading}
                type="primary"
                onClick={() => form.submit()}
              >
                Login
              </Button>
              <Link to={"/"}>Go to homepage →</Link>
            </div>
            <Divider></Divider>
            <div
              style={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
                marginTop: "35px",
              }}
            >
              New to this service? <Link to={"/register"}>Register here</Link>
            </div>
          </Form>
        </fieldset>
      </Col>
    </Row>
  );
};

export default LoginPage;
