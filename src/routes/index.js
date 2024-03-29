import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/authContext"

export const PrivateRoute = ({ }) => {

  const { signed } = useContext(AuthContext);

  return signed || localStorage.getItem('user') ? <Outlet /> : <Navigate to={"/"} />;
}

