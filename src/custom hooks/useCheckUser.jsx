import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

const useCheckUser = ({ path }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setIsLoading(false);
        setIsSuccess(true);
        setUser(uid);
        // navigate("/");
        // ...
      } else {
        // User is signed out
        // ...
        // navigate("/login");
        setIsLoading(false);
        setIsSuccess(false);
        setUser(null);
        setIsError(true);
        setErrorMsg("No user was found, redirecting...");
      }
    });

    // return () => {
    //   unsub();
    // }
  }, [path]);
  return { isLoading, isError, isSuccess, user, errorMsg };
};

export default useCheckUser;
