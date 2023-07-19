import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/RootReduces";
import appRoutes from "./AppRoutes";

interface IProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<IProps> = ({ children }) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  return userInfo ? (
    <>{children}</>
  ) : (
    <Navigate to={appRoutes().home.login} replace />
  );
};

export default ProtectedRoute;
