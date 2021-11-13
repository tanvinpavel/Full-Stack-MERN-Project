import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [ isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //check admin
  useEffect(() => {
    fetch(`https://arcane-anchorage-83436.herokuapp.com/user/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin);
      })
  }, [user.email])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  
  const newUserLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const facebookLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider)
  }

  //save user on mongodb
  const saveUser = (displayName, email) => {
    const user = { displayName, email };
    fetch('https://arcane-anchorage-83436.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then()
  }

  //save user on mongodb
  const saveGoogleUser = (displayName, email) => {
    const user = { displayName, email };
    fetch('https://arcane-anchorage-83436.herokuapp.com/users', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then()
  }
  
  const userSignOut = () => {
    setIsLoading(true);
    signOut(auth)
    .then(() => {
      setUser({});
      console.log("sign out successfully");
    })
    .finally(() => setIsLoading(false));
  };
  
  const newAccount = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  return {
    user,
    error,
    isLoading,
    admin,
    setUser,
    setError,
    googleSignIn,
    userSignOut,
    setIsLoading,
    newAccount,
    newUserLogin,
    facebookLogin,
    saveUser,
    saveGoogleUser
  };
};

export default useFirebase;
