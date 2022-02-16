import React, {useCallback} from 'react';
import Calculator from '../../template/Calculator';
import {
  RESET_CAL,
  POSNEG_CAL,
  EQUAL_CAL,
  PERCENT_CAL,
  DELETE_CAL,
  INPUT_CAL,
} from '../../Context/Action';
import {useCalState, useCalDispatch} from '../../Context/inedx';

const CalcualotrContainer = () => {
  const {currentVal, resultVal} = useCalState();
  const dispatch = useCalDispatch();

  const calculateFunc = useCallback(e => {
    const value = e.target.value;

    switch (value) {
      case 'C':
        dispatch({type: RESET_CAL, value: value});
        break;

      case '+/-':
        dispatch({type: POSNEG_CAL, value: value});
        break;

      case '=':
        dispatch({type: EQUAL_CAL, value: value});
        break;

      case '%':
        dispatch({type: PERCENT_CAL, value: value});
        break;

      case '←':
        dispatch({type: DELETE_CAL, value: value});
        break;

      default:
        dispatch({type: INPUT_CAL, value: value});
        break;
    }
  }, []);
  return (
    <Calculator
      calculateFunc={calculateFunc}
      currentVal={currentVal}
      resultVal={resultVal}
    />
  );
};

export default CalcualotrContainer;
