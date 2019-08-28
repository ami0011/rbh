import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  doneIcon: {
    color: '#68E370',
    fontSize: '1.1em',
    verticalAlign: '-0.2em',
  },
}));

function LndServiceInfoFeature({ children, header }) {
  const styles = useStyles();

  return (
    <Typography variant="h6">
      <Box display="flex" flexDirection="row" pt="1.6em" alignItems="flex-start">
        <Box pt={0.5} width="2.8em">
          <DoneIcon className={styles.doneIcon} />
        </Box>
        <Box flex={1}>
          <Typography variant="h3">{header}</Typography>
        </Box>
      </Box>
      <Box display="block" ml="2.8em">
        {children}
      </Box>
    </Typography>
  );
}

LndServiceInfoFeature.defaultProps = {
  header: '',
  children: '',
};

LndServiceInfoFeature.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
};

export default LndServiceInfoFeature;
