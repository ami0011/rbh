import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import ExpandMore from '@material-ui/icons/ExpandMore';

function getLineHeight(baseSize, lineSize) {
  let pxBase = baseSize;
  let computedLineSize = lineSize;
  if (typeof pxBase === 'string') {
    pxBase = Math.round(parseFloat(pxBase) * 16);
  }
  if (!computedLineSize || typeof computedLineSize !== 'number') {
    computedLineSize = Math.round(pxBase * 1.57);
  }
  return computedLineSize / pxBase;
}

const sukhumvittadmaiBold = {
  fontFamily: 'Sukhumvittadmai',
  fontWeight: 700,
  src: 'url(/fonts/sukhumvittadmai_bol-webfont.woff)',
};

const sukhumvittadmaiMed = {
  fontFamily: 'Sukhumvittadmai',
  fontWeight: 500,
  src: 'url(/fonts/sukhumvittadmai_med-webfont.woff)',
};

const sukhumvittadmai = {
  fontFamily: 'Sukhumvittadmai',
  fontWeight: 400,
  src: 'url(/fonts/sukhumvittadmai_regular-webfont.woff)',
};

const action = {
  active: '#736e78',
  hover: '#eff0fa',
  selected: '#f9f9fa',
};

const breakpointsInput = {};
const breakpoints = createBreakpoints(breakpointsInput);

const divider = '#d8d8d8';

const primary = {
  dark: '#462279',
  light: '#906be0',
  main: '#7a58bf',
};

const shadows = [
  'none',
  '0 2px 4px 0 rgba(0,0,0,0.5)',
  '0 2px 5px 0 rgba(0,0,0,0.08)',
  '0 2px 6px 0 rgba(0,0,0,0.07)',
  '0 8px 10px 0 rgba(0,0,0,0.08)',
];

// Material UI expects shadows to have 25 levels
const prevShadowLen = shadows.length;
shadows.length = 25;
shadows.fill(shadows[prevShadowLen - 1], prevShadowLen);

const text = {
  disabled: '#929292',
  primary: '#444444',
  secondary: '#767676',
};

const typography = {
  fontFamily: 'Sukhumvittadmai,sans-serif',

  h1: { fontSize: '3.125rem', /* 50px */ fontWeight: 700, lineHeight: getLineHeight(50, 50) },
  h2: {
    fontSize: '2.25rem', // 36px
    fontWeight: 700,
    lineHeight: getLineHeight(36, 46),
  },
  h3: {
    fontSize: '1.625rem', // 26px
    fontWeight: 700,
    lineHeight: getLineHeight(26, 40),
  },
  h4: {
    fontSize: '1.0625rem', // 17px
    fontWeight: 700,
    lineHeight: getLineHeight(17, 27),
  },
  h5: { fontSize: '1.25rem', /* 20px */ fontWeight: 700, lineHeight: getLineHeight(20) },
  h6: { fontSize: '1.25rem', /* 20px */ fontWeight: 400, lineHeight: getLineHeight(20) },
  body1: { fontSize: '1.125rem', /* 18px */ fontWeight: 400, lineHeight: getLineHeight(18) },
  body2: { fontSize: '1rem', /* 16px */ fontWeight: 400, lineHeight: getLineHeight(16) },
  caption: { fontSize: '0.75rem', /* 12px */ fontWeight: 400, lineHeight: getLineHeight(12) },
  button: { fontSize: '1.125rem', /* 18px */ fontWeight: 400, lineHeight: getLineHeight(18), textTransform: null },
};

