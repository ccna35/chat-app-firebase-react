import { Box, Stack, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";
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
        setMsg("");
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
    useFetchMessages(docRefId);

  if (isError) {
    console.log(errorMsg);
  }

  if (isSuccess) {
    console.log(messages);
  }

  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollIntoView();
  }, [messages]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      border="1px solid lightgray"
      padding="1rem"
      borderRadius=".25rem"
      gap={2}
    >
      <Box
        sx={{
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
          padding: "1rem 0",
          gap: "2rem",
          maxHeight: "30rem",
        }}
      >
        {messages?.map((message) => {
          console.log(message.senderId === currentUser);
          return (
            <Stack gap={1} key={message.id}>
              <Typography
                variant="p"
                component="p"
                padding=".5rem 1rem"
                bgcolor="lightgray"
                borderRadius="9999rem"
                alignSelf={
                  message.senderId === currentUser ? "self-end" : "self-start"
                }
                fontSize="0.5rem"
              >
                {message.senderId}
              </Typography>
              <Typography
                variant="p"
                component="p"
                padding=".5rem 1rem"
                bgcolor={
                  message.senderId === currentUser ? "#509eff" : "lightgray"
                }
                borderRadius="9999rem"
                alignSelf={
                  message.senderId === currentUser ? "self-end" : "self-start"
                }
                color={message.senderId === currentUser && "white"}
              >
                {message.text}
              </Typography>
            </Stack>
          );
        })}
        <div ref={ref} />
      </Box>

      <Stack direction="row" marginTop="3rem" gap={4} alignItems="center">
        <TextField
          fullWidth
          label="Say anything..."
          id="fullWidth"
          onChange={(e) => {
            setMsg(e.target.value);
            console.log(e.target.value);
          }}
          value={msg}
          onKeyDown={(e) => {
            if (e.code === "Enter") handleSendMessage();
          }}
        />
        <SendIcon
          sx={{
            cursor: "pointer",
          }}
          onClick={handleSendMessage}
        />
      </Stack>
    </Box>
  );
};

export default ChatContainer;
