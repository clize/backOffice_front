import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
// import "./assets/css/vendor/bootstrap.min.css";
// import "./assets/css/vendor/bootstrap.rtl.only.min.css";
import App from './App';
import * as serviceWorker from './serviceWorker';


const defaultTheme = createMuiTheme({
    typography: {
      fontFamily: '"Noto Sans KR", serif',
    },
    palette: {
      primary:{
        main: '#E7E7E7'
      },
      secondary:{
        main: '#BFB8EB'
      }
    }
  });

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={defaultTheme}><App /></MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
