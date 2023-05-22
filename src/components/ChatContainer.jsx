import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ChatContainer = () => {
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
    </Box>
  );
};

export default ChatContainer;
