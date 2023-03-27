import React from 'react';


const Signin = () => {
  return (
    <>
      {/* <!-- ========== signin-section start ========== --> */}
      <section class="signin-section">
        <div class="container-fluid">
        
          <div class="row g-0 auth-row justify-content-center">
         
            {/* <!-- end col --> */}
            <div class="col-lg-6">
              <div class="signin-wrapper">
                <div class="form-wrapper">
                  <form action="#">
                    <div class="row">
                      <div class="col-12">
                        <div class="input-style-1">
                          <label>Email</label>
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                     
                      <div class="col-12">
                        <div class="input-style-1">
                          <label>Password</label>
                          <input type="password" placeholder="Password" />
                        </div>
                      </div>
                
                      <div class="col-xxl-6 col-lg-12 col-md-6">
                        <div class="form-check checkbox-style mb-30">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkbox-remember"
                          />
                          <label
                            class="form-check-label"
                            for="checkbox-remember"
                          >
                            Remember me next time</label
                          >
                        </div>
                      </div>
                      
                      <div class="col-xxl-6 col-lg-12 col-md-6">
                        <div
                          class="
                            text-start text-md-end text-lg-start text-xxl-end
                            mb-30
                          "
                        >
                          <a href="#0" class="hover-underline"
                            >Forgot Password?</a
                          >
                        </div>
                      </div>
                    
                      <div class="col-12">
                        <div
                          class="
                            button-group
                            d-flex
                            justify-content-center
                            flex-wrap
                          "
                        >
                          <button
                            class="
                              main-btn
                              primary-btn
                              btn-hover
                              w-100
                              text-center
                            "
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                   
                  </form>
                 
                </div>
              </div>
            </div>
          
          </div>
        
        </div>
      </section>
    
    </>
  )
}

export default Signin;

 
