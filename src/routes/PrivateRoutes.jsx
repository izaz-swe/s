import { useSelector } from "react-redux";
import { Navigate, Outlet, Route } from "react-router-dom";
const PrivateRoutes = ({role}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return isAuthenticated ? (
    user.role == role ? (
      <Outlet />
    ) : (
      <Navigate to="/access-denied"/>
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
