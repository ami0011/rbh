import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import ScbCard from '../../../shared/components/ScbIconCard';
import { ReactComponent as SignUp } from '../assets/benefits-free.svg';
import { ReactComponent as Benefits } from '../assets/benefits-integrated.svg';
import { ReactComponent as Manage } from '../assets/benefits-manage-accounts.svg';
import { ReactComponent as ManageMultiple } from '../assets/benefits-manage-companies.svg';
import { ReactComponent as Onboarding } from '../assets/benefits-onboarding.svg';
import { ReactComponent as Generate } from '../assets/benefits-reports.svg';
import LndContainer from './LndContainer';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

function LndBenefits() {
  const classes = useStyles();
  const cardData = [
    {
      id: 1,
      title: 'Fully Integrated with your easy app',
      description: 'All your transactions can be done from your computer or mobile app',
      media: <Benefits fontSize="large" color="primary" />,
    },
    {
      id: 2,
      title: 'Onboarding within your first visit',
      description: 'You can subscribe and finish your registration within just one visit',
      media: <Onboarding fontSize="large" color="primary" />,
    },
    {
      id: 3,
      title: 'Manage your own account',
      description: 'All your transactions can be done from your computer or mobile app',
      media: <Manage fontSize="large" color="primary" />,
    },
    {
      id: 4,
      title: 'Manage multiple companies at once',
      description: 'Switch easily profile within your different companies',
      media: <ManageMultiple fontSize="large" color="primary" />,
    },
    {
      id: 5,
      title: 'Generate Report',
      description: 'Export payment slips, bank statement and more, at your easy',
      media: <Generate fontSize="large" color="primary" />,
    },
    {
      id: 6,
      title: 'Sign Up for free',
      description: 'All there services and more are free during the first year',
      media: <SignUp fontSize="large" color="primary" />,
    },
  ];
  return (
    <LndContainer header="Benefits">
      <Grid container spacing={3}>
        {cardData.map(value => {
          return (
            <Grid item key={value.id} xs={12} md={4} className={classes.cardGrid}>
              <ScbCard heading={value.title} media={value.media} description={value.description} />
            </Grid>
          );
        })}
      </Grid>
    </LndContainer>
  );
}

export default LndBenefits;
