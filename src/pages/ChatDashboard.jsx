import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import {
  getDoc,
  doc,
  where,
  query,
  collection,
  getDocs,
} from "firebase/firestore";

const ChatDashboard = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        setUserId(uid);
      } else {
        // User is signed out
        // ...
        navigate("/login");
      }
    });

    // return () => {
    //   unsub();
    // }
  }, []);

  // useEffect(() => {
  //   console.log(userId);
  //   if (userId !== null) {
  //     const getUser = async () => {
  //       const q = query(collection(db, "users"), where("id", "==", userId));
  //       try {
  //         const querySnapshot = await getDocs(q);
  //         querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.id, " => ", doc.data());
  //         });
  //       } catch (error) {
  //         console.log(error.code);
  //         console.log(error.message);
  //       }
  //     };

  //     getUser();
  //   }
  // }, [userId]);

  return (
    <Box marginTop="2rem">
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2}>
          <Sidebar />
          <ChatContainer />
        </Stack>
      </Container>
    </Box>
  );
};

export default ChatDashboard;
