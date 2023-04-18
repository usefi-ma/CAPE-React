import React from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Container, Typography, Card, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { object } from 'prop-types';

const Signin = () => {
  

  const[userData, setUserData] = useState([]);
  const[formErrors, setFormErrors] = useState({});
  const[loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) =>{
    const { name, value } = e.target;
    console.log(name, value);
  }

  const handleSubmit = async e =>{
    e.preventDefault();
    const email = e.target.Email.value;
    const pwd = e.target.Password.value;
    
    //VERIFY THAT ALL INPUT FIELDS ARE FILLED IN

    const errors = {};
    if(!email){
      errors.email = 'Email is required';
    }
    if(!pwd){
      errors.pwd = 'Password title is required';
    }

    if(Object.keys(errors).length > 0){
      setFormErrors(errors);
    } else {
      try{
        const response = await axios.post("http://localhost:3000/GetAll/login", {Email: email, Pwd: pwd});
        console.log(response.data);
        setUserData(response.data);
        if(typeof response.data === 'object'){
          setLoginSuccess(true);
          console.log("Login Successful");
          navigate('/dashboard', { state: {user: response.data} });
        } else {
          console.log("Login Failed")
        }
        
      } catch(error) {
        console.log(error);
      }
      e.target.reset();
      setFormErrors({});
    }
  }



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
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-12">
                        <div class="input-style-1">
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle1"
                              style={{
                                marginBottom: 8,
                                display: 'block',
                                fontWeight: '600',
                                fontSize: '15px',
                              }}
                            >
                              EMAIL
                            </Typography>
                            <TextField
                              id="outlined-multiline-static"
                              label="Username"
                              variant="outlined"
                              name="Email"
                              onChange={handleChange}
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
                                display: 'block',
                                fontWeight: '600',
                                fontSize: '15px',
                              }}
                            >
                              PASSWORD
                            </Typography>
                            <TextField
                              id="outlined-multiline-static"
                              label="Password"
                              type="password"
                              name="Password"
                              variant="outlined"
                              onChange={handleChange}
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
                        <Button type="submit" class="btn btn_custom w-100 mt-0">
                            SIGN IN
                        </Button>
                          <Link
                            class="btn btn_custom w-100 mt-0"
                            to="/Register"
                          >
                            Register Now
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
                                Remember me next time
                              </label>
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
  );
};

export default Signin;