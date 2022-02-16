import React, {Dispatch, createContext, useReducer, useContext} from 'react';
import {Action, States} from './Action';
import reducer from './Reducer';

type CalDispatch = Dispatch<Action>;
const CalStateContext = createContext<States | null>(null);
const CalDispatchContext = createContext<CalDispatch | null>(null);

const init: States = {currentVal: [], resultVal: 0};

export function CalContextProvider({children}: {children: React.ReactNode}) {
  const [states, dispatch] = useReducer(reducer, init);

  return (
    <CalDispatchContext.Provider value={dispatch}>
      <CalStateContext.Provider value={states}>
        {children}
      </CalStateContext.Provider>
    </CalDispatchContext.Provider>
  );
}

export function useCalState() {
  const state = useContext(CalStateContext);
  if (!state) throw new Error('Provider not found');
  return state;
}

export function useCalDispatch() {
  const dispatch = useContext(CalDispatchContext);
  if (!dispatch) throw new Error('Provider not found');
  return dispatch;
}
