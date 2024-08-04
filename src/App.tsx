import {Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Home from './Pages/Home'
import About from './Pages/About'
import Store from './Pages/Store'
import Navbar from './Components/Navbar'
function App() {


  return (
    <>
    <Navbar/>
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Container>
    </>
  )
}

export default App
