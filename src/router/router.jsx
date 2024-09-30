import Layout from "../components/Layout"
import Dashboard from "../Pages/Dashboard"
import Bookings from '../pages/Bookings'
import Invoices from '../Pages/Invoices' 
import Tickets from '../Pages/Tickets'
const Router = [
    {
        path:'/',
        element:<Layout />,
        children:[
                {path:"dashboard", element:<Dashboard />},
                {path:"bookings", element:<Bookings />},
                {path:"invoices", element:<Invoices />},
                {path:"tickets", element:<Tickets />},
                {path:"listings", element:<Invoices />}
        ]
        
    }
]

export default Router;