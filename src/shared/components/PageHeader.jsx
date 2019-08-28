import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0),
  },
}));

function PageHeader({ children }) {
  const classes = useStyles();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Typography variant="h2" className={classes.root}>
      {children}
    </Typography>
  );
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
