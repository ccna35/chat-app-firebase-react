import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useLocation, useNavigate } from "react-router-dom";
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
import useCheckUser from "../custom hooks/useCheckUser";
import Welcome from "../components/Welcome";

const ChatDashboard = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    isSuccess,
    user: currentUser,
    errorMsg,
  } = useCheckUser(pathname);

  if (isError) {
    console.log(errorMsg);
    navigate("/login");
  }

  const [docRefId, setDocRefId] = useState(null);
  const [loggedinUser, setLoggedinUser] = useState({});

  return (
    <Box marginTop="2rem">
      <Container maxWidth="xl">
        <Stack direction="row" flexWrap="wrap" spacing={2}>
          <Sidebar
            docRefId={docRefId}
            setDocRefId={setDocRefId}
            setLoggedinUser={setLoggedinUser}
          />

          {docRefId === null ? (
            <Welcome />
          ) : (
            <ChatContainer
              docRefId={docRefId}
              setDocRefId={setDocRefId}
              currentUser={currentUser}
            />
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default ChatDashboard;
