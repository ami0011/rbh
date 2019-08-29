import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles(theme => ({
  box: {
    backgroundColor: '#2d1b4e',
    minHeight: 393,
    padding: '2rem 0',
    [theme.breakpoints.up('md')]: {
      padding: '5rem 0',
    },

    '@media print': {
      display: 'none',
    },
  },
  businessNet: { color: theme.palette.secondary.main },
  links: { color: '#d8d8d8', fontWeight: 'normal', lineHeight: 2 },
  listTitles: { color: 'rgba(216, 216, 216, 0.5)' },
  bold: { fontWeight: 700 },
  whiteFont: { color: '#fff' },
}));

const corporateSite = [
  {
    linkUrl: '',
    linkDesc: 'For Sales',
  },
  {
    linkUrl: '',
    linkDesc: 'For Lease',
  },
  {
    linkUrl: '',
    linkDesc: 'Internation',
  },
];

const onlineBankingSite = [
  {
    linkUrl: '',
    linkDesc: 'Mines',
  },
  {
    linkUrl: '',
    linkDesc: 'Investment',
  },
  {
    linkUrl: '',
    linkDesc: 'Agents',
  },
];

function AppFooter() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Container>
        <Grid container alignItems="baseline" spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography component="span" variant="h3" className={classNames(classes.whiteFont, classes.bold)}>
              RBH
            </Typography>{' '}
            <Typography component="span" variant="h3" className={classNames(classes.businessNet, classes.bold)}>
              Real Estate
            </Typography>
            <Typography variant="body1" className={classes.whiteFont}>
              Exchange Tower Level 17, 2 The Esplanade 6000 Perth WA
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classNames(classes.listTitles, classes.bold)} variant="h6">
              Sales
            </Typography>
            {corporateSite.map(links => (
              <Grid item key={links.linkDesc}>
                <Link component="button" className={classes.links} variant="body2" onClick={() => {}}>
                  {links.linkDesc}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography className={classNames(classes.listTitles, classes.bold)} variant="h6">
              Investments
            </Typography>
            {onlineBankingSite.map(links => (
              <Grid item key={links.linkDesc}>
                <Link component="button" className={classes.links} variant="body2" onClick={() => {}}>
                  {links.linkDesc}
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={3} display="block">
            <Typography className={classNames(classes.listTitles, classes.bold)} variant="h6">
              Contact Us
            </Typography>
            <Typography variant="h3" className={classes.links}>
              Call 08 6146 1322
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AppFooter;
