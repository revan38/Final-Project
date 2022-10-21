import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
function App() {
  return (
    <>
   <Router>
   <Header/>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/blog' element={<Blog/>}/>
</Routes>

   </Router>
    </>
  );
}

export default App;
