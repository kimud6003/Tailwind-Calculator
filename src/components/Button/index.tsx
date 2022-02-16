import React from 'react';
import Component from './style';

type Props = {
  onClick: (e: any) => void;
  content: string;
  color?: string;
};
const Button = (props: Props) => {
  return (
    <Component
      onClick={props.onClick}
      className={props.color || 'bg-lightGrey'}
      value={props.content}
    >
      {props.content}
    </Component>
  );
};

export default Button;
