import { ReactNode } from 'react';

import Header from '../header/Header';

type LoyoutProps = {
  children: ReactNode;
};

const Loyout = ({ children }: LoyoutProps) => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Loyout;
