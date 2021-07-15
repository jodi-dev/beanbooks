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
import Button from '@material-ui/core/Button';
import art from '../beanbooks.png';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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
                                <h1>For the love of writing</h1>
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
                                                <h2>New story prompts everyday</h2>
                                                <body>
                                                Browse up to 4 select prompts for you based on your personal preferences.
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
                                                <h2>Ready, set, write!</h2>
                                                <body>
                                                    Optionally set a timer and word count, and write anything based on the prompt.
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
                                                <h2>Download or share your work</h2>
                                                <body>
                                                    Save your work as a draft, download it or share on our social. Mingle on the forum with others!
                                                </body>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <img className="art" src={art} alt="Art"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container direction="row" justify="center" alignItems="center">
                    <Button component={Link} to="/mainapp" variant="contained" color="primary">Get Started</Button>
                </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default Home;