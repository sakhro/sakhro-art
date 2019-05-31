import React, { FC, Fragment } from 'react';

interface IProps { }

export const MainLayout: FC<IProps> = ({
  children
}) => (
    <Fragment>
      <main>
        {children}
      </main>
    </Fragment>
  )
