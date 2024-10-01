import Layout from "../components/Layout"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Bookings from '../Pages/Bookings/Bookings'
import Invoices from '../Pages/Invoices/Invoices' 
import Tickets from '../Pages/Tickets/Tickets'
import Auth from "../Pages/Auth/Auth"

const Router = [
    {path:"/", element:<Auth />},
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