import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMore from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/styles/makeStyles';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import AppAvatar from '../assets/avatar-girl.png';
import NotificationIcon from '../icons/NotificationIcon';
import SearchIcon from '../icons/SearchIcon';
import AppBarTop from './AppBarTop';
import NavBarPrivate from './NavBarPrivate';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
  },
  flex: {
    display: 'flex',
  },
  iconButton: {
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: '5px',
    },
  },
  linkBoxes: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  notificationDot: {
    border: `2px solid ${theme.palette.background.paper}`,
    height: 10,
    minWidth: 10,
    right: 6,
    top: 7,
  },
  notificationIcons: {
    alignItems: 'baseline',
    display: 'contents',
  },
  paddingLeft: {
    paddingLeft: '2rem',
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingLeft: '1rem',
    },
  },
  popover: {
    marginTop: '4.5em',
    width: '12em',
  },
  scbAppBarButtons: {
    margin: 20,
  },
  scbAppBarLinks: {
    padding: 20,
  },
  userButton: {
    height: 90,
    textAlign: 'left',
  },
  userName: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  userInfo: {
    [theme.breakpoints.between('xs', 'sm')]: {
      lineHeight: '1.2em',
    },
  },
}));

function AppBarPrivate({ history, location }) {
  const dispatch = useDispatch();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [navBarOpen, setNavBarOpen] = useState(false);

  const currentUser = useSelector(state => state.currentUser);
  const classes = useStyles();
  const mobileSizes = ['xs', 'sm'];
  const nonMobileSizes = ['md', 'lg', 'xl'];
  const matches = useMediaQuery('(min-width:960px)');

  const handleLogout = async () => {
    await dispatch.currentUser.logout();
    history.push('/');
  };

  const toggleUserMenu = event => {
    if (!userMenuOpen) {
      setUserMenuAnchor(event.currentTarget);
    }
    setUserMenuOpen(!userMenuOpen);
  };

  const renderIcons = () => {
    return (
      <Grid container spacing={matches ? 2 : 0} className={classes.notificationIcons}>
        <Grid item className={classes.flex}>
          <IconButton className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.flex}>
          <IconButton className={classes.iconButton}>
            <Badge classes={{ dot: classes.notificationDot }} color="error" variant="dot">
              <NotificationIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  const toggleNavBar = event => {
    setNavBarOpen(!navBarOpen);
  };

  const closeNavBar = event => {
    setNavBarOpen(false);
  };

  return (
    <React.Fragment>
      <AppBarTop menu={renderIcons()} onMenuClick={toggleNavBar}>
        <Hidden only={mobileSizes}>
          <ButtonBase className={classes.userButton} onClick={toggleUserMenu}>
            <Avatar alt="Remy Sharp" src={AppAvatar} className={classes.avatar} />
            <Box>
              <Typography variant="body2" className={classes.userName}>
                {currentUser.name}
              </Typography>
              <Typography variant="caption">{currentUser.company}</Typography>
            </Box>
            <Box pl={1} pr={1}>
              <ExpandMore color="action" />
            </Box>
          </ButtonBase>
          <Menu
            id="simple-menu"
            anchorEl={userMenuAnchor}
            keepMounted
            open={userMenuOpen}
            onClose={toggleUserMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PopoverClasses={{ paper: classes.popover }}
          >
            <MenuItem>My Account</MenuItem>
            <MenuItem>Change Password</MenuItem>
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </Menu>
          <Box pl={2}>
            <Typography component="div" variant="caption">
              Last Log in:
            </Typography>
            <Typography component="div" variant="caption">
              {currentUser.lastLogInDate}
            </Typography>
          </Box>
        </Hidden>
        <Hidden only={nonMobileSizes}>
          <Grid container alignItems="baseline" spacing={4} wrap="nowrap" className={classes.paddingLeft}>
            <Grid item>
              <Typography variant="body2" className={classNames(classes.userName, classes.userInfo)}>
                {currentUser.name}
              </Typography>
              <Typography variant="caption" className={classes.userInfo}>
                {currentUser.company}
              </Typography>
              <Typography component="div" variant="caption" className={classes.userInfo}>
                Last Log in: {currentUser.lastLogInDate}
              </Typography>
            </Grid>
          </Grid>
          {renderIcons()}
        </Hidden>
      </AppBarTop>
      <NavBarPrivate location={location} open={navBarOpen} onMenuClose={closeNavBar} />
    </React.Fragment>
  );
}

AppBarPrivate.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(AppBarPrivate);
