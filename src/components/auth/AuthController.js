import { Navigate, Outlet } from "react-router-dom";

function AuthController(props) {

  // useEffect(() => {
  //   axios
  //     .get("/api/v1/users/me", { withCredentials: true })
  //     .then((res) => login())
  //     .catch((error) => logout());
  // }, []);
  console.log(props.isLoggedIn);
  return !props.isLoggedIn ===true? <Outlet /> : <Navigate to="/login" replace />;
}

export default AuthController;
