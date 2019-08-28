import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import img0 from '../assets/card-0.jpg';
import img1 from '../assets/card-1.jpg';
import img2 from '../assets/card-2.jpg';
import LndNewsCard from './LndNewsCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5),
    borderRadius: 8,
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(1),
    },
  },
}));

const prepData = [
  {
    id: 'free-bill-payment',
    image: img0,
    subject: 'Free Bill Payment',
    detail: 'From 17 Sep 2018 – 31 Dec 2019, There is no fee charge on SCB Bill Payment services',
  },
  {
    id: 'corporate-income-tax-payment',
    subject: 'Corporate Income Tax Payment ',
    detail:
      'After successfully applying for online tax payment with the Revenue Department, online tax payment is available via SCB Business Net or SCB Business Anywhere',
  },
  {
    id: 'sign-up-for-free',
    image: img1,
    subject: 'Sign Up for Free',
    detail: 'You can manage your SCB Business Net account and some services for free during the first year',
  },
  {
    id: 'how-to-find-the-missing-login-window',
    subject: 'How to find the missing login window',
    detail:
      "If you cannot locate the new login window on your screen, please slide the scrollbar to the far right of the screen, or increase your screen resolution. If that doesn't help, please contact GTS Client Services at 02-544-1212 to seek further advice.",
  },
  {
    id: 'beware-phishing-email',
    image: img2,
    subject: 'BEWARE! Phishing Email',
    detail: 'Find some useful tips and recommendations for verifying email messages',
  },
  {
    id: 'alert-theft-of-personal-or-financial-information',
    subject: 'Alert! Theft of personal or financial information on online systems.',
    detail:
      'Fraud websitees and e-mails that seek to steal personal information are spreading extensively on online systems.',
  },
];

function LndMasterNews() {
  const classes = useStyles();
  return (
    <Paper rounded="true" elevation={0} className={classes.root}>
      <Grid container spacing={3}>
        {prepData.map(news => (
          <Grid key={news.id} item xs={12} sm={6} md={4}>
            <LndNewsCard {...news} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default LndMasterNews;
