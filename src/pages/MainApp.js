import { Grid } from '@material-ui/core';

function MainApp() {
    return (
        <Grid item container>
            <Grid item xs />
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Grid item sm={8} xs={12}>
                        <h2>Main App</h2>
                    </Grid>
                </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default MainApp;