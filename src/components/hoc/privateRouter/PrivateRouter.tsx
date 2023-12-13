import { Navigate, Outlet } from 'react-router-dom';

type PrivateRouterProps = {
  auth: boolean;
};

const PrivateRouter = ({ auth }: PrivateRouterProps) => {
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
