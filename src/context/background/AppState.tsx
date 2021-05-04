import React, { useReducer } from 'react';
import AppContext, { initAppState } from './AppContext';
import AppReducer from './AppReducer';
import Actions from '../contextActions';
import { Transaction } from '../../services/TransactionsService';

export interface IAppState {
  transactions: Array<Transaction>;
  publicAddress: string;
  balance: number;
  ethPrice: number;
}

const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);

  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };

  // TODO: Complete the addTransaction method
  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: [transaction, ...state.transactions],
    });

    state.balance = parseFloat((state.balance - transaction.value).toPrecision(8));
    setState(state);
  }

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
