import React, { useState } from "react";
import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

  return (
    <Drawer
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
