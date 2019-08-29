import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(({ palette }) => ({
  stickyPaper: {
    position: 'sticky',
    top: 90,
    zIndex: 2,
  },
  panelSection: {
    paddingBottom: '5px',
    paddingTop: '5px',
  },
  whiteBackground: {
    backgroundColor: palette.common.white,
  },
}));

function LndContentSection({ sections }) {
  const classes = useStyles();

  const renderSections = () => {
    return sections.map((section, index) => (
      <div
        id={section.id}
        key={section.id}
        className={classNames(classes.panelSection, { [classes.whiteBackground]: index % 2 === 1 })}
      >
        {section.noContainer ? section.component : <Container>{section.component}</Container>}
      </div>
    ));
  };

  return (
    <div>
      {/* <Paper square elevation={0} className={classes.stickyPaper}>
        <Container>

        </Container>
      </Paper> */}
      {renderSections()}
    </div>
  );
}

LndContentSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      component: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default LndContentSection;
