import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <div>
            <TextField
            label="Timer"
            id="outlined-margin-normal"
            defaultValue="01:30"
            className={classes.textField}
            helperText="hh:mm"
            margin="normal"
            variant="outlined"
            />
            <TextField
            label="Word count goal"
            id="outlined-margin-normal"
            defaultValue="750"
            className={classes.textField}
            helperText="Enter any number between 0-750"
            margin="normal"
            variant="outlined"
            />
        </div>
        </div>
    );
}