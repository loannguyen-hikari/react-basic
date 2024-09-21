import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import React, { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/api.service";

const UserPage = () => {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUser(res.data);
  };

  return (
    <div>
      <UserForm loadUser={loadUser}/>
      <UserTable 
      dataUser={dataUser}
      loadUser={loadUser}
      />
    </div>
  );
};

export default UserPage;
