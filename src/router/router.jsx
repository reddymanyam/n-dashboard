import Layout from "../components/Layout"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Bookings from '../Pages/Bookings/Bookings'
import Invoices from '../Pages/Invoices/Invoices' 
import Tickets from '../Pages/Tickets/Tickets'
import Auth from "../Pages/Auth/Auth"
import User from "../Pages/User/User"
const Router = [
    {path:"/", element:<Auth />},
    {path:'/user', element:<User />},


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