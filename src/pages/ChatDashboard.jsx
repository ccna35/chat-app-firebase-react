import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";

const ChatDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        // ...
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
