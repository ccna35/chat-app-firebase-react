import { Box, Stack, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import useFetchMessages from "../custom hooks/useFetchMessages";

const ChatContainer = ({ docRefId, setDocRefId, currentUser }) => {
  const [msg, setMsg] = useState("");

  const handleSendMessage = async () => {
    console.log(msg);
    if (msg) {
      try {
        const docRef2 = doc(db, "chats", docRefId);
        const colRef = collection(docRef2, "messages");
        await addDoc(colRef, {
          senderId: currentUser,
          createdAt: serverTimestamp(),
          text: msg,
        });
      } catch (error) {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
      }
    }
  };

  const { isLoading, isError, isSuccess, messages, errorMsg } =
    useFetchMessages("TU4AMi1ChDaIKbQ3aEjs");

  if (isError) {
    console.log(errorMsg);
  }

  if (isSuccess) {
    console.log(messages);
  }

  return (
    <Box
      flexGrow={1}
      border="1px solid lightgray"
      padding="1rem"
      borderRadius=".25rem"
    >
      <Stack gap={2}>
        <Typography
          variant="p"
          component="p"
          padding=".5rem 1rem"
          bgcolor="lightgray"
          borderRadius="9999rem"
          alignSelf="self-start"
        >
          This is a test message
        </Typography>
        <Typography
          variant="p"
          component="p"
          padding=".5rem 1rem"
          bgcolor="lightgray"
          borderRadius="9999rem"
          alignSelf="self-start"
        >
          This is a test message
        </Typography>
        <Typography
          variant="p"
          component="p"
          padding=".5rem 1rem"
          bgcolor="lightgray"
          borderRadius="9999rem"
          alignSelf="self-start"
        >
          This is a test message
        </Typography>
        <Typography
          variant="p"
          component="p"
          padding=".5rem 1rem"
          bgcolor="lightgray"
          borderRadius="9999rem"
          alignSelf="self-start"
        >
          This is a test message
        </Typography>
      </Stack>
      <Stack direction="row" marginTop="3rem" gap={4} alignItems="center">
        <TextField
          fullWidth
          label="fullWidth"
          id="fullWidth"
          onChange={(e) => {
            setMsg(e.target.value);
            console.log(e.target.value);
          }}
        />
        <SendIcon
          sx={{
            cursor: "pointer",
          }}
          // onClick={handleSendMessage}
        />
      </Stack>
    </Box>
  );
};

export default ChatContainer;
