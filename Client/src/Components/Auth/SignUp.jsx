import React, { useEffect, useState } from "react";
import "./LogIn.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logInSideImage from "../../Assets/images/logInSideImage.png";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import logo from "../../Assets/images/logo.png";
import {
  CountryIso2,
  defaultCountries,
  FlagEmoji,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputAdornment from "@mui/material/InputAdornment";
import toast from "react-hot-toast";
import { API } from "../../API/Api";

export default function SignUp() {
  const [muiPhone, setMuiPhone] = useState("+92");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const Navigate = useNavigate();

  const [spinner, setSpinner] = useState(false);
  const { phone, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "pk",
      muiPhone,
      countries: defaultCountries,
      onChange: function (data) {
        setMuiPhone(data.phone);
      },
    });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const schema = yup.object().shape({
    fname: yup.string().required("Full Name is required"),
    email: yup.string().email().required("Email is required"),
    pNumber: yup.string().required("Phone Number is required"),
    Password: yup
      .string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    cPassword: yup
      .string()
      .required("Confirm Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([yup.ref("Password")], "Passwords do not match"),
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
      let response = await API.post("/api/user/signup", {
        fullName: data?.fname,
        email: data?.email,
        password: data?.Password,
        phoneNumber: muiPhone,
      });
      if (response.data.error) {
        toast.error(response.data.error_msg);
        setSpinner(false);
      } else {
        toast.success(response.data.success_msg);
        setSpinner(false);
        Navigate('/')
      }
    } catch (error) {
      console.log("Error While User SignUp", error);
      setSpinner(false);
    }
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        {/* <CssBaseline /> */}
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
              mx: 4,
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              padding: "5px 25px",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmitHandler)}
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
            >
              <div className="flex flex-col w-100 ">
                <img src={logo} alt="Logo" width="50%" />
                <h2 className="text-white mt-4 font-[700]">Sign Up</h2>
              </div>
              <div className="mt-3">
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Full Name"
                  name="name"
                  variant="standard"
                  placeholder="Full Name"
                  focused
                  {...register("fname", { required: true })}
                />
                <p className="text-[14px] text-red-500 ">
                  {errors.fname?.message}
                </p>
              </div>
              <div className="mt-3">
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Email"
                  name="email"
                  variant="standard"
                  placeholder="Email"
                  focused
                  {...register("email", { required: true })}
                />

                <p className="text-[14px] text-red-500 ">
                  {errors.email?.message}
                </p>
              </div>

              <TextField
                variant="standard"
                label="Phone number"
                color="primary"
                placeholder="Phone number"
                value={phone}
                name="pNumber"
                {...register("pNumber", { required: true })}
                onChange={handlePhoneValueChange}
                type="tel"
                focused
                inputRef={inputRef}
                style={{ marginTop: "1.5rem" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      style={{ marginRight: "2px", marginLeft: "-8px" }}
                    >
                      <Select
                        MenuProps={{
                          style: {
                            height: "300px",
                            width: "360px",
                            top: "10px",
                            left: "-34px",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "left",
                          },
                        }}
                        sx={{
                          width: "max-content",
                          fieldset: {
                            display: "none",
                          },
                          '&.Mui-focused:has(div[aria-expanded="false"])': {
                            fieldset: {
                              display: "block",
                            },
                          },
                          ".MuiSelect-select": {
                            padding: "8px",
                            paddingRight: "24px !important",
                          },
                          svg: {
                            right: 0,
                          },
                        }}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        renderValue={(value) => (
                          <FlagEmoji iso2={value} style={{ display: "flex" }} />
                        )}
                      >
                        {defaultCountries.map((c) => {
                          const country = parseCountry(c);
                          return (
                            <MenuItem key={country.iso2} value={country.iso2}>
                              <FlagEmoji
                                iso2={country.iso2}
                                style={{ marginRight: "8px" }}
                              />
                              <Typography marginRight="8px">
                                {country.name}
                              </Typography>
                              <Typography color="gray">
                                +{country.dialCode}
                              </Typography>
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </InputAdornment>
                  ),
                }}
                //   {...restProps}
              />
              <p className="text-[14px] text-red-500 ">
                {errors.pNumber?.message}
              </p>
              <div className="mt-3">
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Password"
                  name="password"
                  type="password"
                  variant="standard"
                  placeholder="*******"
                  focused
                  {...register("Password", { required: true })}

                  // placeholder="**********"
                />
                <p className="text-[14px] text-red-500 ">
                  {errors.Password?.message}
                </p>
              </div>

              <TextField
                type={values.showPassword ? "text" : "password"}
                required
                fullWidth
                id="outlined-required"
                label="Re-Type Password"
                name="cPassword"
                variant="standard"
                placeholder="*******"
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       // onMouseDown={handleMouseDownPassword}
                //       edge="end"
                //     >
                //       {values.showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // }
                focused
                {...register("cPassword", { required: true })}
              />
              <p className="text-[14px] text-red-500 ">
                {errors.cPassword?.message}
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
                    to="/"
                    className="text-white decoration-none text-[16px]  "
                  >
                    Have a account? <b>Log in</b>
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
