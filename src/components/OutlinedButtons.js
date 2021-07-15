import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  const [selectedBtn, setSelectedBtn] = React.useState(-1);

  function btnSelect() {
    if (selectedBtn == -1) {
      setSelectedBtn(1);
    } else {
      setSelectedBtn(-1);
    }
  }

  return (
    <div className={classes.root}>
      <Button variant={selectedBtn === 1 ? "contained" : "outlined"} color="primary" onClick={()=>btnSelect()}>
        Horror
      </Button>
      <Button variant="outlined" color="primary">
        Humour
      </Button>
      <Button variant="outlined" color="primary">
        Romance
      </Button>
      <Button variant="outlined" color="primary">
        Fantasy
      </Button>
      <Button variant="outlined" color="primary">
        Crime
      </Button>
      <Button variant="outlined" color="primary">
        Sci-fi
      </Button>
      <Button variant="outlined" color="primary">
        Thriller
      </Button>
      <Button variant="outlined" color="primary">
        Adventure
      </Button>
      <Button variant="outlined" color="primary">
        Action
      </Button>
      <Button variant="outlined" color="primary">
        YA fiction
      </Button>
    </div>
  );
}