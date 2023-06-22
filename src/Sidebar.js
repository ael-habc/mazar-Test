import Accordion from "./Accordion";
import user from "./json files/user.json";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
} from "@material-tailwind/react";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./sideBar.css";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <BsLayoutTextSidebar  onClick={openDrawer} className="openButton"/>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            {user.name}
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <List>
          {user.customer_details.map((user) => (
            <Accordion user={user} id={user.id} />
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
