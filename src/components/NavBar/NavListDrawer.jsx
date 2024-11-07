/* eslint-disable react/prop-types */
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

export default function NavListDrawer({ navLinksArray, NavLink, setOpen }) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinksArray.map((link) => (
            <ListItem disablePadding key={link.title}>
              <ListItemButton
                component={NavLink}
                to={link.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
