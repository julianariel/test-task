import React from "react";
import { Button, Grid, IconButton, Link, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { ReactComponent as Success } from '../../content/success.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles({
    done: {
        flexGrow: 1,
        paddingTop: '15px',
        paddingLeft: '5px',
        paddingRight: '5px',
        minHeight: '550px',
        position: 'relative'
    },
    success: {
        minHeight: '500px',
        textAlign: 'center',
        '& h4, a': {
            fontWeight: 600
        }

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
    },
    etherscan: {
        textTransform: 'none'
    }

});


export default function Done() {
    const classes = useStyles();
    const history = useHistory();

    const handleClose = () => {
        history.push('/');
    };

    return (
        <div className={classes.done}>
            <Grid container direction="column" alignItems="center" justify="center" spacing={4} className={classes.success}>
                <Grid item xs={12}>
                    <Success />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4"  >
                        Success.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1" color="textSecondary">
                        You've successfully sent your funds.
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Button href="#" disableElevation color="primary" endIcon={<ArrowForwardIcon />} className={classes.etherscan}>
                        View on Etherscan
                    </Button>
                </Grid>
            </Grid>


            <Grid container direction="row" alignItems="flex-end" justify="space-evenly" spacing={4} className={classes.bottom}>
                <Grid item xs={12}>
                    <Button fullWidth variant="outlined" className={classes.button} onClick={handleClose}>
                        Done
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
