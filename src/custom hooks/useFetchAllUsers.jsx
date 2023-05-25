import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

const useFetchAllUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setIsLoading(false);
      setIsSuccess(true);
      setUsers([...users]);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return { isLoading, isError, isSuccess, users, errorMsg };
};

export default useFetchAllUsers;
