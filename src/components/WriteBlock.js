import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

function WriteBlock() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Test</Paper>
                </Grid>
            </Grid>
            <Grid item container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Test</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default WriteBlock;