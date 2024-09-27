import { Link, Navigate, useNavigate } from "react-router-dom";
import { Menu, message } from "antd";
import { Children, useState, useContext } from "react";
import {
  HomeOutlined,
  UsergroupAddOutlined,
  BookOutlined,
  LoginOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { AuthContext } from "../context/auth.context";
import { logOutAPI } from "../../services/api.service";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate()
  console.log(user);
  const handleLogOut = async () => {
    const res = await logOutAPI();
    if (res.data) {
      //clear data
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      message.success("Logged out successfully");

      //redirect to home
      navigate("/")
    }
  };

  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },
    ...(!user.id
      ? [
          {
            label: <Link to={"/login"}>Login</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined></AliwangwangOutlined>,
            children: [
              {
                label: <span onClick={() => handleLogOut()}>Log out</span>,
                key: "logout",
              },
            ],
          },
        ]
      : []),
  ];

  const [current, setCurrent] = useState("");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
