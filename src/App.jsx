import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './Pages/Dashboard'
import Bookings from './Pages/Bookings'
import Invoices from './Pages/Invoices'
import Tickets from './Pages/Tickets'
function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
              <Route  path='/' element={<Dashboard /> } />
              <Route path='/tickets' element={<Tickets /> } />
              <Route path='/bookings' element={<Bookings /> } />
              <Route path='invoices' element={<Invoices /> } />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
