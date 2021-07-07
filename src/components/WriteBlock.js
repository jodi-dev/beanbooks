import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import PromptFab from './PromptFab';
import Box from '@material-ui/core/Box';
import TextFab from './TextFab';

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
                    <Paper className={classes.paper}>
                        <Grid item container>
                            <Grid item xs={10}>
                            </Grid>
                            <Grid item xs={2}>
                                <Box justifyContent="flex-end">
                                    <Box>
                                        <PromptFab />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Grid item container>
                            <Grid item xs={10}>
                            </Grid>
                            <Grid item xs={2}>
                                <Box justifyContent="flex-end">
                                    <Box>
                                        <TextFab />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default WriteBlock;