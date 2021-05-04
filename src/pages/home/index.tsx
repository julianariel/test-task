import React from 'react';
import { useHistory } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { ReactComponent as BlankLogo } from '../../content/blank-logo.svg';
import { ReactComponent as EthLogo } from '../../content/eth.svg';


import Constants from '../../utils/constants';
import { dateFormat, shortAddress } from '../../utils/helper';

import useTransactionService from '../../utils/useTransactionService';
import { Transaction } from '../../services/TransactionsService';

const useStyles = makeStyles({
    home: {
        flexGrow: 1,
        paddingTop: '15px',
        paddingLeft: '15px',
        paddingRight: '15px'
    },
    account: {
        cursor: 'pointer',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: '#f2f3f4'
        }
    },
    wallet: {
        backgroundColor: '#eaf3fd',
        borderRadius: '7px',
        minHeight: '200px',
        textAlign: 'center',
        marginLeft: '20px',
        marginRight: '20px'
    },
    boldText: {
        fontWeight: 600
    },
    send: {
        cursor: 'pointer'
    },
    sendBtn: {
        backgroundColor: '#167dff',
        color: 'white',
        '&:hover': {
            backgroundColor: '#5f6a77'
        }
    },
    ethAvatar: {
        backgroundColor: '#ffffff',
        border: '1px solid #f4f6f7',
        height: '50px',
        width: '50px'
    },
    ethLogo: {
        width: '25px'
    },
    transactions: {
        paddingTop: '15px'
    },
    transaction: {
        borderBottom: '1px solid #f4f6f7'
    }
});

function Balance() {
    const classes = useStyles();
    const history = useHistory();
    const { state } = useTransactionService();

    const handleSend = () => {
        history.push('/send');
    };
    return (
        <Grid item container xs={12} className={classes.wallet} direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h4" className={classes.boldText}>
                    {state.balance} ETH
            </Typography>
                <Typography variant="subtitle1" component="h3" color="textSecondary">
                    ${(state.balance * state.ethPrice).toFixed(2)} USD
            </Typography>
            </Grid>
            <Grid item xs={12} className={classes.send} onClick={handleSend}>
                <IconButton className={classes.sendBtn}>
                    <ArrowUpwardIcon />
                </IconButton>
                <Typography variant="subtitle1" component="h3" color="textPrimary">
                    Send
            </Typography>
            </Grid>
        </Grid>
    )
}

function Transactions() {
    const classes = useStyles();
    const { state } = useTransactionService();

    return (
        <Grid container direction="row" alignItems="center" justify="flex-start" spacing={4} className={classes.transactions}>

            {state.transactions.map((transaction: Transaction) => (
                <Grid item container key={transaction.id} xs={12} direction="row" justify="flex-start" alignItems="center" className={classes.transaction}>
                    <Grid item xs={2}>
                        <Avatar className={classes.ethAvatar}>
                            <EthLogo className={classes.ethLogo} />
                        </Avatar>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="body2" className={classes.boldText}>
                            Sent Ether
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {dateFormat(transaction.date)}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">
                        <Typography variant="body2" className={classes.boldText}>
                            -{transaction.value} ETH
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            -${transaction.value * state.ethPrice} USD
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default function Home() {

    const classes = useStyles();
    return (
        <div className={classes.home}>
            <Grid container direction="row" alignItems="center" justify="flex-start" spacing={4}>
                <Grid item xs={2}>
                    <BlankLogo />
                </Grid>
                <Grid item xs={7} className={classes.account}>
                    <Typography variant="h6" component="h2">
                        Account 1
                    </Typography>
                    <Typography variant="subtitle1" component="h3" color="textSecondary">
                        {shortAddress(Constants.publicAddress)}
                    </Typography>
                </Grid>

                <Balance />
            </Grid>

            <Transactions />

        </div>
    )
}
