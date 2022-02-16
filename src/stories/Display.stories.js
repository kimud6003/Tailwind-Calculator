import React from 'react';
import Display from '../components/Display';

export default {
  title: 'Display',
  component: Display,
};

export const display = () => (
  <div className="w-2/3">
    <Display currentNum={'1+1'} resultNum={2} />
  </div>
);
