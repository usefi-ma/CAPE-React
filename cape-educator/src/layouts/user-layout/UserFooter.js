import React from 'react'

import logo from '../../assets/images/logo.png';
import menu_icon from '../../assets/images/menu_icon.svg'


function UserFooter() {
    return (
      <>
      <section className="footer">
      <div className="container">
          <div className="row menu_footer">
              <nav className='navbar navbar-expand-lg navbar-light'>
                  <div className='container-fluid'>
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
                                      <a className='nav-link active' href='index.html'>Home</a>
                                  </li>
                                  <li className='nav-item'>
                                      <a className='nav-link' href='About.html'>About Us</a>
                                  </li>
                                  <li className='nav-item'>
                                      <a className='nav-link' href='Executive.html'>Executive</a>
                                  </li>
                                  <li className='nav-item'>
                                      <a className='nav-link' href='Announcements.html'>Announcements</a>
                                  </li>
                                  <li className='nav-item'>
                                      <a className='nav-link' href='Research.html'>Research</a>
                                  </li>
                                  <li className='nav-item'>
                                      <a className='nav-link' href='Conferences.html'>Conferences</a>
                                  </li>
                                  <li className='nav-item'>
                                      <a className='nav-link' href='Contact.html'>Contact</a>
                                  </li>
                              </ul>
                          </div>

                      </div>
                  </div>
              </nav>
          </div>
          <div className="row">
              <p>© 2023 C.A.P.E | Canadian Association of Police Educators </p>
          </div>

      </div>

  </section>

    </>
  );
}

export default UserFooter;