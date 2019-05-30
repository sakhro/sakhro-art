import React, { Fragment, FC } from 'react';

interface IProps {
}

export const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <Fragment>
      <main>
        {children}
      </main>
    </Fragment>
  );
};
