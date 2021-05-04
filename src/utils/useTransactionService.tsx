import { useContext, useEffect } from 'react';
import AppContext from '../context/background/AppContext';
import { transactionService } from '../index';

export default function useTransactionService() {
  const { setState, state, addTransaction } = useContext(AppContext);

  const getTransactions = () => {
    transactionService.getListOfTransactions().then((result) => {
      setState({ ...state, transactions: result });
    });
  };

  const sendTransaction = (to: string, value: number) => {
    transactionService
      .addTransaction({
        date: new Date(),
        id: state.transactions.length,
        from: state.publicAddress,
        to,
        value,
      })
      .then((result) => {
        addTransaction(result);
      });
  };

  useEffect(getTransactions, []);

  return { state, sendTransaction };
}
