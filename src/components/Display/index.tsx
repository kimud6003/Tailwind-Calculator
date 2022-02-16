import React from 'react';
import {Wrapper, CurrentNum, ResultNum} from './style';

type props = {
  currentNum: Array<string>;
  resultNum: number;
};

const Display = (props: props) => {
  return (
    <Wrapper>
      <CurrentNum>{props.currentNum}</CurrentNum>
      <ResultNum>{props.resultNum}</ResultNum>
    </Wrapper>
  );
};

export default Display;
