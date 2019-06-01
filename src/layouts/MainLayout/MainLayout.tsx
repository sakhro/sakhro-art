import React, { FC, Fragment } from 'react';

import '@styles/app.scss'

interface IProps {}

export const MainLayout: FC<IProps> = props => (
    <Fragment>
      <main>
        {props.children}
      </main>
    </Fragment>
  )
