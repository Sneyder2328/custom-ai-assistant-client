import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../lib/firebaseApp";
import { useState } from "react";

export const useFirebaseAuth = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const loginSuccess = (result: UserCredential) => {
    // The signed-in user info.
    const usr = result.user;
    setUser(usr);
  };
  const loginError = (error: Error) => {
    console.error("handleLogin error=", error);
  };

  const handleSignUpWithEmailAndPass = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(loginSuccess)
      .catch(loginError);
  };
  const handleLoginWithEmailAndPass = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(loginSuccess)
      .catch(loginError);
  };
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider)
      .then(loginSuccess)
      .catch(loginError);
  };

  return {
    handleSignUpWithEmailAndPass,
    handleLoginWithEmailAndPass,
    handleGoogleLogin,
    user,
  };
};
