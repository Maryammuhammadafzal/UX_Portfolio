import React from 'react'
import Logo from "../assets/logo.png"

const Header = () => {
  let nav_data = [
    {
      nav_link : "/",
      nav_name : "Home"
    },
    {
      nav_link : "/",
      nav_name : "About"
    },
    {
      nav_link : "/",
      nav_name : "Services"
    },
    {
      nav_link : "/",
      nav_name : "Portfolio"
    },
    {
      nav_link : "/",
      nav_name : "Contact Us"
    },
  ]
  return (
    <div className='w-[90%] h-auto flex justify-center items-center my-6'>
      <div className="w-[70%] h-[100px] flex justify-between items-center">
        <div className="logo">
          <img src={Logo} alt="logo UX pert" />
        </div>
        <nav className='w-auto h-auto flex justify-center items-center'>
<ul className='w-auto h-auto flex justify-center items-center gap-5'>
{
  nav_data.map(({nav_link , nav_name}) => (
    <li className='w-fit p-1'>
      <a to="/" className='text-xl font-medium'>{nav_name}</a>
    </li>
  ))
}
</ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
