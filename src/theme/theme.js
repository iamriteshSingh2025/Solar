import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0A1628',       // Deep Navy
      light: '#1A2E4A',
      dark: '#050D1A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#F5A623',       // Solar Gold
      light: '#F7B84E',
      dark: '#D4891A',
      contrastText: '#0A1628',
    },
    accent: {
      navy: '#0A1628',
      gold: '#F5A623',
      charcoal: '#1E2535',
      steel: '#2D3A4F',
      lightGrey: '#F4F6F9',
      midGrey: '#8A96A8',
      white: '#FFFFFF',
    },
    background: {
      default: '#F4F6F9',
      paper: '#FFFFFF',
      dark: '#0A1628',
      darkSecondary: '#1A2E4A',
    },
    text: {
      primary: '#0A1628',
      secondary: '#4A5568',
      light: '#8A96A8',
      onDark: '#FFFFFF',
    },
    divider: '#E2E8F0',
    success: { main: '#2E7D32' },
    error: { main: '#C62828' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
    body1: {
      lineHeight: 1.75,
      fontWeight: 400,
    },
    body2: {
      lineHeight: 1.65,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.04em',
    },
    caption: {
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(10,22,40,0.06), 0 1px 2px rgba(10,22,40,0.04)',
    '0 4px 6px rgba(10,22,40,0.07), 0 2px 4px rgba(10,22,40,0.05)',
    '0 10px 15px rgba(10,22,40,0.08), 0 4px 6px rgba(10,22,40,0.05)',
    '0 20px 25px rgba(10,22,40,0.09), 0 10px 10px rgba(10,22,40,0.04)',
    '0 25px 50px rgba(10,22,40,0.15)',
    ...Array(19).fill('none'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.25s ease',
        },
        containedPrimary: {
          background: '#0A1628',
          '&:hover': {
            background: '#1A2E4A',
            boxShadow: '0 8px 25px rgba(10,22,40,0.3)',
            transform: 'translateY(-1px)',
          },
        },
        containedSecondary: {
          background: '#F5A623',
          color: '#0A1628',
          '&:hover': {
            background: '#D4891A',
            boxShadow: '0 8px 25px rgba(245,166,35,0.4)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: '#0A1628',
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            background: 'rgba(10,22,40,0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 4px 20px rgba(10,22,40,0.07)',
          border: '1px solid rgba(226,232,240,0.8)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(10,22,40,0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
            '&:hover fieldset': {
              borderColor: '#F5A623',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0A1628',
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#0A1628',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
