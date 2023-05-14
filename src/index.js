import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/context/themeContext';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './components/contact';
import Tweet from './components/Tweet';

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}, {
  path: '/Contact',
  element: <Contact />
}, {
  path: '/tweet/:tweetId',
  element: <Tweet />
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
