import {evaluate} from 'mathjs';
import {Action, States} from './Action';
import {
  RESET_CAL,
  POSNEG_CAL,
  EQUAL_CAL,
  PERCENT_CAL,
  DELETE_CAL,
  INPUT_CAL,
} from './Action';

const reducer = (states: States, action: Action): States => {
  const cxtCurrentVal: Array<any> = states.currentVal;
  const cxtResultVal: number = states.resultVal;

  if (
    isNaN(Number(action.value)) &&
    isNaN(cxtCurrentVal[cxtCurrentVal.length - 1])
  )
    return states;

  switch (action.type) {
    case RESET_CAL:
      return {
        currentVal: [],
        resultVal: 0,
      };
    case POSNEG_CAL:
      if (!isNaN(Number(cxtCurrentVal.join('')))) {
        const currentValJoin: number = Number(cxtCurrentVal.join(''));
        return {
          currentVal: [currentValJoin * -1],
          resultVal: cxtResultVal,
        };
      } else return states;

    case EQUAL_CAL:
      if (isNaN(cxtCurrentVal[cxtCurrentVal.length - 1])) return states;
      return {
        currentVal: [],
        resultVal: evaluate(cxtCurrentVal.join('')),
      };
    case PERCENT_CAL:
      if (!isNaN(Number(cxtCurrentVal.join('')))) {
        const currentValJoin: number = Number(cxtCurrentVal.join(''));
        return {
          currentVal: [currentValJoin * 0.01],
          resultVal: cxtResultVal,
        };
      } else return states;
    case DELETE_CAL:
      if (cxtCurrentVal.length === 0) return states;
      return {
        currentVal: cxtCurrentVal.slice(0, cxtCurrentVal.length - 1),
        resultVal: cxtResultVal,
      };
    case INPUT_CAL:
      console.log(action.value);
      return {
        currentVal: cxtCurrentVal.concat(action.value),
        resultVal: cxtResultVal,
      };
    default:
      return states;
  }
};
export default reducer;
