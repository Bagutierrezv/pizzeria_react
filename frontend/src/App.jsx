import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navigation/Navigation'
import { Toaster } from 'sonner'
import AppRoutes from './routes/AppRoutes'
import AppProvider from './store/AppProvider'

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <AppRoutes />
        <Toaster position='top-center' expand={false} richColors />
      </AppProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
