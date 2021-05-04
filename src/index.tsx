import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fontsource-roboto';

import { TransactionsService } from './services/TransactionsService';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { loadTransactions } from './utils/helper';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#167dff'
    },
    secondary: {
      main: '#E33E7F'
    }
  }
});

export const transactionService: TransactionsService = new TransactionsService({
  transactions: loadTransactions()
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

