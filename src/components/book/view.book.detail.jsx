import React, { useState } from "react";
import { Button, Drawer, notification } from "antd";

const ViewBookDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadBook } =
    props;

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
          <p>Title: {dataDetail.mainText}</p>
          <br />
          <p>Author: {dataDetail.author}</p>
          <br />
          <p>Category: {dataDetail.category}</p>
          <br />
          <p>Price: {dataDetail.price}</p>
          <br />
          <p>Quantity: {dataDetail.quantity}</p>
          <br />
          <p>Sold: {dataDetail.sold}</p>
          <br />
          <p>Thumbnail:</p>
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
              src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${
                dataDetail.thumbnail
              }`}
              alt=""
            />
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
export default ViewBookDetail;
