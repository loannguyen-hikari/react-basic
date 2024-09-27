import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useEffect, useContext } from "react";
import { AuthContext } from "../src/components/context/auth.context";

const App = () => {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    if (res.data) {
      //success
      setUser(res.data.user)
    }
  };
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
