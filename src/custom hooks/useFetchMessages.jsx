import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";

const useFetchMessages = ({ docRefId }) => {
  console.log(docRefId);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const docRef2 = doc(db, "chats", "TU4AMi1ChDaIKbQ3aEjs");
    const colRef = collection(docRef2, "messages");
    const unsubscribe = onSnapshot(colRef, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setIsLoading(false);
      setIsSuccess(true);
      setMessages([...messages]);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return { isLoading, isError, isSuccess, messages, errorMsg };
};

export default useFetchMessages;
