import Fab from '@material-ui/core/Fab';
import makeStyles from '@material-ui/styles/makeStyles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

const SCROLL_OFFSET = 90;

const useStyles = makeStyles(theme => ({
  fab: {
    zIndex: 3,
    bottom: theme.spacing(7),
    position: 'fixed',
    right: theme.spacing(7),
    transition: theme.transitions.create('opacity', { duration: theme.transitions.duration.short }),
  },
  hidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
}));

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function ScrollUpButton() {
  const classes = useStyles();
  const [hidden, setHidden] = useState(true);

  const scrollListener = () => {
    const shouldHide = window.scrollY < SCROLL_OFFSET;
    if (hidden !== shouldHide) {
      setHidden(shouldHide);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  });

  return (
    <Fab aria-label="Scroll Up" className={classNames(classes.fab, { [classes.hidden]: hidden })} onClick={scrollToTop}>
      <ExpandLess />
    </Fab>
  );
}

export default ScrollUpButton;
