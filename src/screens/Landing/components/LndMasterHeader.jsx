import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme => ({
  masterBox: {
    minHeight: 410,
    padding: theme.spacing(8, 10),
    [theme.breakpoints.only('md')]: {
      padding: theme.spacing(10, 6),
    },
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(12, 4),
    },
    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(5, 1),
    },
  },
  header: {
    borderBottom: '1px solid #7756ba',
    color: 'white',
  },
  title: {
    marginTop: theme.spacing(2),
    color: '#FFF',
    maxWidth: 800,
  },
  subTitle: {
    marginTop: theme.spacing(1),
    color: '#333',
    maxWidth: 520,
    background: "#FFF",
    padding: theme.spacing(1)
  },
  actionButton: {
    marginTop: theme.spacing(3),
  },
}));

function LndMasterHeader() {
  const classes = useStyles();
  return (
    <Box className={classes.masterBox}>
      <Typography variant="h4">
        {/* <span className={classes.header}>App now available</span> */}
      </Typography>
      <Typography className={classes.title} variant="h1">
        Your Real Estate Partner, RBH
      </Typography>
      <Typography className={classes.subTitle} variant="h6">
        RBH specialises in selling, leasing and managing industrial estates, mines, and real estate projects for investors. The company is founded on integrity, professionalism, hard work and trust; values that never waver. We proudly carry the RBH name, a symbol of quality business dealings. As the majority of our clients properties and business holdings are sold without publication or advertising, RBH takes great pride in saving our clients valuable time and money, while providing a high level of personalized service.
      </Typography>
    </Box>
  );
}

export default LndMasterHeader;
