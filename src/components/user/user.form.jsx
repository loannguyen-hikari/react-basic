import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "antd";
import axios from "axios";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClickBtn = () => {
    const URL_BACKEND = "http://localhost:8080/api/v1/user";
    const data = {
      fullName: fullName,
      email: email,
      password: password,
      phone: phoneNumber,
    };
    axios.post(URL_BACKEND, data);
  };

  return (
    <div className="user-form" style={{ margin: "20px", width: "50%" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Full name</span>
          <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <Button type="primary" onClick={() => handleClickBtn()}>
            Create user
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
