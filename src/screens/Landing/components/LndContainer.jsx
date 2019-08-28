import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

function LndContainer({ children, header, whiteBackground }) {
  return (
    <Box pt={6}>
      <Typography variant="h2">{header}</Typography>
      <Box pt={2} pb={6}>
        {children}
      </Box>
    </Box>
  );
}

LndContainer.defaultProps = {
  children: <div />,
  whiteBackground: false,
};

LndContainer.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node,
  whiteBackground: PropTypes.bool,
};

export default LndContainer;
