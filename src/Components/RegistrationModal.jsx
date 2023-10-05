import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function RegistrationModal() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitHandle = () => {
    console.log({ name, surname, age, selectedLanguage });
    handleClose();
  };
  let theme = createTheme({});
  theme = createTheme(theme, {
    palette: {
      salmon: theme.palette.augmentColor({
        color: {
          main: "#2e31f5e2",
        },
        name: "salmon",
      }),
      fish: theme.palette.augmentColor({
        color: {
          main: "#000000",
        },
        name: "fish",
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <button className="bn29" onClick={handleClickOpen}>
          Start Learning
        </button>
        <BootstrapDialog
          className="modalBox"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Registration Form
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Box className="formBox">
              <TextField
                color="fish"
                required
                fullWidth
                id="outlined-required"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box className="formBox">
              <TextField
                color="fish"
                fullWidth
                required
                id="outlined-required"
                label="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />{" "}
            </Box>
            <Box className="formBox">
              {" "}
              <TextField
                color="fish"
                required
                fullWidth
                id="outlined-required"
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Box>
            <Box className="formBox">
              <FormControl fullWidth color="fish">
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedLanguage}
                  label="Language"
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"Russian"}>Russian</MenuItem>
                  <MenuItem value={"German"}>German</MenuItem>
                  <MenuItem value={"French"}>French</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="formBox">
              {" "}
              <FormControl fullWidth color="fish">
                <InputLabel id="demo-simple-select-label">Level</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={level}
                  label="Level"
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <MenuItem value={"A1"}>A1</MenuItem>
                  <MenuItem value={"A2"}>A2</MenuItem>
                  <MenuItem value={"B1"}>B1</MenuItem>
                  <MenuItem value={"B2"}>B2</MenuItem>
                  <MenuItem value={"C1"}>C1</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              className="bn29"
              autoFocus
              onClick={submitHandle}
              sx={{ m: 1 }}
            >
              Sumbit Application
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </>
    </ThemeProvider>
  );
}
