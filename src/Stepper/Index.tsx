import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonalInfo from '../FormComponents/PersonalInfo';
import AccountInfo from '../FormComponents/AccountInfo';
import Review from '../FormComponents/Review';
import {Container} from "@material-ui/core";




function getSteps() {
  return ['PersonalInfo', 'Account Info', 'Review'];
}

function getStepContent(stepIndex: number , setStepIndex:React.Dispatch<React.SetStateAction<number>> , formValues:{} , setFormValues:React.Dispatch<React.SetStateAction<{}>>)  {
  switch (stepIndex) {
    case 0:
      return <PersonalInfo preValue = {formValues} submit = {setStepIndex}  setFormValues = {setFormValues} />;
    case 1:
      return <AccountInfo  preValue = {formValues}  submit = {setStepIndex}  setFormValues = {setFormValues} />;
    case 2:
      return <Review submit = {setStepIndex}  />;
    default:
      return 'Unknown stepIndex';
  }
}



export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [values , setValues] = React.useState({})
  const steps = getSteps();
  

  return (
    <Container maxWidth = "lg" >
    <div >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
            {
                getStepContent(activeStep , setActiveStep , values , setValues )
            }
    </div>
    </Container>
  );
}
