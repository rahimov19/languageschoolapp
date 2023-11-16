import React, { useState } from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function RegistrationModal() {
  const languagePack = {
    Russian: {
      startLearning: "Начать обучение",
      registrationForm: "Форма регистрации",
      submitApplication: "Отправить заявку",
      name: "Имя",
      surname: "Фамилия",
      age: "Возраст",
      selectedLanguage: "Выбранный язык",
      level: "Уровень",
      email: "Электронная почта",
      english: "Английский",
      russian: "Русский",
      tajik: "Таджикский",
      german: "Немецкий",
      french: "Французский",
    },
    Tajik: {
      startLearning: "Омӯзишро оғоз кунед",
      registrationForm: "Шакли бақайдгирӣ",
      submitApplication: "Пешниход кардани ариза",
      name: "Ном",
      surname: "Насаб",
      age: "Синну сол",
      selectedLanguage: "Забони интихобшуда",
      level: "Сатҳ",
      email: "Почтаи электронӣ",
      english: "Англисй",
      russian: "Русй",
      tajik: "Тоҷики",
      german: "Олмонй",
      french: "Фаронсавй",
    },
    English: {
      startLearning: "Start Learning",
      registrationForm: "Registration Form",
      submitApplication: "Sumbit Application",
      name: "Name",
      surname: "Surname",
      age: "Age",
      selectedLanguage: "Selected Language",
      level: "Level",
      email: "Email",
      english: "English",
      russian: "Russian",
      tajik: "Tajik",
      german: "German",
      french: "French",
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitHandle = () => {
    console.log({ name, surname, age, selectedLanguage, level, email });
    sendEmail();
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
  const sendEmail = async () => {
    const form = { name, surname, age, selectedLanguage, level, email };
    const res = await emailjs.send(
      "service_2xifqab",
      "template_8npbce9",
      form,
      "EtpBk6vRqgypts-Z4"
    );
    if (res.status === 200) {
      console.log(res);
    } else {
      console.log("Something went wrong!");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <button className="bn5" onClick={handleClickOpen}>
          {languagePack[language].startLearning}
        </button>
        <BootstrapDialog
          className="modalBox"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {languagePack[language].registrationForm}
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
                label={languagePack[language].name}
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
                label={languagePack[language].surname}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />{" "}
            </Box>
            <Box className="formBox">
              <TextField
                color="fish"
                required
                fullWidth
                id="outlined-required"
                label={languagePack[language].email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box className="formBox">
              {" "}
              <TextField
                color="fish"
                required
                fullWidth
                id="outlined-required"
                label={languagePack[language].age}
                value={age}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/;

                  if (e.target.value === "" || re.test(e.target.value)) {
                    setAge(e.target.value);
                  }
                }}
              />
            </Box>
            <Box className="formBox">
              <FormControl fullWidth color="fish">
                <InputLabel id="demo-simple-select-label">
                  {languagePack[language].selectedLanguage}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedLanguage}
                  label={languagePack[language].selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <MenuItem value={"English"}>
                    {languagePack[language].english}
                  </MenuItem>
                  <MenuItem value={"Russian"}>
                    {languagePack[language].russian}
                  </MenuItem>
                  <MenuItem value={"German"}>
                    {languagePack[language].german}
                  </MenuItem>
                  <MenuItem value={"French"}>
                    {languagePack[language].french}
                  </MenuItem>
                  <MenuItem value={"French"}>
                    {languagePack[language].tajik}
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="formBox">
              {" "}
              <FormControl fullWidth color="fish">
                <InputLabel id="demo-simple-select-label">
                  {languagePack[language].level}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={level}
                  label={languagePack[language].level}
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
              {languagePack[language].submitApplication}
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </>
    </ThemeProvider>
  );
}
