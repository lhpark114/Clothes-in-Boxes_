import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import ItemList from './components/itemList/ItemList';
import NewPage from './pages/NewPage'
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <ItemList />},
      { path: '/newpage', element: <NewPage />},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
