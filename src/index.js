import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import reduxStore from './redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux';
//  const {store,persittore}= reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persittore}>  */}
          <BrowserRouter>
              <App />
          </BrowserRouter>
        {/* </PersistGate> */}
    </Provider> 
  </div>
       
 
);


