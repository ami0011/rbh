import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  cardInnerContent: {
    [theme.breakpoints.up('md')]: {
      minHeight: ({ cardMinHeight }) => cardMinHeight,
    },
    padding: theme.spacing(1),
    width: '100%',
  },
  card: {
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  heading: {
    fontWeight: 700,
    paddingTop: 10,
    textTransform: 'uppercase',
  },
}));

function ScbIconCard({ media, heading, description, cardMinHeight, path }) {
  const component = path ? Link : 'div';
  const baseProps = {};
  if (path) {
    baseProps.to = path;
  } else {
    baseProps.disabled = true;
  }
  const classes = useStyles({ cardMinHeight });
  return (
    <Card className={classes.card}>
      <ButtonBase className={classes.cardInnerContent} component={component} {...baseProps}>
        <CardContent>
          {media}
          <Typography color="primary" gutterBottom variant="h5" className={classes.heading}>
            {heading}
          </Typography>
          {description && (
            <Typography variant="body1" color="textSecondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </ButtonBase>
    </Card>
  );
}

ScbIconCard.propTypes = {
  media: PropTypes.node.isRequired,
  heading: PropTypes.node.isRequired,
  description: PropTypes.node,
  path: PropTypes.string,
  cardMinHeight: PropTypes.number,
};

ScbIconCard.defaultProps = {
  description: undefined,
  cardMinHeight: 200,
  path: undefined,
};

export default ScbIconCard;
