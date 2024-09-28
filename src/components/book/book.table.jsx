import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const BookTable = (props) => {
  const {
    dataBook,
    setDataBook,
    loadBook,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize,
  } = props;

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (current - 1) * pageSize}</>;
      },
    },
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Title",
      dataIndex: "mainText",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity ",
      dataIndex: "quantity",
    },
    {
      title: "Author ",
      dataIndex: "author",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div style={{ display: "flex", gap: "15px" }}>
          <EditOutlined></EditOutlined>
          <DeleteOutlined style={{ cursor: "pointer" }} />
        </div>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current);
      }
    }
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        setCurrent(+pagination.pageSize);
      }
    }
  };
  return (
    <Table
      columns={columns}
      dataSource={dataBook}
      rowKey={"_id"}
      pagination={{
        current: current,
        pageSize: pageSize,
        showSizeChanger: true,
        total: total,
        showTotal: (total, range) => {
          return (
            <div>
              {range[0]}-{range[1]} trên {total} rows
            </div>
          );
        },
      }}
      onChange={onChange}
    />
  );
};

export default BookTable;
