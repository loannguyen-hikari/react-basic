import { useEffect, useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const PrivateRoute = (props) => {
  const { user } = useContext(AuthContext);
  if (user && user.id) {
    return <>{props.children}</>;
  }
  return (
    <Result
      status="403"
      title="Unauthorized!"
      subTitle={"Need to login"}
      extra={
        <Button type="primary">
          <Link to="/">
            <span>Back to homepage</span>
          </Link>
        </Button>
      }
    />
  );
};

export default PrivateRoute;
