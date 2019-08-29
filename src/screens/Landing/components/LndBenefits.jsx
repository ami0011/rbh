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
      title: '195 Great Eastern Highway, Belmont 6104',
      description:
        'Outstanding Architectural Office Suite with High Profile. 500m2 Office, Premium Fit Out, Reception Area, Concrete Basement Ground Floor with 18 Carparks, Bike Racks, and End of Trip Facilities',
      media: <Benefits fontSize="large" color="primary" />,
    },
    {
      id: 2,
      title: '10 Cunningham Drive, West Kalgoorlie 6430',
      description:
        'The huge 4,300m2 approx lot is in close proximity to Great Eastern Highway, boasting a 52 metre frontage with fantastic parking and room for signage. The property incorporates a high bay clear span steel shed with lighting, quality washroom, commercial grade vinyl floor, and ducted air conditioning. Quality development that would suit a corporate owner.',
      media: <Onboarding fontSize="large" color="primary" />,
    },
    {
      id: 3,
      title: '264 Port Drive, Minyirr',
      description:
        'Quality Development and Infrastructure. Situated close to the Port, this 6081m2 industrial property has approx 1361m2 of large offices and warehouse, and includes a three bedroom residence at the rear of the lot.The building is a multi storied concrete  tilt panel design, and has duel front access to both sides of it and to the rear of the property.This is a well developed freehold property with quality infrastructure in place, and is superbly positioned only 500 metres from the coast.',
      media: <Manage fontSize="large" color="primary" />,
    },
    {
      id: 4,
      title: '138B Kurnall Road Welshpool 6106',
      description:
        'This 9117m2 approx site location benefits from being on a heavy vehicle road route in the heart of Welshpool regarded as one of Perth’s prime destination for freight and truck movements. Other benefits include being within close proximity to main arterial road network with Roe and Tonkin Highways close by, easy access to Inter modal rail facility, Kewdale Freight Terminal and Perth Airport.',
      media: <ManageMultiple fontSize="large" color="primary" />,
    },
    {
      id: 5,
      title: '56 Great Eastern Highway, West Kalgoorlie 6430',
      description:
        'The Best in the West! Outstanding Profile, this approx. 7050m2 property has many features including; Approx 420 m2 of  Office, and 950 m2 of Work- shop / Warehouse. Large hardstand and carpark, 1  with building approx 1370m2 under roof.Superbly positioned on the Great Eastern Highway, this exclusive development is a one of kind.',
      media: <Generate fontSize="large" color="primary" />,
    },
    {
      id: 6,
      title: 'Sign Up for free',
      description:
        'All there services and more are free. Just register with us and we will take care of all your requirnments',
      media: <SignUp fontSize="large" color="primary" />,
    },
  ];
  return (
    <LndContainer header="For Sale">
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
