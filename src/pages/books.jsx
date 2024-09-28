import BookTable from "../components/book/book.table";
import { useState, useEffect } from "react";
import { fetchAllBookAPI } from "../services/api.service";
import BookForm from "../components/book/book.form";

const BookPage = () => {
  const [dataBook, setDataBook] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadBook();
  }, [current, pageSize]);

  const loadBook = async () => {
    const res = await fetchAllBookAPI(current, pageSize);
    if (res.data) {
      setDataBook(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };
  return (
    <div>
      <BookForm></BookForm>
      <BookTable
        dataBook={dataBook}
        setDataBook={setDataBook}
        loadBook={loadBook}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurrent={setCurrent}
        setPageSize={setPageSize}
      ></BookTable>
    </div>
  );
};

export default BookPage;
