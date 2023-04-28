import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Grid, Container, Typography, Card, Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userData, setUserData] = useState([]);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.FullName.value;
    const email = e.target.Email.value;
    const pwd = e.target.Password.value;
    const confPwd = e.target.ConfirmPassword.value;
    //ERROR HANDLING
    if (pwd != confPwd) {
      setPasswordsMatch(false);
      console.log("Passwords don't match");
      return;
    } else {
      setPasswordsMatch(true);
      console.log("Passwords match");
    }
    try {
      const response = await axios.post("http://localhost:3000/users", {
        FullName: fullName,
        Email: email,
        Pwd: pwd,
      });
      setUserData([...userData, response.data]);
      toast.success("New user inserted successfully!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <!-- ========== signin-section start ========== --> */}
      <section class="signin-section">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-xs-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 col-xxl-4">
              <div class="signin-wrapper">
                <h3>Register</h3>
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
                                display: "block",
                                fontWeight: "600",
                                fontSize: "15px",
                              }}
                            >
                              FULL NAME
                            </Typography>
                            <TextField
                              id="outlined-multiline-static"
                              label="name"
                              variant="outlined"
                              name="FullName"
                              required
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
                                display: "block",
                                fontWeight: "600",
                                fontSize: "15px",
                              }}
                            >
                              EMAIL
                            </Typography>
                            <TextField
                              id="outlined-multiline-static"
                              label="email"
                              type="email"
                              variant="outlined"
                              onChange={handleChange}
                              required
                              name="Email"
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
                                fontSize: "15px",
                              }}
                            >
                              PASSWORD
                            </Typography>
                            <TextField
                              id="outlined-multiline-static"
                              label="Password"
                              type="password"
                              variant="outlined"
                              name="Password"
                              onChange={handleChange}
                              required
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
                                fontSize: "15px",
                              }}
                            >
                              CONFIRM PASSWORD
                            </Typography>
                            <TextField
                              id="outlined-multiline-static"
                              label="ConfirmPassword"
                              type="password"
                              variant="outlined"
                              name="ConfirmPassword"
                              onChange={handleChange}
                              required
                              fullWidth
                            />
                            {!passwordsMatch && (
                              <p style={{ color: "red" }}>
                                Passwords do not match
                              </p>
                            )}
                          </Grid>
                        </div>
                      </div>
                      <div class="col-12 mt-4">
                        <Button type="submit" class="btn btn_custom w-100 mt-0">
                          REGISTER
                        </Button>
                      </div>
                      <div class="col-12 mt-1 account_desc">
                        You have already an acount  &nbsp;
                        <Link class=" w-100 mt-0 form-check-label" to="/signin">
                         Sign In
                        </Link>
                        <ToastContainer />
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

export default Register;
