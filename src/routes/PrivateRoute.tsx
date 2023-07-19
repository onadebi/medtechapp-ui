import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/RootReduces";
import appRoutes from "./AppRoutes";

const PrivateRoute = () => {
    const { userInfo } = useSelector((state: RootState) => state.auth);
    return (
      <>{userInfo ? <Outlet /> : <Navigate to={appRoutes().home.login} replace />}</>
    );
}

export default PrivateRoute