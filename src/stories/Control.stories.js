import React from 'react';
import Control from '../components/Control';

export default {
  title: 'Control',
  component: Control,
};

const calculateFunc = e => {
  alert(`${e.target.value}가 나왔어요`);
};

export const control = () => {
  return (
    <div className="h-[40rem] w-2/3">
      <Control onClick={calculateFunc} />
    </div>
  );
};
