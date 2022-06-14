import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from "firebase/auth";

import { useRouter } from "next/router";

import initializeFirebase from "../config/firebase_init";
initializeFirebase();

export default function useFirebase() {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const auth = getAuth();

  // create new user with register
  const registerUser = (email, Password, name) => {
    createUserWithEmailAndPassword(auth, email, Password)
      .then(() => {
        setAuthError("");

        const newUser = { email, displayName: name };
        setUser(newUser);

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setAuthError(error.message);
          });

        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // user login
  const loginUser = (email, password, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setUser(user);
        router.push(location?.query?.from || "/");
        setAuthError("");
      })
      .catch((error) => {
        console.log(error.message);
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  // Log out user
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
    router.push("/");
  };

  // firebase observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) => {
          console.log(idToken);
        });
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    authError,
    loading,
    registerUser,
    loginUser,
    logOut,
    setLoading,
    setAuthError,
  };
}
