import React, { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const {
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    dataUpdate,
    setDataUpdate,
    loadUser,
  } = props;
  const [id, setID] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (dataUpdate) {
      setID(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handleSubmitBtn = async () => {
    const res = await updateUserAPI(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "Update user",
        description: "Updated user successfully",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error update user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setIsModalUpdateOpen(false);
    setFullName("");
    setPhone("");
    setID("");
    setDataUpdate(null);
  };

  return (
    <Modal
      title="Update a User"
      open={isModalUpdateOpen}
      onOk={() => handleSubmitBtn()}
      onCancel={() => resetAndCloseModal()}
      maskClosable={false}
      okText={"Save"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>ID</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>Full name</span>
          <Input
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
