import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';
import cover from '../assets/home.webp';
import LndMasterHeader from './LndMasterHeader';
import LndMasterNews from './LndMasterNews';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    paddingBottom: 50,
  },
  main: {
    zIndex: 0,
  },
  img: {
    position: 'absolute',
    width: '100vw',
    height: '500px',
    zIndex: -1,
    backgroundImage: `url("${cover}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: 'cover',
  },
});

function LndMasterContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.img} />
      <Container className={classes.main}>
        <LndMasterHeader />
        {/* <LndMasterNews /> */}
      </Container>
    </div>
  );
}

export default LndMasterContainer;