export default createMuiTheme({
  shadows,
  typography,
  breakpoints: breakpointsInput,
  palette: {
    action,
    divider,
    primary,
    text,
    background: {
      default: '#f9f9fa',
    },
    error: {
      main: '#e02020',
    },
    secondary: {
      main: '#f2b234',
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: shadows[0],
        '&$focusVisible': {
          boxShadow: null,
        },
        '&:active': {
          boxShadow: null,
        },
      },
      containedPrimary: {
        color: primary.dark,
        '&:hover': {
          backgroundColor: primary.light,
        },
        '&$disabled': {
          backgroundColor: '#cabde6',
        },
        '& $label': {
          color: '#fff',
          zIndex: 1,
        },
      },
      outlinedPrimary: {
        border: `1px solid ${primary.main}`,
        '&:hover': {
          backgroundColor: '#eae5f5',
        },
        '&$disabled': {
          borderColor: '#cabde6',
          color: '#cabde6',
        },
      },
    },
    MuiCircularProgress: {
      circle: {
        strokeLinecap: 'round',
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [sukhumvittadmaiBold, sukhumvittadmaiMed, sukhumvittadmai],
      },
    },
    MuiFab: {
      root: {
        boxShadow: shadows[1],

        '&:active': {
          boxShadow: null,
        },
      },
    },
    MuiLink: {
      root: {
        cursor: 'pointer',
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          color: '#8669b2',
        },
      },
    },
    MuiMenu: {
      list: {
        padding: 8,
      },
    },
    MuiPopover: {
      paper: {
        border: `1px solid ${divider}`,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${action.hover}`,
      },
      head: {
        fontSize: 15,
        backgroundColor: '#EFF0FA',
        borderBottomColor: '#E4E6F6',
        padding: '8px 8px',
      },
    },
    MuiTypography: {
      h1: {
        color: text.primary,
        fontSize: typography.h2.fontSize,
        lineHeight: getLineHeight(typography.h2.fontSize),
        [breakpoints.up('md')]: typography.h1,
      },
      h2: {
        color: text.primary,
        fontSize: typography.h3.fontSize,
        lineHeight: getLineHeight(typography.h3.fontSize),
        [breakpoints.up('md')]: typography.h2,
      },
      h3: {
        color: text.primary,
        fontSize: typography.h6.fontSize,
        lineHeight: getLineHeight(typography.h6.fontSize),
        [breakpoints.up('md')]: typography.h3,
      },
      h4: {
        color: text.primary,
        fontSize: typography.caption.fontSize,
        lineHeight: getLineHeight(typography.caption.fontSize),
        [breakpoints.up('md')]: typography.h4,
      },
      h5: {
        color: primary.main,
        fontSize: '0.8125rem', // 13px
        lineHeight: getLineHeight(13),
        [breakpoints.up('md')]: typography.h5,
      },
      h6: {
        color: text.secondary,
        fontSize: '0.8125rem', // 13px
        lineHeight: getLineHeight(13),
        [breakpoints.up('md')]: typography.h6,
      },
      body1: {
        color: text.primary,
        fontSize: '0.9375rem', // 15px
        lineHeight: getLineHeight(15),
        [breakpoints.up('md')]: typography.body1,
      },
      body2: {
        color: text.primary,
        fontSize: '0.9375rem', // 15px
        lineHeight: getLineHeight(15),
        [breakpoints.up('md')]: typography.body2,
      },
      caption: {
        color: text.primary,
        fontSize: '0.5625rem', // 9px
        lineHeight: getLineHeight(9),
        [breakpoints.up('md')]: typography.caption,
      },
      button: {
        fontSize: '0.9375rem', // 15px
        lineHeight: getLineHeight(15),
        [breakpoints.up('md')]: typography.button,
      },
    },
    MuiTableRow: {
      root: {
        '&$hover:hover': {
          backgroundColor: '#EFF0FA',
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: text.disabled,
        '&$checked': {
          '&$checked': {
            color: '#7A58BF',
          },
        },
      },
    },
  },
  props: {
    MuiButton: {
      color: 'primary',
    },
    MuiCard: {
      elevation: 2,
    },
    MuiCircularProgress: {
      thickness: 5,
    },
    MuiLink: {
      underline: 'none',
    },
    MuiPaper: {
      elevation: 2,
    },
    MuiSelect: {
      IconComponent: ExpandMore,
    },
  },
});
