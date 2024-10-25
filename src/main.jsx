import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DonationDetails from './components/DonationDetails/DonationDetails.jsx'
import Donations from './components/Donations/Donations.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import './index.css'
import MainLayouts from './layouts/MainLayouts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayouts></MainLayouts>,

    children: [
      {
        path: '/',
        loader: () => fetch('../public/donation.json'),  
        element: <Home></Home>
      },
      {
        path: '/donations',
        loader: () => fetch('../public/donation.json'),  
        element: <Donations></Donations>
      },
      {
        path: '/statistics',
        loader: () => fetch('../public/donation.json'),
        element: <Statistics></Statistics>
      },
      {
        path: '/donation-details/:donationId',
        loader: () => fetch('../public/donation.json'),
        element: <DonationDetails></DonationDetails>
      }
    ]
  }
]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
