import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  container: {
    paddingBottom: spacing(4),
  },
  question: {
    borderBottom: `1px solid ${palette.divider}`,
  },
  questionText: {
    padding: '5px 0',
  },
}));

function LndFaqSection({ header, questions }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h3">{header}</Typography>
      <Divider />
      {questions.map(question => (
        <Grid key={question} className={classes.question} container alignItems="center" wrap="nowrap">
          <Grid item xs>
            <Typography className={classes.questionText} color="primary" variant="h6">
              {question}
            </Typography>
          </Grid>

          <Grid item xs="auto">
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default LndFaqSection;

LndFaqSection.propTypes = {
  header: PropTypes.node.isRequired,
  questions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
