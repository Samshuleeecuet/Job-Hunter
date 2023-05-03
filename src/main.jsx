import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import ApplyJob from './components/ApplyJob/ApplyJob';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,
    loader: () => fetch('/featurejob.json'),
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjobs',
        element: <ApplyJob></ApplyJob>
      },
      {
        path: 'Blog',
        element: <Blog></Blog>
      },
      {
        path: "job/:Id",
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch(`/featurejob.json/${params.Id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  ,
)
