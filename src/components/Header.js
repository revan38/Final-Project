import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import "../styles/header.css"
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div onClick={()=>navigate('/home')} className='logo'>
        <h1>PALITRA</h1>
      </div>
      <div className='nav-bar'>
<ul>
  {/* <li>
    <NavLink className='nav' to="/home">ANA SƏHİFƏ</NavLink>  
  </li> */}
  <li>
  <NavLink className='nav' to="/about">HAQQIMIZDA</NavLink>
  </li>
  <li>
  <NavLink className='nav' to="/shop">MAĞAZA</NavLink>
  </li>
  <li>
  <NavLink className='nav' to="/contact">ƏLAQƏ</NavLink>
  </li>
  <li>
  <NavLink className='nav' to="/blog">BLOG</NavLink>
  </li>
</ul>
      </div>
      <div className='aside'>
        <ul>
          <li>
          <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
          <i className="fa-solid fa-basket-shopping"></i>
          </li>
          <li>
          <i className="fa-solid fa-user"></i>
          </li>
        </ul>
      </div>
  </header>
  )
}

export default Header;