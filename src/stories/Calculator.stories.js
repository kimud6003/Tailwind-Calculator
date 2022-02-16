import React from 'react';
import Calculator from '../template/Calculator';

export default {
  title: 'Calculator',
  component: Calculator,
};

const calculateFunc = e => {
  alert(`${e.target.value}가 나왔어요`);
};

export const cal = () => (
  <div className="w-2/3">
    <Calculator
      calculateFunc={calculateFunc}
      currentVal="1 + 1"
      resultVal={2}
    />
  </div>
);
