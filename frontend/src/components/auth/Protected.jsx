import { Navigate } from "react-router-dom";

const Protected = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/signin" />;
};

export default Protected;
