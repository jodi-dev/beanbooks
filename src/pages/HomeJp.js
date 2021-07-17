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
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();
  return <h1>{t("For the love of writing")}</h1>
}

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
                                <h1>書くことを愛するために</h1>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box>
                                <body>
                                    あなたのようなユーザーが書いた豆サイズのストーリーを作成、検索、共有しましょう！これは、すべての人の作家を励まし、作家のブロックを乗り越え、溝に入り、毎日の執筆練習を始めるのに役立つ楽しいアプリケーションです。
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
                                                <h2>新しい物語は毎日促します</h2>
                                                <body>
                                                    個人的な好みに基づいて、最大4つの選択プロンプトを参照します。
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
                                                <h2>準備ができて、設定して、書いてください！</h2>
                                                <body>
                                                    必要に応じて、タイマーと単語数を設定し、プロンプトに基づいて何でも書き込みます。
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
                                                <h2>必要に応じて、タイマーと単語数を設定し、プロンプトに基づいて何でも書き込みます。</h2>
                                                <body>
                                                    作品を下書きとして保存するか、ダウンロードするか、ソーシャルで共有してください。他の人とフォーラムで交流しましょう！
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
                    <Button component={Link} to="/mainapp" variant="contained" color="primary">始めましょう</Button>
                </Grid>
            <Grid item xs />
        </Grid>
    );
}

export default Home;