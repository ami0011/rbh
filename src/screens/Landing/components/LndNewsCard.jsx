import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: 260,
  },
  img: {
    height: 150,
  },
  subject: {
    fontWeight: 'bold',
  },
  detail: {
    fontSize: '13px',
    marginTop: theme.spacing(1),
  },
}));

function LndNewsCard({ image, subject, detail }) {
  const classes = useStyles();
  return (
    <Card square className={classes.root} elevation={2}>
      {image && <CardMedia image={image} className={classes.img} />}
      <CardContent>
        <Typography color="textSecondary" variant="body1" className={classes.subject}>
          {subject}
        </Typography>
        <Typography color="textSecondary" variant="body2" className={classes.detail}>
          {detail}
        </Typography>
      </CardContent>
    </Card>
  );
}

LndNewsCard.propTypes = {
  image: PropTypes.string,
  subject: PropTypes.string.isRequired,
  detail: PropTypes.string,
};

LndNewsCard.defaultProps = {
  image: null,
  detail: null,
};

export default LndNewsCard;
