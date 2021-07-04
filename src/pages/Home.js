import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    oppositeContent: {
        // TODO: adjust this value accordingly
        flex: 0
    }
  }));

function Home() {
    const classes = useStyles();
    return (
        <Grid item container>
            <Grid item xs />
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Grid item sm={8} xs={12}>
                        <Box display="flex" justifyContent="center">
                            <Box>
                                <h1>Hello</h1>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box>
                                <body>
                                    Create, find and share bean-sized stories written by users like yourself! This is a fun application that encourages the writer in everybody and helps you get over your writers block, get in the groove and get your daily writing practice in.
                                </body>
                            </Box>
                        </Box>
                        <Grid container>
                            <Grid item md={6} xs={12}>
                                <Box justifyContent="flex-start">
                                    <Timeline align="left">
                                        <TimelineItem>
                                        <TimelineOppositeContent
                                            className={classes.oppositeContent}
                                        />
                                            <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h2>Test</h2>
                                                <body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </body>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                        <TimelineOppositeContent
                                            className={classes.oppositeContent}
                                        />
                                            <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h2>Test</h2>
                                                <body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </body>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                        <TimelineOppositeContent
                                            className={classes.oppositeContent}
                                        />
                                            <TimelineSeparator>
                                            <TimelineDot />
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <h2>Test</h2>
                                                <body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </body>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <h2>image</h2>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="center" alignItems="center">
                    Test
                </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default Home;