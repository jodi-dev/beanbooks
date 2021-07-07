import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function PromptFab() {
    const classes = useStyles();
  
    return (
      <div>
        <div>
          <Fab size="small" aria-label="add" className={classes.margin}>
            <AddIcon/>
          </Fab>
        </div>
      </div>
    );
  }