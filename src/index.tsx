// // Importing Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import provider to use redux state's in hole app
import { Provider } from 'react-redux';


// Importing Route Component's
import Dashboard from './Routes/Dashboard';
import Login from './Routes/Login';
import Register from './Routes/Register';
import ConformEmail from './Routes/ConformEmail';

// import Store -> Created by Redux/ToolKit State manager
import {store} from './Redux/ConfigureStore';

// Importing base style file's 
import './Assets/Styles/Tailwind.scss';






// Create App directly inside Body tag 
ReactDOM.createRoot(document.querySelector('.root') as HTMLElement).render(
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="confirm-email" element={<ConformEmail/>} />
        </Routes>
      </BrowserRouter>

    </Provider>
);

// Route's :

//   - './' => Access to the main dashboard of the messenger
//   - './login' => Login to existing user
//   - './register' => Register new user
//   - './confirm-email' => Confirm the email of new registered user
