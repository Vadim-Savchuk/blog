import { Route, Routes } from 'react-router-dom';

import Loyout from 'components/ui/loyout/Loyout';
import PrivateRouter from 'components/hoc/privateRouter/PrivateRouter';

import { privateRoutes, publicRoutes } from 'router/router';

const AppRouter = () => {
  return (
    <Loyout>
      <Routes>
        {/* Public Routes ===> */}
        {privateRoutes.map(elem => {
          return (
            <Route
              key={elem.path}
              path={elem.path}
              element={<elem.element />}
            />
          );
        })}

        {/* Private Routes ===> */}
        {publicRoutes.map(elem => {
          return (
            <Route element={<PrivateRouter auth={true} />}>
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
