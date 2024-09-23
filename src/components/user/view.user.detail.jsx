import React, { useState } from "react";
import { Button, Drawer, notification } from "antd";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/api.service";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } =
    props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    //step 1: upload file
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    if (resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded;
      const resUpdateUserAvatar = await updateUserAvatarAPI(
        newAvatar,
        dataDetail._id,
        dataDetail.fullName,
        dataDetail.phone
      );
      if (resUpdateUserAvatar.data) {
        setIsDetailOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser();
        notification.success({
          message: "Update user avatar",
          description: "Updated avatar successfully",
        });
      } else {
        notification.error({
          message: "Error update file",
          description: JSON.stringify(resUpdateUserAvatar.message),
        });
      }
    } else {
      notification.error({
        message: "Error upload file",
        description: JSON.stringify(resUpload.message),
      });
    }

    //step 2: update user
  };

  return (
    <Drawer
      width={"40vw"}
      title="User Detail"
      onClose={() => setIsDetailOpen(false)}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>ID: {dataDetail._id}</p>
          <br />
          <p>Full Name: {dataDetail.fullName}</p>
          <br />
          <p>Phone: {dataDetail.phone}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Avatar:</p>
          <div
            style={{
              width: "100px",
              height: "100px",
              marginTop: "10px",
              border: "1px solid #ccc",
            }}
          >
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
              alt=""
            />
          </div>
          <div>
            <label
              htmlFor="btnUpload"
              style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "blue",
                borderRadius: "5px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Upload Avatar
            </label>
            <input
              type="file"
              hidden
              id="btnUpload"
              onChange={handleOnChangeFile}
            />
          </div>
          {preview && (
            <>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  marginTop: "10px",
                  marginBottom: "15px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={preview}
                  alt=""
                />
              </div>
              <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
                Save
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <p>No Data</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
