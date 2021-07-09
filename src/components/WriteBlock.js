import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Grid, TextField, Button, Switch } from '@material-ui/core';
import PromptFab from './PromptFab';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    promptPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: '#000000',
    },
    textPaper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#FFFFFF'
    },
    textArea: {
        minHeight: 200,
        minWidth: '100%',
    }
}));

function WriteBlock() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedB: true,
    });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className={classes.root}>
            <Grid item container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.promptPaper}>
                        <Grid item container>
                            <Grid item xs={10}>
                                <Box item>
                                    <body>
                                        Whenever you speak, people hear you speaking in their native language. Most people are surprised and delighted. The cashier at McDonalds you’ve just talked to is horrified. “Nobody’s spoken that language in thousands of years.”
                                    </body>
                                </Box>
                            </Grid>
                            <Grid xs={2}>
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
                    <Paper className={classes.textPaper}>
                    <Grid item container>
                        <Box p={2}>
                            <TextField />
                        </Box>
                        <Box p={2}>
                            <TextField />
                        </Box>
                        <TextareaAutosize
                            maxRows={10}
                            aria-label="maximum height"
                            defaultValue="Write here!"
                            className={classes.textArea}
                        /> 
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                <Switch
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="Private"
                            />
                        </FormGroup>
                        <Button variant="contained" color="primary">Finish</Button>
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default WriteBlock;