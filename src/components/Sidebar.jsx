import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Badge, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";
import { styled } from "@mui/material/styles";

const Sidebar = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const q = query(collection(db, "activeusers"));
  //   onSnapshot(q, (querySnapshot) => {
  //     const users = [];
  //     querySnapshot.forEach((doc) => {
  //       users.push(doc.data());
  //     });
  //     console.log(users);
  //     setActiveUsers([...users]);
  //     setIsLoading(false);
  //   });

  //   //   return () => {
  //   //     unsub();
  //   //   }
  // }, []);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <Box
      border="1px solid lightgray"
      padding="1rem"
      borderRadius=".25rem"
      width="15rem"
    >
      <Stack>
        <Typography variant="h6" component="h6" marginBottom="1rem">
          Active Users
        </Typography>
        {isLoading && (
          <Typography variant="p" component="p">
            Loading...
          </Typography>
        )}

        {activeUsers?.map((user) => {
          return (
            <Box
              key={user.id}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding=".5rem 1rem"
              bgcolor="#efefef"
              borderRadius=".5rem"
              marginBottom="1rem"
            >
              <Typography variant="p" component="p">
                {`${user.firstName} ${user.lastName} `}
              </Typography>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                />
              </StyledBadge>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Sidebar;
