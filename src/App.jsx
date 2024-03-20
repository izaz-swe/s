import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dummy from './components/Dummy'
import Layout from './containers/Layout'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Layout/>}/>
        <Route path='/app' element={<Dummy/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
