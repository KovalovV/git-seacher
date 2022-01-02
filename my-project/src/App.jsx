import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import UserDetails from './components/users/UserDetails';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';

import { GithubProvider } from './components/context/github/GithubContext';
import { AlertProvider } from './components/context/alert/AlertContex';

const App = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar title='Git Seacher' />

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/users/:login' element={<UserDetails />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
