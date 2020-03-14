// Core
import React, { FC, useState } from 'react';

type PropType = {
  title?: string;
  children?: never;
}

export const Header: FC<PropType> = ({ title }: PropType) => {
  const content = typeof title === 'string' ? title : null;
  const [counter, setCounter] = useState(0);

  const increase = (): void => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrease = (): void => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>{content}</h1>
      <h3>{counter}</h3>
    </>
  );
};

Header.defaultProps = {
  title: 'test',
};
