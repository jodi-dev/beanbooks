import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';

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

function Social() {
    const classes = useStyles();
    return (
        <Grid item container>
            <Grid item xs />
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Grid item sm={8} xs={12}>
                        <Grid container>
                            <Grid item md={8} xs={12}>
                                <h2>New Stories</h2>
                                <Box m={2}>
                                    <Paper className={classes.paper}>
                                    <Grid item container direction="row">
                                        <Grid item md={10}>
                                            <h3>Title</h3>
                                            <body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis enim, pellentesque a mauris quis, imperdiet congue dui. In ut rhoncus odio. Vivamus justo est, posuere sit amet orci non, vulputate auctor lacus. Duis id purus lacus. Pellentesque dapibus sapien ac quam congue, eu tempus ante dignissim.
                                            </body>
                                        </Grid>
                                        <Grid item md={2}>
                                            <Box p={5}>
                                                <IconButton
                                                    color="secondary"
                                                    size="small"
                                                >
                                                    <PersonIcon />
                                                </IconButton>
                                            </Box>
                                            <Box>
                                                <ForumIcon />
                                                <FavoriteIcon />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    </Paper>
                                </Box>
                                <Box m={2}>
                                    <Paper className={classes.paper}>
                                    <Grid item container direction="row">
                                        <Grid item md={10}>
                                            <h3>Title</h3>
                                            <body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis enim, pellentesque a mauris quis, imperdiet congue dui. In ut rhoncus odio. Vivamus justo est, posuere sit amet orci non, vulputate auctor lacus. Duis id purus lacus. Pellentesque dapibus sapien ac quam congue, eu tempus ante dignissim.
                                            </body>
                                        </Grid>
                                        <Grid item md={2}>
                                            <Box p={5}>
                                                <IconButton
                                                    color="secondary"
                                                    size="small"
                                                >
                                                    <PersonIcon />
                                                </IconButton>
                                            </Box>
                                            <Box>
                                                <ForumIcon />
                                                <FavoriteIcon />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    </Paper>
                                </Box>
                                <Box m={2}>
                                    <Paper className={classes.paper}>
                                    <Grid item container direction="row">
                                        <Grid item md={10}>
                                            <h3>Title</h3>
                                            <body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis enim, pellentesque a mauris quis, imperdiet congue dui. In ut rhoncus odio. Vivamus justo est, posuere sit amet orci non, vulputate auctor lacus. Duis id purus lacus. Pellentesque dapibus sapien ac quam congue, eu tempus ante dignissim.
                                            </body>
                                        </Grid>
                                        <Grid item md={2}>
                                            <Box p={5}>
                                                <IconButton
                                                    color="secondary"
                                                    size="small"
                                                >
                                                    <PersonIcon />
                                                </IconButton>
                                            </Box>
                                            <Box>
                                                <ForumIcon />
                                                <FavoriteIcon />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <h2>Forum Activity</h2>
                                <Box m={2}>
                                    <Paper className={classes.paper}>
                                        <h4>/Events</h4>
                                        <body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        </body>
                                        <Chip size="small" color="primary" label="Discussion"/>
                                    </Paper>
                                </Box>
                                <Box m={2}>
                                    <Paper className={classes.paper}>
                                        <h4>/Events</h4>
                                        <body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        </body>
                                        <Chip size="small" color="primary" label="Activity"/>
                                    </Paper>
                                </Box>
                                <Box m={2}>
                                    <Paper className={classes.paper}>
                                        <h4>/Events</h4>
                                        <body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        </body>
                                        <Chip size="small" color="primary" label="Event"/>
                                    </Paper>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default Social;