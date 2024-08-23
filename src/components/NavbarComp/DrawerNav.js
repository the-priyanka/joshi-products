import React, { useState } from "react";
import { links } from "../../data";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Call } from "@mui/icons-material";

const DrawerNav = () => {
  const { activeNav, handleLinks, navbar } = useGlobalContext();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "-webkit-fill-available",
            padding: "33px 0",
          }}
        >
          <List>
            {links.map((link) => {
              const { id, url, text, icon } = link;
              return (
                <ListItemButton key={id}>
                  <ListItemIcon>
                    <ListItemText>
                      <Link
                        to={url}
                        onClick={() => handleLinks(url)}
                        className={
                          activeNav === `${url}`
                            ? "item active"
                            : "item itemActive"
                        }
                      >
                        {icon} {"  "} {text}
                      </Link>
                    </ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              );
            })}
          </List>
          <Container
            style={{
              paddingLeft: "15px",
              position: "relative",
              bottom: "0",
            }}
          >
            <Typography className="primaryTextColor" variant="h6">
              For Trade Enquiry <Call />
            </Typography>
            <Typography variant="body1">09669000006</Typography>
            <Typography variant="body1">08959595939</Typography>
          </Container>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon
          style={{
            color: navbar ? "black" : "white",
          }}
        />
      </IconButton>
    </>
  );
};

export default DrawerNav;
