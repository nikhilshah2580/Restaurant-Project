import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import { useLocation } from 'react-router'

const App = () => {
  const location = useLocation()
  const hideNavbar = location.pathname === '/login'

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <main>
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
