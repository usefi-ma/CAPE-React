import React from 'react';
import MenuItem from '../../components/menu-items'
import { Outlet,useNavigate } from 'react-router-dom';


const AdminLayout = () => {
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signin',{replace:true})
    }
  return (
    <>
    <MenuItem></MenuItem>
    <div className="overlay"></div>
    {/* <!-- ======== sidebar-nav end =========== --> */}
    {/* <!-- ======== main-wrapper start =========== --> */}
    <main className="main-wrapper">
        {/* <!-- ========== header start ========== --> */}
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-6">
                        <div className="header-left d-flex align-items-center">
                            <div className="menu-toggle-btn mr-20">
                                <button id="menu-toggle"
                                        className="main-btn primary-btn btn-hover">
                                    <i className="lni lni-chevron-left me-2"></i> Menu
                                </button>
                            </div>
                            <div className="header-search d-none d-md-flex">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button><i className="lni lni-search-alt"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-6">
                        <div className="header-right">
                            {/* <!-- profile start --> */}
                            <div className="profile-box ml-15">
                                <button className="dropdown-toggle bg-transparent border-0"
                                        type="button"
                                        id="profile"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                    <div className="profile-info">
                                        <div className="info">
                                            <h6>John Doe</h6>
                                            <div className="image">
                                                <img src="assets/images/profile/profile-image.png"
                                                     alt="" />
                                                <span className="status"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <i className="lni lni-chevron-down"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="profile">
                                    <li>
                                        <a href="" onClick={logout}> <i className="lni lni-exit"></i> Sign Out </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- profile end --> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- ========== header end ========== -->
        <!-- ========== section start ========== --> */}
        <section className="section">
            <div className="container-fluid">
                <Outlet></Outlet>
            </div>
            {/* <!-- end container --> */}
        </section>
        {/* <!-- ========== section end ========== --> */}


    </main>
    
    
    </>
  )
}

export default AdminLayout
    {/* <!-- ======== sidebar-nkav start =========== --> */}
 
    {/* <!-- ======== main-wrapper end =========== -->
    <!-- ========= All Javascript files linkup ======== --> */}
    {/* <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/main.js"></script> */}

