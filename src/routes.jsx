import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello everyone</h1>,
    error: '',
  },
]);

export default routes;
