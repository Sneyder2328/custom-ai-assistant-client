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
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { handleLoginWithEmailAndPass, handleGoogleLogin } = useFirebaseAuth({
    email,
    password,
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-xl leading-none">Welcome back!</h1>
        <h3 className="text-textSecondary">
          Start creating your own ai chatbots
        </h3>
        <form className="flex flex-col space-y-6 pt-4">
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
          <Button variant="contained" onClick={handleLoginWithEmailAndPass}>
            Login
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
          Don't have an account?{" "}
          <Link to="/signup" className="text-primaryMain font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
