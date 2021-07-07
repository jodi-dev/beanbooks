import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react'
import OutlinedButtons from '../components/OutlinedButtons';
import RadioButtonsGroup from '../components/RadioGroup';
import LayoutTextFields from '../components/Inputs';
import WriteBlock from '../components/WriteBlock';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },
}));

function getSteps() {
    return ['What are your favourite genres?', 'Set a timer and word count goal', 'Keep private or go public'];
  }
  
function getStepContent(step) {
    switch (step) {
      case 0:
        return (
            <div>
                Select your preferred genres of story prompts. If none are chosen then all genres will be applied by default.
                <OutlinedButtons />
            </div>
            );
      case 1:
        return (
            <div>
                By default, a 1 hour and 30 minutes countdown and 750 word count goal will be applied. Relax! You may pause the timer, and there’s no penalty!
                <LayoutTextFields />
            </div>
        );
      case 2:
        return (
            <div>
                Set default stories to private or public mode. If set to public, your stories will be discoverable by other users. If skipped, your stories will be kept private by default.
                <RadioButtonsGroup />
            </div>
        );
      default:
        return 'None';
    }
}

function MainApp() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [state, setState] = useState('customize');
    
    return (
        <div className={classes.root}>
            <Grid item container>
                <Grid item xs />
                    <Grid item container direction="row" justify="center" alignItems="center">
                        <Grid item sm={8} xs={12}>
                            <h1>Customize</h1>
                            {state === 'customize' && (
                                <Stepper activeStep={activeStep} orientation="vertical">
                                    {steps.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                        <StepContent>
                                        <Typography>{getStepContent(index)}</Typography>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={activeStep === steps.length - 1 ?() => setState('prompt') : handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                            </div>
                                        </div>
                                        </StepContent>
                                    </Step>
                                    ))}
                                </Stepper>
                            )}
                            {state === 'prompt' &&
                                <WriteBlock />
                            }
                        </Grid>
                    </Grid>
                <Grid item xs />
            </Grid>
        </div>
    );
}

export default MainApp;