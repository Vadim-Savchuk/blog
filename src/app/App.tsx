import { useEffect } from 'react';

import { getUser } from '../redux/slices/userSlice';

import { useAppDispatch } from 'hooks/hooks';

import AppRouter from 'components/business/appRouter/AppRouter';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return <AppRouter />;
};

export default App;
