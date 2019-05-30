import React, { Fragment, FC } from 'react';

import { GlobalStyles } from '@styled'

interface IProps {
}

export const MainLayout: FC<IProps> = ({ 
  children 
}) => (
  <Fragment>
    <GlobalStyles />
    <main>
      {children}
    </main>
  </Fragment>
)
