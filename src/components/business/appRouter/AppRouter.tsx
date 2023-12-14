import { Route, Routes } from 'react-router-dom';

import Loyout from 'components/ui/loyout/Loyout';
import PrivateRouter from 'components/hoc/privateRouter/PrivateRouter';

import { privateRoutes, publicRoutes } from 'router/router';

import { useAppSelector } from 'hooks/hooks';

const AppRouter = () => {
  const auth = useAppSelector(state => Boolean(state.user.token));

  return (
    <Loyout>
      <Routes>
        {/* Public Routes ===> */}
        {publicRoutes.map(elem => {
          return (
            <Route
              key={elem.path}
              path={elem.path}
              element={<elem.element />}
            />
          );
        })}

        {/* Private Routes ===> */}
        {privateRoutes.map(elem => {
          return (
            <Route element={<PrivateRouter auth={auth} />}>
              <Route
                key={elem.path}
                path={elem.path}
                element={<elem.element />}
              />
            </Route>
          );
        })}
      </Routes>
    </Loyout>
  );
};

export default AppRouter;
