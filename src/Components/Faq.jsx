import { Container, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(50, 50, 240, .5)",
}));

export default function Faq() {
  const languagePack = {
    Russian: {
      FAQ: " ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
      q1: "Какие языки вы предлагаете в своей языковой школе?",
      a1: "Мы предлагаем широкий спектр языков, включая английский, русский, французский, немецкий, а иногда и другие. Свяжитесь с нами, чтобы получить полный список предлагаемых языков",
      q2: "Являются ли ваши преподаватели квалифицированными и опытными?",
      a2: "Да, все наши преподаватели - высококвалифицированные и опытные специалисты в области иностранных языков. Они являются носителями языка и стремятся помочь вам достичь ваших целей в изучении языка",
      q3: "Каков размер группы на ваших языковых курсах?",
      a3: "Мы поддерживаем небольшой размер класса, чтобы обеспечить индивидуальный подход. В классах обычно бывает до 4 студентов, а также проводятся индивидуальные занятия, что обеспечивает интерактивное и эффективное обучение.",
      q4: "Какие материалы и учебники необходимы для изучения курсов?",
      a4: "Материалы и учебники обычно предоставляются в рамках оплаты курса. На некоторые занятия вам может потребоваться принести тетрадь и письменные принадлежности",
    },
    Tajik: {
      FAQ: "Саволхои мепурсидаги",
      q1: "Шумо дар мактаби забоншиносии худ кадом забонҳоро пешниҳод мекунед?",
      a1: "Мо доираи васеи забонҳоро пешниҳод мекунем, аз ҷумла англисӣ, русӣ, фаронсавӣ, олмонӣ ва баъзан дигарон низ. Барои гирифтани рӯйхати пурраи забонҳои дастрас бо мо тамос гиред.",
      q2: "Оё устодони забони шумо соҳибихтисос ва ботаҷрибаанд?",
      a2: "Бале, ҳамаи омӯзгорони мо мутахассисони баландихтисос ва ботаҷрибаи забон мебошанд. Онҳо забони модарӣ мебошанд ва барои расидан ба ҳадафҳои омӯзиши забонатон кӯмак мекунанд.",
      q3: "Ҳаҷми синф барои курсҳои забони шумо чанд аст?",
      a3: "Мо андозаи синфҳои худро хурд нигоҳ медорем, то таваҷҷӯҳи шахсиро таъмин кунем. Синфҳо одатан то 4 донишҷӯ, инчунин дарсҳои инфиродӣ, ки барои омӯзиши интерактивӣ ва муассир имкон медиҳанд.",
      q4: "Барои курсҳо кадом мавод ва китобҳои дарсӣ лозиманд?",
      a4: "Маводҳои курсӣ ва китобҳои дарсӣ маъмулан ҳамчун як қисми пардохти курс таъмин карда мешаванд. Шояд шумо лозим меояд, ки барои баъзе дарсҳо дафтар ва маводи хаттӣ биёред.",
    },
    English: {
      FAQ: "FAQ",
      q1: "What languages do you offer at your language school?",
      a1: "We offer a wide range of languages, including English, Russian, French, German, and sometimes others too. Contact us for a full list of languages available.",
      q2: "Are your language instructors qualified and experienced?",
      a2: "Yes, all our instructors are highly qualified and experienced language professionals. They are native speakers and are dedicated to helping you achieve your language learning goals.",
      q3: "What is the class size for your language courses?",
      a3: "We keep our class sizes small to ensure personalized attention. Classes typically up to 4 students, as well as individual lessons, allowing for interactive and effective learning.",
      q4: "What materials and textbooks are required for the courses?",
      a4: "Course materials and textbooks are typically provided as part of the course fee. You may need to bring a notebook and writing materials for some classes.",
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Container
      className="faqContainer"
      maxWidth="false"
      id="faq"
      sx={{ textAlign: { xs: "center", md: "start" } }}
    >
      <h1>{languagePack[language].FAQ}</h1>
      <Grid container>
        <Grid xs={12} md={6}>
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                className={
                  expanded === "panel1" ? "accordeonTop" : "accordeonTopClosed"
                }
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>{languagePack[language].q1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{languagePack[language].a1}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                className={
                  expanded === "panel2" ? "accordeonTop" : "accordeonTopClosed"
                }
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>{languagePack[language].q2}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{languagePack[language].a2}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                className={
                  expanded === "panel3" ? "accordeonTop" : "accordeonTopClosed"
                }
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>{languagePack[language].q3}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{languagePack[language].a3}</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                className={
                  expanded === "panel4" ? "accordeonTop" : "accordeonTopClosed"
                }
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>{languagePack[language].q4}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{languagePack[language].a4}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 2, md: 0 },
            width: { xs: 100, md: 1 / 2, lg: 100 },
          }}
        >
          <img
            src="https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2022/portrait-of-female-teacher-in-classroom.png"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
}
