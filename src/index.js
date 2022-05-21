import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ChakraProvider,extendTheme} from '@chakra-ui/react';
import {MoralisProvider} from 'react-moralis'

const theme = extendTheme({
  config:{
    initialColorMode:'dark'
  }
});
 
   const appId=''
   const serverUrl=''

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
  <BrowserRouter>
  <ChakraProvider theme = {theme}>
   <App />
  </ChakraProvider>
 </BrowserRouter>
  </MoralisProvider>
);


