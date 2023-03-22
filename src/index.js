import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';
import { Provider} from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
          </BrowserRouter>
        </PersistGate>
        </ChakraProvider>
      </Provider>
  
  </React.StrictMode>
);
