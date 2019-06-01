import cn from 'classnames'
import React, { FC, useMemo } from 'react';

import c from './Button.scss'

interface IProps {
  className?: string
  onClick: () => void
}

export const Button: FC<IProps> = props => {
  const className: string = useMemo(() => (
    cn(c.container, props.className)
  ), [props.className])

  return (
    <button
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
