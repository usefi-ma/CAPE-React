import React from 'react'
import {NavLink } from 'react-router-dom'

import logo from '../../assets/images/logo.png';
import menu_icon from '../../assets/images/menu_icon.svg'


function UserHeader() {
    return (
      <>
        <section className="topbar">
            <nav className='navbar navbar-expand-lg navbar-light'>
                <div className='container'>
                    <a className='navbar-brand text-white' href='#'>
                        <div className="logo">
                            <img src={logo} />
                        </div>
                    </a>
                    <button className='btn navbar-toggler border-3 px-2' type='button' data-bs-toggle='offcanvas'
                            data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
                     <img style={{width: 30}} src={menu_icon} alt='menu icon' /> 
                    </button>
                    <div className='offcanvas offcanvas-start-lg' tabIndex='-1' id='offcanvasExample'
                         aria-labelledby='offcanvasExampleLabel'>
                        <div className='offcanvas-header d-flex d-lg-none justify-content-end'>
                            {/* <!--<h5 className='offcanvas-title text-white' id='offcanvasExampleLabel'>Navbar</h5>--> */}
                            <a href='javascript:void(0) '
                               className='text-reset p-0'
                               data-bs-dismiss='offcanvas'
                               aria-label='close'>
                                <svg xmlns='http://www.w3.org/2000/svg'
                                     width='24'
                                     height='24'
                                     fill='#FFFFFF'
                                     className='bi bi-x-circle'
                                     viewBox='0 0 16 16'>
                                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                                </svg>
                            </a>
                        </div>
                        <div className='offcanvas-body p-lg-0'>
                            <ul className='navbar-nav'>
                           
                                <li className='nav-item'>
                                    <NavLink  to="/" className='nav-link' activeclassname="active">Home</NavLink >
                                </li>
                                <li className='nav-item'>
                                    <NavLink  to="/about" className='nav-link' activeclassname="active">About Us</NavLink >
                                </li>
                                <li className='nav-item'>
                                    <NavLink  to="/executive" className='nav-link' activeclassname="active">Executive</NavLink >
                                </li>
                                
                                <li className='nav-item'>
                                    <NavLink  to="/research" className='nav-link' activeclassname="active">Research</NavLink >
                                </li>
                                <li className='nav-item'>
                                    <NavLink  className='nav-link' to="/conference" activeclassname="active">Conferences</NavLink >
                                </li>
                                <li className='nav-item'>
                                    <NavLink  className='nav-link' to="/contact" activeclassname="active"> Contact Us</NavLink >
                                </li>
                            
                            </ul>
                            {/* <!--<div className="search_form">
                                <input placeholder="Search.." />
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </div>--> */}
                        </div>

                    </div>
                </div>
            </nav>
        </section>


      </>
    );
  }
  
  export default UserHeader;