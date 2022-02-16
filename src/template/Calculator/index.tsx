import React from 'react';
import {CalWrapper} from './style';
import Display from '../../components/Display';
import Button from '../../components/Button';
import Control from '../../components/Control';
type Props = {
  calculateFunc: (e: any) => void;
  currentVal: Array<string>;
  resultVal: number;
};

const Calculator = (props: Props) => {
  const {calculateFunc, currentVal, resultVal} = props;
  return (
    <CalWrapper>
      <Display currentNum={currentVal} resultNum={resultVal} />
      <Control calculateFunc={calculateFunc} />
    </CalWrapper>
  );
};

export default React.memo(Calculator);
