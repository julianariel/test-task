import React from 'react';
import { useHistory } from 'react-router-dom';

import { TextField, Grid, makeStyles, Typography, IconButton, InputAdornment, BottomNavigation, BottomNavigationAction, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useTransactionService from '../../utils/useTransactionService';

const useStyles = makeStyles({
    send: {
        flexGrow: 1,
        paddingTop: '15px',
        paddingLeft: '5px',
        paddingRight: '5px',
        minHeight: '550px',
        position: 'relative'
    },
    header: {
        minHeight: '100px',
        borderBottom: '1px solid #f4f6f7',
        paddingLeft: '15px',
        paddingRight: '15px'
    },
    form: {
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingTop: '20px'
    },
    headerText: {
        fontWeight: 600,
        paddingLeft: '10px'
    },
    closeBtn: {
        color: 'black'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        paddingRight: '15px',
        paddingLeft: '15px',
        paddingTop: '15px',
        borderTop: '1px solid #f4f6f7',

    },
    button: {
        height: '50px',
        textTransform: 'capitalize'
    }
});

export default function Send(this: any) {
    const classes = useStyles();
    const history = useHistory();
    const { sendTransaction, state } = useTransactionService();


    const transaction = {
        form: {

            publicAddress: '',
            amount: 0
        }
    }

    const handleClose = () => {
        history.push('/');
    };

    const handleSend = () => {
        const { form } = transaction;

        if (!form.publicAddress || !form.amount) { return; }
        const amount = Number(form.amount);
        if (amount > 0 && amount <= state.balance) {
            sendTransaction(form.publicAddress, amount);
            history.push('/done');
        }
    };


    const handleChange = (field: string, value: string) => {
        const fTransaction: any = { ...transaction };

        fTransaction.form[field] = value;
    }


    return (
        <div className={classes.send}>
            <Grid container direction="row" alignItems="center" justify="space-between" spacing={4} className={classes.header}>
                <Grid item xs={10}>
                    <Typography variant="h6" component="h2" className={classes.headerText}>
                        Send Ether
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton onClick={handleClose} className={classes.closeBtn}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>

            <form autoComplete="off">
                <Grid container direction="row" alignItems="center" justify="space-between" spacing={4} className={classes.form}>
                    <Grid item xs={12}>
                        <TextField fullWidth id="publicAddress" label="Add Recipient"
                            placeholder="Enter Public Address" autoComplete="off"
                            onChange={(event) => handleChange('publicAddress', event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="amount" type="number" label="Amount to transfer"
                            placeholder="Enter ether amount" autoComplete="off"
                            onChange={(event) => handleChange('amount', event.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">ETH</InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>
            </form>

            <Grid container direction="row" alignItems="flex-end" justify="space-evenly" spacing={4} className={classes.bottom}>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" className={classes.button} onClick={handleClose}>
                        Back
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" color="primary" disableElevation className={classes.button} onClick={handleSend}>
                        Next
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}