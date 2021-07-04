import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';

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

function Home() {
    const classes = useStyles();
    return (
        <Grid item container>
            <Grid item xs />
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Grid item sm={8} xs={12}>
                        <h1>Hello</h1>
                        <body>Lorem ipsum</body>
                        <Grid container>
                            <Grid item md={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>Eat</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>Code</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>Sleep</TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </Paper>
                            </Grid>
                            <Grid item md={6} xs={12}>
                            <Paper className={classes.paper}>Image</Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default Home;