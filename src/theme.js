import {createTheme} from '@material-ui/core/styles';

const primaryColor = '#ff5964';
const secondaryColor = '#38618c';

const theme = (type) => createTheme({
  palette: {
    type: type ? type : 'light',
    primary: {
      main: primaryColor,
      contrastText: '#fff',
    },
    secondary: {
      main: secondaryColor,
    },
    text: {
      primary: '#000000',
      secondary: '#746F81',
    },
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
});

export default theme;