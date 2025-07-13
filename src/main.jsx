import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Statistics from './Layout/Pages/Statistics.jsx';
import AppliedJobs from './Layout/Pages/AppliedJobs.jsx'
import Blog from './Layout/Pages/Blog.jsx'
import StartApplying from './Layout/Pages/StartApplying.jsx'
import Hero from './Layout/Components/Hero.jsx';
import Home from './Layout/Pages/Home.jsx';
import JobDetails from './Layout/Pages/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/applied-job',
        element: <AppliedJobs></AppliedJobs>,
        loader:() => fetch('/jobs.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/start-applying',
        element: <StartApplying></StartApplying>
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('./jobs.json')
      },
      {
        path: '/applied-job/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }

    ]
  },

  
] 
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);