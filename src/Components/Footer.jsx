import { Button, Container, Grid } from "@mui/material";
import React from "react";
import Confidiality from "./Confidiality";
import { useSelector } from "react-redux";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const languagePack = {
    Russian: {
      quote:
        "Мы стремимся помочь вам открыть мир возможностей благодаря владению языком. Присоединяйтесь к нам на пути к свободному владению языком и ощутите преобразующую силу общения",
      company: "Компания",
      aboutUs: "О нас",
      ourValues: "Наши ценности",
      languages: "Языки",
      russian: "Русский",
      english: "English",
      german: "Немецкий",
      tajik: "Таджикский",
      french: "Французский",
      interested: "Заинтересованы?",
      pricing: "Цены",
      faq: "Часто задаваемые вопросы",
      becomeATeacher: "Стать преподавателем",
      contactUs: "Свяжитесь с нами:",
      callus: "Позвоните нам: +992982700005",
      emailUs: "Напишите нам: meltingpot.school@gmail.com",
      address: "Рудаки пр. 127 (Рудаки Плаза) 5 этаж. 734003 Душанбе",
      followUs: "Присоединяйтесь к нам в социальных сетях:",
    },
    Tajik: {
      quote:
        "Мо ӯҳдадор ҳастем, ки ба шумо дар кушодани ҷаҳони имкониятҳо тавассути донистани забон кӯмак расонем. Дар саёҳати озодии забон ба мо ҳамроҳ шавед ва қудрати табдилдиҳандаи муоширатро эҳсос кунед",
      company: "Ширкат",
      aboutUs: "Дар бораи мо",
      ourValues: "Арзишҳои мо",
      languages: "Забонҳо",
      tajik: "Тоҷики",
      russian: "Русӣ",
      english: "Англисӣ",
      german: "Олмонӣ",
      french: "Фаронсавӣ",
      interested: "Манфиатдоред?",
      pricing: "Нархҳо",
      faq: "Саволҳои зуд-зуд додашаванда",
      becomeATeacher: "Муаллим шудан",
      contactUs: "Бо мо тамос гиред:",
      callus: "Ба мо занг занед: +992982700005",
      emailUs:
        "Ба мо почтаи электронӣ ирсол кунед: meltingpot.school@gmail.com",
      address: "Хиёбони Рӯдакӣ 127 (Рӯдакӣ Плаза) ошёнаи 5. 734003 Душанбе",
      followUs: "Дар шабакаҳои иҷтимоӣ ба мо ҳамроҳ шавед:",
    },
    English: {
      quote:
        "We're dedicated to helping you unlock a world of opportunities through language mastery. Join us in your journey to language fluency and experience the transformative power of communication.",
      company: "Company",
      aboutUs: "About Us",
      ourValues: "Our values",
      languages: "Languages",
      russian: "Russian",
      english: "English",
      tajik: "Tajik",
      german: "German",
      french: "French",
      interested: "Interested?",
      pricing: "Pricing",
      faq: "FAQ",
      becomeATeacher: "Become a teacher",
      contactUs: "Contact Us:",
      callus: "Call us: +992982700005",
      emailUs: "Email us: meltingpot.school@gmail.com",
      address: "Rudaki ave. 127 (Rudaki Plaza) 5th Floor. 734003 Dushanbe",
      followUs: "Follow us on social media:",
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  return (
    <Container
      className="footerContainer"
      maxWidth="false"
      id="footer"
      sx={{ textAlign: { xs: "center", md: "start" } }}
    >
      <Grid container>
        <Grid xs={12} className="logoFooter">
          <img src="/logo.png" alt="melting pot logo" />
        </Grid>
        <Grid xs={12} md={4} lg={4}>
          <p>{languagePack[language].quote}</p>
        </Grid>
        <Grid xs={12} md={4} xl={2} className="footerMenu">
          <div>
            <h4> {languagePack[language].company}</h4>{" "}
            <a href="#whatIs"> {languagePack[language].aboutUs}</a>{" "}
            <a href="#aboutUs"> {languagePack[language].ourValues}</a>
          </div>
        </Grid>
        <Grid xs={12} md={4} xl={2} className="footerMenu">
          <div>
            <h4> {languagePack[language].languages}</h4>{" "}
            <a href="#topBanner"> {languagePack[language].russian}</a>{" "}
            <a href="#topBanner"> {languagePack[language].english}</a>{" "}
            <a href="#topBanner"> {languagePack[language].german} </a>{" "}
            <a href="#topBanner"> {languagePack[language].french}</a>
            <a href="#topBanner"> {languagePack[language].tajik}</a>
          </div>
        </Grid>
        <Grid xs={12} md={4} xl={2} className="footerMenu">
          <div>
            <h4> {languagePack[language].interested}</h4>{" "}
            <a href="#pricing"> {languagePack[language].pricing}</a>{" "}
            <a href="#faq"> {languagePack[language].faq}</a>{" "}
          </div>
        </Grid>
        <Grid xs={12} md={4} xl={2} className="footerMenu">
          <div>
            <h4> {languagePack[language].contactUs}</h4>{" "}
            <a href="tel:+992982700005">
              {" "}
              <LocalPhoneIcon fontSize="small" />
              <TelegramIcon fontSize="small" />
              <WhatsAppIcon fontSize="small" />
              +992982700005
            </a>
            <a href="mailto:meltingpot.school@gmail.com">
              <EmailIcon fontSize="small" /> meltingpot.school@gmail.com
            </a>{" "}
          </div>
          {/* <Button className="bn5" sx={{ mt: 2 }}>
            {languagePack[language].becomeATeacher}
          </Button> */}
        </Grid>
        <Grid xs={12} md={6} lg={4} mt={2}>
          {languagePack[language].address}
        </Grid>
        <Grid xs={12} md={6} lg={4} mt={2}>
          <Confidiality />
        </Grid>
        <Grid xs={12} md={6} lg={4} mt={2}>
          <h5> {languagePack[language].followUs}</h5>
          <a
            className="socialLink"
            href="https://www.instagram.com/meltingpotschool/"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
              alt="instagram logo"
              className="footerSocialLogo"
            />
          </a>
          <a
            className="socialLink"
            href="https://www.facebook.com/profile.php?id=61553072304789"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              alt="facebook logo"
              className="footerSocialLogo"
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}
