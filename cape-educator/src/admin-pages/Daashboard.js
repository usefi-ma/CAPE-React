import React from 'react'


const Dashboard = () => {
  return (
    <>
    {/* <!-- ========== title-wrapper start ========== --> */}
                <div className="title-wrapper pt-30">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="title mb-30">
                                <h2>CAPE Dashboard</h2>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-md-6">
                            <div className="breadcrumb-wrapper mb-30">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#0">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            eCommerce
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- ========== title-wrapper end ========== --> */}
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="icon-card mb-30">
                            <div className="icon purple">
                                <i className="lni lni-consulting"></i>
                            </div>
                            <div className="content">
                                <h6 className="mb-10">Conferences</h6>
                                <h3 className="text-bold mb-10">0</h3>
                            </div>
                        </div>
                        {/* <!-- End Icon Cart --> */}
                    </div>
                    {/* <!-- End Col --> */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="icon-card mb-30">
                            <div className="icon success">
                                <i className="lni lni-user"></i>
                            </div>
                            <div className="content">
                                <h6 className="mb-10">Executives</h6>
                                <h3 className="text-bold mb-10">0</h3>

                            </div>
                        </div>
                        {/* <!-- End Icon Cart --> */}
                    </div>
                    {/* <!-- End Col --> */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="icon-card mb-30">
                            <div className="icon primary">
                                <i className="lni lni-book"></i>
                            </div>
                            <div className="content">
                                <h6 className="mb-10">Researches</h6>
                                <h3 className="text-bold mb-10">0</h3>

                            </div>
                        </div>
                        {/* <!-- End Icon Cart --> */}
                    </div>
                    {/* <!-- End Col --> */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="icon-card mb-30">
                            <div className="icon orange">
                                <i className="lni lni-user"></i>
                            </div>
                            <div className="content">
                                <h6 className="mb-10"> Users</h6>
                                <h3 className="text-bold mb-10">0</h3>

                            </div>
                        </div>
                        {/* <!-- End Icon Cart --> */}
                    </div>
                    {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Row --> */}

    
    </>
  )
}

export default Dashboard