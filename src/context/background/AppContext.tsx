import { createContext } from 'react';
import { Transaction } from '../../services/TransactionsService';
import Constants from '../../utils/constants';


import { loadTransactions } from '../../utils/helper';
import { IAppState } from './AppState';



type ContextType = {
  state: IAppState,
  addTransaction: (transaction: Transaction) => void
  setState: (state: IAppState) => void
}

export const initAppState: IAppState = {
  transactions: loadTransactions(),
  publicAddress: Constants.publicAddress,
  balance: Constants.accountBalance,
  ethPrice: Constants.ethPrice
};


const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {}
});

export default AppContext;
