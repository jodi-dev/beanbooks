import { Grid } from '@material-ui/core';

function Social() {
    return (
        <Grid item container>
            <Grid item xs />
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Grid item sm={8} xs={12}>
                        <Grid container>
                            <Grid item md={8} xs={12}>
                                <h2>New Stories</h2>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <h2>Forum Activity</h2>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default Social;