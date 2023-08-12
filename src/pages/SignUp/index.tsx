import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { useFirebaseAuth } from "../../hooks/useFirebaseAuth";
import { AuthLayout } from "../../layouts/authLayout";
import { api } from "../../api";
import { useMutation } from "@tanstack/react-query";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmationPassword = () =>
    setShowConfirmationPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { handleGoogleLogin } = useFirebaseAuth({
    email,
    password,
  });

  const signupMutation = useMutation({
    mutationFn: () => api.userSignup({ email, fullName, password }),
  });

  return (
    <AuthLayout>
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-xl leading-none">Let's Get Started!</h1>
        <h3 className="text-textSecondary">
          Create an account to get started with your custom chatbots
        </h3>
        <form className="flex flex-col space-y-6 pt-4">
          <TextField
            id="input-fullname"
            label="Full name"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            id="input-email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirmationPassword ? "text" : "password"}
              value={confirmationPassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmationPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmationPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>
          <Button variant="contained" onClick={() => signupMutation.mutate()}>
            Sign up
          </Button>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
          >
            Google
          </Button>
        </form>
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-primaryMain font-bold">
            Sign in
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
