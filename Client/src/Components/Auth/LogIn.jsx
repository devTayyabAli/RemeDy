import React, { useEffect, useState } from "react";
import "./LogIn.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logInSideImage from "../../Assets/images/logInSideImage.png";
import logo from "../../Assets/images/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../../API/Api";
import toast from "react-hot-toast";
import { UpdateAuth } from "../../Redux/AuthSlice";
import { useDispatch } from "react-redux";

export default function LogIn() {
  const Navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async (data) => {
    try {
      setSpinner(true);
      let response = await API.post("/api/user/login", data);
      if (response.data.error) {
        toast.error(response.data.error_msg);
        setSpinner(false);
      } else {
        dispatch(
          UpdateAuth({
            isAuth: true,
            userName: response.data.response.fullName,
            jwt_token: response.data.token,
          })
        );
        toast.success(response.data.success_msg);
        Navigate("/dashBoard")
        setSpinner(false);
      }
    } catch (error) {
      console.log("Error While User LogIn", error);
      setSpinner(false);
    }
  };
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          //   component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: "#0B2558" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 2,
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              padding: "5px 25px",
            }}
            // className=" flex flex-col items-center justify-start "
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmitHandler)}
              sx={{
                "& .MuiTextField-root": { m: 1 },
                marginTop: "2rem",
              }}
            >
              <div className="flex flex-col w-100 me-2 ">
                <img src={logo} alt="Logo" width="50%" />
                <h2 className="text-white mt-4 font-[700]">Log In</h2>
              </div>

              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Email"
                name="email"
                variant="standard"
                focused
                {...register("email", { required: true })}
                className="mt-5"
                placeholder="Email"
              />
              <p className="text-[14px] text-red-500 ">
                {errors.email?.message}
              </p>

              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Password"
                name="password"
                variant="standard"
                focused
                placeholder="**********"
                {...register("password", { required: true })}
              />
              <p className="text-[14px] text-red-500 ">
                {errors.password?.message}
              </p>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#00ADEF" }}
              >
                {spinner ? "Loading..." : "Sign In"}
              </Button>
              <Grid container>
                <Grid item className="linkstyle">
                  <Link
                    to="/registration"
                    className="text-white decoration-none text-[16px]  "
                  >
                    Don't have an account?{" "}
                    <b className="cursor-pointer">Sign Up</b>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: `url(${logInSideImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
    </>
  );
}
