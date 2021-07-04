import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

function MainApp() {
    const classes = useStyles();
    return (
        <Grid item container>
            <Grid item xs />
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Grid item sm={8} xs={12}>
                        <h1>Main App</h1>
                        <Grid>
                            <Paper className={classes.paper}>Card 1</Paper>
                        </Grid>
                        <Grid>
                            <Paper className={classes.paper}>Card 2</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default MainApp;