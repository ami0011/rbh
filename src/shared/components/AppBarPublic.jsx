import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/styles/makeStyles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import AppBarTop from './AppBarTop';
import LoginForm from './LoginForm';

const useStyles = makeStyles({
  scbAppBarLinks: {
    padding: 20,
  },
  scbAppBarButtons: {
    margin: 10,
    width: 97,
  },
});

function AppBarPublic({ history }) {
  const classes = useStyles();
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const handleLogin = async () => {
    if (!currentUser) {
      await dispatch.currentUser.login();
    }
    history.push('/');
  };

  const toggleLoginForm = event => {
    if (loginFormOpen === false) {
      setAnchorEl(event.currentTarget);
    }

    setLoginFormOpen(!loginFormOpen);
  };

  return (
    <div>
      <AppBarTop
        menu={
          <Box className={classes.linkBoxes}>
            <Link
              className={classes.scbAppBarLinks}
              color="textPrimary"
              component="button"
              onClick={() => {}}
              variant="body1"
            >
              Home
            </Link>
            <Link
              className={classes.scbAppBarLinks}
              color="textPrimary"
              component="button"
              onClick={() => {}}
              variant="body1"
            >
              For Sale
            </Link>
            <Link
              className={classes.scbAppBarLinks}
              color="textPrimary"
              component="button"
              onClick={() => {}}
              variant="body1"
            >
              For Lease
            </Link>
            <Link
              className={classes.scbAppBarLinks}
              color="textPrimary"
              component="button"
              onClick={() => {}}
              variant="body1"
            >
              International
            </Link>
            <Link
              className={classes.scbAppBarLinks}
              color="textPrimary"
              component="button"
              onClick={() => {}}
              variant="body1"
            >
              Mines
            </Link>
            <Link
              className={classes.scbAppBarLinks}
              color="textPrimary"
              component="button"
              onClick={() => {}}
              variant="body1"
            >
              Investments
            </Link>
            <Link
              className={classes.scbAppBarLinks}
              color="textPrimary"
              component="button"
              onClick={() => {}}
              variant="body1"
            >
              Agents
            </Link>
          </Box>
        }
      >
        <Button className={classes.scbAppBarButtons} color="primary" variant="outlined" onClick={handleLogin}>
          Sign Up
        </Button>
        <Button className={classes.scbAppBarButtons} color="primary" variant="contained" onClick={toggleLoginForm}>
          Log In
        </Button>
      </AppBarTop>
      <LoginForm open={loginFormOpen} onLogin={handleLogin} anchorEl={anchorEl} onClose={toggleLoginForm} />
    </div>
  );
}

AppBarPublic.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(AppBarPublic);
