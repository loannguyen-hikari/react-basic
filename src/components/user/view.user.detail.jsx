import React, { useState } from "react";
import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

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
          <div>
            <img
              style={{ width: "100px", height: "100px" }}
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
            <input type="file" hidden id="btnUpload" />
          </div>
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
