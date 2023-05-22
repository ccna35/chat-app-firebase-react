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
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/config";

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      console.log(users);
      setUsers([...users]);
      setIsLoading(false);
    });

    //   return () => {
    //     unsub();
    //   }
  }, []);

  // if (isLoading) {
  //   return (
  //     <Typography variant="p" component="p">
  //       Loading...
  //     </Typography>
  //   );
  // }

  return (
    <Box
      border="1px solid lightgray"
      padding="1rem"
      borderRadius=".25rem"
      width="15rem"
    >
      <Stack>
        <Typography variant="h6" component="h6">
          Active Users
        </Typography>
        {isLoading && (
          <Typography variant="p" component="p">
            Loading...
          </Typography>
        )}
        {users?.map((user) => {
          return (
            <Typography variant="p" component="p" key={user.id}>
              {`${user.firstName} ${user.lastName} `}
            </Typography>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Sidebar;
