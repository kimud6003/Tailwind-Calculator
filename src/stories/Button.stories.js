import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const calculateFunc = e => {
  alert(`${e.target.value}가 나왔어요`);
};

export const MediumGrey = () => (
  <Button
    onClick={calculateFunc}
    color="w-[3rem] h-[3rem] bg-mediumGrey"
    content="C"
  />
);

export const lightOrange = () => (
  <Button
    onClick={calculateFunc}
    color="w-[3rem] h-[3rem] bg-lightOrange"
    content="+"
  />
);

export const mediumOrange = () => (
  <Button
    onClick={calculateFunc}
    color="w-[3rem] h-[3rem] bg-mediumOrange"
    content="%"
  />
);

export const Number = () => (
  <Button
    onClick={calculateFunc}
    color="w-[3rem] h-[3rem] bg-lightGrey"
    content="9"
  />
);
