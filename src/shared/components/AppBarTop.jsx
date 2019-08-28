import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from '@material-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import ScbLogoDesktop from '../assets/RBH Logo_White on Black 1MB.webp';
import ScbLogoMobile from '../assets/RBH Logo_White on Black 1MB.webp';
import { getDefaultLanguage, languageOptions } from '../config/languages';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#ffffff',
    height: 90,

    '@media print': {
      display: 'none',
    },
  },
  languageContainer: {
    fontWeight: 700,
    padding: '0 25px',
  },
  languageItem: {
    fontWeight: 700,
    padding: theme.spacing(1),
  },
  link: {
    color: '#61dafb',
  },
  logo: {
    borderRight: '1px solid #979797',
    height: '48px',
    paddingRight: 20,
    pointerEvents: 'none',
  },
  logoContainer: {
    [theme.breakpoints.up('md')]: {
      flex: 1,
    },
  },
  logoName: {
    padding: '10px 16px',
    verticalAlign: 13,
  },
  toolbar: {
    margin: 'auto 0',
    paddingLeft: '0',

    [theme.breakpoints.up('md')]: {
      paddingLeft: '20px',
    },
  },
}));

function AppBarTop({ children, menu, onMenuClick }) {
  const classes = useStyles();
  const currentLanguage = getDefaultLanguage();
  const mobileSizes = ['xs', 'sm', 'md'];
  const nonMobileSizes = ['lg', 'xl'];

  return (
    <div className={classes.appBar}>
      <AppBar elevation={2} position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Hidden only={nonMobileSizes}>
            <IconButton color="primary" onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
            <div className={classes.logoContainer}>
              <img src={ScbLogoMobile} alt="SCB Logo" />
            </div>
          </Hidden>
          <Hidden only={mobileSizes}>
            <div className={classes.logoContainer}>
              <img src={ScbLogoDesktop} alt="SCBLogo" className={classes.logo} />
              <Typography variant="h3" component="span" className={classes.logoName}>
                R B H Real Estate
              </Typography>
            </div>
          </Hidden>
          <Hidden only={['xs', 'sm']}>
            {menu}
            {/* <Typography variant="body2" className={classes.languageContainer}>
              {languageOptions.map((language, index) => (
                <React.Fragment key={language.id}>
                  {index > 0 ? '|' : ''}
                  <Link
                    color={language.id === currentLanguage.id ? 'primary' : 'textPrimary'}
                    component="button"
                    className={classes.languageItem}
                    onClick={() => { }}
                    variant="body2"
                  >
                    {language.label}
                  </Link>
                </React.Fragment>
              ))}
            </Typography> */}
          </Hidden>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppBarTop.propTypes = {
  children: PropTypes.node,
  menu: PropTypes.node,
  onMenuClick: PropTypes.func,
};

AppBarTop.defaultProps = {
  children: null,
  menu: null,
  onMenuClick: undefined,
};

export default AppBarTop;
