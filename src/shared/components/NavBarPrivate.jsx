import ButtonBase from '@material-ui/core/ButtonBase';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/styles/makeStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

const navs = [
  { path: '/', label: 'Dashboard', exact: true },
  { path: '/accounts', label: 'Account Summary' },
  { path: '/payments/new', label: 'Payments', dropDown: true },
  { path: '/recipients', label: 'Recipients' },
  { path: '/services', label: 'Services' },
];

const paymentNavs = [
  { path: '/payments/new', label: 'Domestic transfer' },
  { path: '', label: 'SMART' },
  { path: '', label: 'Bahtnet' },
  { path: '', label: 'Payroll' },
  { path: '', label: 'Bill payment' },
  { path: '', label: 'International transfer' },
];

const ARROW_SIZE = 15;
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#2D1B4E',
  },
  container: {
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
      flexDirection: 'column',
      padding: 0,
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    '@media print': {
      display: 'none',
    },
  },
  button: {
    display: 'none',
    height: 37,
    padding: `0 ${theme.spacing(1)}px`,
    justifyContent: 'left',

    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      height: 40,
      paddingLeft: '5px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      height: 54,
      justifyContent: 'center',
      padding: `0 ${theme.spacing(4)}px`,
    },
  },
  buttonActive: {
    display: 'flex',

    [theme.breakpoints.between('xs', 'sm')]: {
      paddingLeft: '5px',
    },
    [theme.breakpoints.up('md')]: {
      '& $buttonLabel': {
        fontWeight: 700,
      },
      '&::after': {
        border: `${ARROW_SIZE * 0.5}px solid transparent`,
        borderBottomColor: theme.palette.common.white,
        bottom: 0,
        content: '""',
        height: ARROW_SIZE * 0.5,
        position: 'absolute',
        width: ARROW_SIZE,
      },
    },
  },
  buttonLabel: {
    color: theme.palette.common.white,
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingTop: '10px',
      paddingBottom: '10px',
      marginLeft: '10px',
    },
  },
  dropdownLinkLabel: { fontWeight: 400 },
  popover: {
    marginTop: '3.7em',
    width: '12em',
  },
  menuItem: {
    display: 'flex',
  },
}));

function NavBarPrivate({ location, open, onMenuClose }) {
  const classes = useStyles();
  const nonMobileSizes = ['md', 'lg', 'xl'];
  const matches = useMediaQuery('(min-width:960px)');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);

  useEffect(() => {
    const selectedNav = navs.find(nav => nav.path === location.pathname);
    if (selectedNav) {
      setSelectedLabel(selectedNav.label);
    }
  }, [userMenuOpen, location]);

  const toggleUserMenu = event => {
    if (!userMenuOpen) {
      setUserMenuAnchor(event.currentTarget);
    }
    setUserMenuOpen(!userMenuOpen);
  };

  const closeNavMenu = event => {
    onMenuClose();
  };

  const handleMenuItemClick = event => {
    toggleUserMenu();
    closeNavMenu();
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {navs.map(({ exact, label, path, dropDown }) => (
          <Collapse in={open || matches} key={path} timeout="auto">
            <ButtonBase
              className={classNames(classes.button, {
                [classes.buttonActive]: exact
                  ? location.pathname === path
                  : location.pathname.slice(0, path.length) === path,
              })}
              component={dropDown ? undefined : Link}
              key={path}
              onClick={dropDown ? toggleUserMenu : closeNavMenu}
              to={dropDown ? undefined : path}
            >
              <Typography className={classes.buttonLabel} component="span" variant="body1">
                {label}
              </Typography>
            </ButtonBase>
          </Collapse>
        ))}
        <Menu
          anchorEl={userMenuAnchor}
          keepMounted
          open={userMenuOpen}
          onClose={toggleUserMenu}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          PopoverClasses={{ paper: classes.popover }}
        >
          {paymentNavs.map(({ label, path }) => (
            <MenuItem
              className={classNames(classes.menuItem, classes.dropdownLinkLabel)}
              component={path === '' ? undefined : Link}
              key={label}
              onClick={() => handleMenuItemClick(label)}
              to={path === '' ? undefined : path}
              variant="h4"
            >
              {label}
            </MenuItem>
          ))}
        </Menu>

        {!open && (
          <Hidden only={nonMobileSizes}>
            <Typography
              className={classNames(classes.buttonActive, classes.buttonLabel)}
              component="span"
              variant="body1"
            >
              {selectedLabel}
            </Typography>
          </Hidden>
        )}
      </Container>
    </div>
  );
}

NavBarPrivate.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  open: PropTypes.bool,
  onMenuClose: PropTypes.func.isRequired,
};

NavBarPrivate.defaultProps = {
  open: true,
};

export default NavBarPrivate;
