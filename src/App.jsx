import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spinner from './components/spinner'
import NavBar from './components/navbar'
// import './assets/scss/bootstrap.scss'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import About from './pages/about'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    console.log(currentPage)
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <>
    
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()} 
    </>
  )
}

export default App
