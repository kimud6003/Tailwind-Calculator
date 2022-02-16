export const RESET_CAL = 'RESET_CAL';
export const POSNEG_CAL = 'POSNEG_CAL';
export const EQUAL_CAL = 'EQUAL_CAL';
export const PERCENT_CAL = 'PERCENT_CAL';
export const DELETE_CAL = 'DELETE_CAL';
export const INPUT_CAL = 'INPUT_CAL';

export type Action =
  | {type: 'RESET_CAL'; value: string}
  | {type: 'POSNEG_CAL'; value: string}
  | {type: 'EQUAL_CAL'; value: string}
  | {type: 'PERCENT_CAL'; value: string}
  | {type: 'INPUT_CAL'; value: string}
  | {type: 'DELETE_CAL'; value: string};

export type States = {
  currentVal: Array<any>;
  resultVal: number;
};
