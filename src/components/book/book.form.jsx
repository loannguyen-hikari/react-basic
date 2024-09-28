import { Input, notification, Button, Modal } from "antd";
const BookForm = () => {
  return (
    <div style={{ margin: "15px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table Users</h3>
        <Button type="primary">Create Book</Button>
      </div>
    </div>
  );
};

export default BookForm;
