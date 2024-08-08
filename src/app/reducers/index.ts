import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { calculatorReducer, CalculatorState } from './caculator.reducer';

export interface State {
  calculator: CalculatorState;
}

export const reducers: ActionReducerMap<State> = {
  calculator: calculatorReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
