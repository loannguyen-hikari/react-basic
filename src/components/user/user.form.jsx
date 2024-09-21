import React, { useState } from "react";
import { Input, notification, Button, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setphone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loadUser } = props;

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Create user",
        description: "Created user successfully",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setphone("");
  };

  return (
    <div style={{ margin: "15px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Users</h3>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Create user
        </Button>
      </div>
      <Modal
        title="Create User"
        open={isModalOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"Create"}
      >
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
              value={phone}
              onChange={(event) => setphone(event.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserForm;
