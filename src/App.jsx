import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';
import {BrowserRouter} from "react-router-dom"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Layout/>
      </BrowserRouter>
      
    </Provider>
  );
};

export default App;