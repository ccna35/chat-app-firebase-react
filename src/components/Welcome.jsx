import { Box, Stack, TextField, Typography } from "@mui/material";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const Welcome = () => {
  return (
    <Box
      padding="1rem"
      borderRadius=".25rem"
      bgcolor="#edebeb"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      flexGrow={1}
      gap={5}
    >
      <Stack direction="row" gap={1} justifyContent="center" textAlign="center">
        <Typography
          variant="h2"
          component="h2"
          borderRadius="9999rem"
          fontSize="2rem"
          fontWeight="400"
        >
          Welcome to the Chat App
        </Typography>
        <img
          src="./grinning-face-with-big-eyes-svgrepo-com.svg"
          loading="lazy"
          width="50"
        />
      </Stack>
      <Typography
        variant="h4"
        component="h4"
        // padding=".5rem 1rem"
        borderRadius="9999rem"
        fontSize="1rem"
      >
        Click on any user on the left side to start chatting...
      </Typography>
    </Box>
  );
};

export default Welcome;
