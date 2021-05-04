import Constants from './constants';
import { Transaction } from '../services/TransactionsService';

export const loadTransactions = () => {
    const pastTransactions = (Constants.pastTransactions as { [key: string]: any});
    const transactions = new Array<Transaction>();
    Object.keys(pastTransactions).map(key => {

        const transaction: Transaction = {
            id: Number(key),
            from: Constants.publicAddress,
            to: pastTransactions[key].recipient,
            value: pastTransactions[key].amount,
            date: new Date(pastTransactions[key].date)
        };

        transactions.push(transaction);
    });

    return transactions;
};

export const shortAddress = (address: string): string => {
    return `${address.substring(0, 6)}...${address.substring(38)}`;
}

export const dateFormat = (date: Date): string => {
    return `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()} ${date.toLocaleTimeString('es-AR')}`;

}