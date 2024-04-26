import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserLogin, errorClean } from "../state/reducers/loginSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { isLoading, isAuthenticated, isError } = useSelector((state) => state.user); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === "" || password === ""){
      setErrorMessage("Email or Password are required");
    }else{
      dispatch(createUserLogin({email, password}));
      setEmail("");
      setPassword("");
    }
  };
  useEffect(()=> {
    if(isError){
      toast.error(errorMessage)
      dispatch(errorClean());
    }
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  },
[isError, errorMessage, isAuthenticated, navigate, dispatch]);
  return (
    <Box
      sx={{
        bgcolor: "#F4F5FA",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        variant="outlined"
        sx={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)" }}
      >
        <CardContent>
          <Box
            sx={{
              color: "primary.main",
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1.5rem !important",
              }}
            >
              Soil To Factory
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5, textAlign: "center" }}
            >
              Welcome to Soil To Factory! 👋🏻
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              {" "}
              Please sign-in to your account and start the adventure.
            </Typography>
          </Box>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id="email"
              required
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 3 }}
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="auth-login-password">Password</InputLabel>
              <OutlinedInput
                label="Password"
                id="auth-login-password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Box
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={isChecked} />}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  label="Remember Me"
                />
              </FormGroup>
              <Button>
                <Link to="/forget-password">Forget Password?</Link>
              </Button>
            </Box>
            <Button
              fullWidth
              size="large"
              variant="contained"
              type="submit"
              disabled={isLoading}
              sx={{ marginBottom: 5 }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
