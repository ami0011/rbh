import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import howItWorks from '../assets/how-it-works.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${howItWorks})`,
    backgroundPositionX: 'calc(50vw - 900px)',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1049px 610px',
    minHeight: 710,
    padding: '100px 0',
  },
  stepper: {
    display: 'block',
    maxWidth: 400,
    marginLeft: 'auto',
  },
}));

const steps = [
  {
    id: 0,
    label: '1. Login',
    text: 'To see and manage your bank accounts',
  },
  {
    id: 1,
    label: '2. Operate',
    text: 'Make a request for transaction and send for approval',
  },
  {
    id: 2,
    label: '3. Authorize',
    text: 'Confirm all transactions with a single click',
  },
  {
    id: 3,
    label: '4. That easy',
    text: 'Get your confirmation from your desktop or phone',
  },
];

function LndHowItWorks() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>Stepper</Container>
    </div>
  );
}

export default LndHowItWorks;
