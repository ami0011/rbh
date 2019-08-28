import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import Popover from '@material-ui/core/Popover';
import makeStyles from '@material-ui/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import LockIcon from '../icons/LockIcon';
import UserIcon from '../icons/UserIcon';

const useStyles = makeStyles({
  root: {
    borderRadius: '0.1em',
    display: 'flex',
    flexDirection: 'column',
    padding: '2em 1.5em 1.5em 1.5em',
    marginTop: '0.5em',
    width: '20em',
  },
  formControl: {
    marginBottom: '1em',
  },
  label: {
    paddingTop: '0.5em',
  },
  link: {
    marginTop: '1em',
    textAlign: 'center',
  },
});

function LoginForm({ open, anchorEl, onForgotPassword, ...props }) {
  const classes = useStyles();
  const [corpId, setCorpId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoginEnabled = !!(corpId && username && password);

  const handleLogin = () => {
    props.onLogin(corpId, username, password);
  };

  const handleInput = event => {
    const { id, value } = event.target;

    if (id === 'corpId') {
      setCorpId(value);
    }

    if (id === 'userId') {
      setUsername(value);
    }

    if (id === 'password') {
      setPassword(value);
    }
  };

  const handleOnClose = () => {
    props.onClose();
  };

  const handleKeyPress = event => {
    if (event.which === 13 || event.key === 'Enter') {
      if (isLoginEnabled) {
        handleLogin();
      }
    }
  };

  return (
    <Popover
      onKeyPress={handleKeyPress}
      classes={{ paper: classes.root }}
      open={open}
      onClose={handleOnClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <TextField
        className={classes.formControl}
        id="corpId"
        label="Corporate ID"
        placeholder="Enter your corporate ID"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <UserIcon color="disabled" />
            </InputAdornment>
          ),
        }}
        onChange={handleInput}
      />
      <TextField
        className={classes.formControl}
        id="userId"
        label="User ID"
        placeholder="Enter your user ID"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <UserIcon color="disabled" />
            </InputAdornment>
          ),
        }}
        onChange={handleInput}
      />
      <TextField
        className={classes.formControl}
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon color="disabled" />
            </InputAdornment>
          ),
        }}
        onChange={handleInput}
      />
      <Button disabled={!isLoginEnabled} variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Link className={classes.link} onClick={onForgotPassword}>
        Forgot my password
      </Link>
    </Popover>
  );
}

LoginForm.propTypes = {
  anchorEl: PropTypes.instanceOf(HTMLElement),
  open: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  anchorEl: null,
  onForgotPassword: () => { },
  loading: false,
  children: null,
};

export default LoginForm;
