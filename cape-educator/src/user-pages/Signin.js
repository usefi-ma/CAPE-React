import React from 'react';
import TextField from "@mui/material/TextField";
import {Link } from 'react-router-dom'
import { Grid, Container, Typography, Card, Button } from "@mui/material";
const Signin = () => {
  return (
    <>
     
      {/* <!-- ========== signin-section start ========== --> */}
      <section class="signin-section">
        <div class="container-fluid">
        
          <div class="row justify-content-center">
         
          
            <div class="col-xs-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-3">
              <div class="signin-wrapper">
                <h3>Sign In</h3>
                <div class="form-wrapper">
                  <form action="#">
                    <div class="row">
                      <div class="col-12">
                        <div class="input-style-1">
                 
                        <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "600",
                      fontSize:"15px"
                    }}
                  >
                    USERNAME
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Username"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                        </div>
                      </div>
                     
                      <div class="col-12 mt-4">
                        <div class="input-style-1">
                        <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      marginBottom: 8,
                      display: "block",
                      fontWeight: "600",
                      fontSize:"15px"
                    }}
                  >
                    PASSWORD
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Password" 
                    type="password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                        </div>
                      </div>
                      <div class="col-12 mt-4">
                        <div
                          class="
                            button-group
                            d-flex
                            justify-content-center
                            flex-wrap
                          "
                        >
                          <Link
                            class="btn btn_custom w-100 mt-0" to="/dashboard"
                          >
                            Sign In
                          </Link>
                          <div class="col-12">
                        <div class="mt-3">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="checkbox-remember"
                            checked
                          />
                          <label
                            class="form-check-label"
                            for="checkbox-remember"
                          >
                            Remember me next time</label
                          >
                        </div>
                      </div>
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

 
