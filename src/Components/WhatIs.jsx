import { Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function WhatIs() {
  const languagePack = {
    Russian: {
      whatIsSchool: "Что такое языковая школа Melting Pot?",
      personalExperience: "Индивидуальный опыт обучения:",
      personalExperienceP: `"Индивидуальный подход к вашему успеху." Помимо индивидуальных занятий, обычные занятия проходят в формате "4 ученика - 1 учитель" позволяет начать говорить на языке спустя несколько уроков.`,
      certifiedInstructors: "Сертифицированные преподаватели-носители языка:",
      certifiedInstructorsP: `"Учитесь у профессионалов" Специально приглашенные сертифицированные учителя-носители языка помогут преодолеть все сложности изучения нового языка.`,
      flexibleOptions: "Гибкие варианты обучения:",
      flexibleOptionsP: `"Учитесь на своих условиях" Мы открыты с 10:00 до 22:00, что позволяет вам посещать занятия в удобное вам время, не отрываясь от важных дел`,
    },
    Tajik: {
      whatIsSchool: "Мактаби забони Melting Pot чист?",
      personalExperience: "Таҷрибаи омӯзиши фардӣ:",
      personalExperienceP: `"Муносибати инфиродӣ ба муваффақияти шумо." Илова ба дарсҳои инфиродӣ, дарсҳои муқаррарӣ дар формати «4 донишҷӯ - 1 муаллим» гузаронида мешаванд, ки имкон медиҳад, ки пас аз чанд дарс ба забон гуфтан оғоз кунед.`,
      certifiedInstructors: "Муаллимони сертификатсияшудаи забони модарӣ:",
      certifiedInstructorsP: `"Аз мутахассисон омӯзед" Муаллимони махсус даъватшудаи забони модарии сертификатсияшуда ба шумо дар бартараф кардани тамоми душвориҳои омӯзиши забони нав кӯмак хоҳанд кард.`,
      flexibleOptions: "Имкониятҳои омӯзиши чандир:",
      flexibleOptionsP: `"Бо шартҳои худ омӯзед" Мо аз соати 10:00 то 22:00 кушодаем, ки ба шумо имкон медиҳад, ки дар вақти бароятон қулай бидуни халалдор кардани масъалаҳои муҳим ба дарсҳо ҳозир шавед."`,
    },
    English: {
      whatIsSchool: "What is Melting Pot Language School?",
      personalExperience: "Personalized Learning Experience:",
      personalExperienceP: `"A personalized approach to your success." In addition to individualized lessons, regular classes are held in a "4 students - 1 teacher" format allowing you to start speaking the language after a few lessons.`,
      certifiedInstructors: "Certified Native Instructors:",
      certifiedInstructorsP: `"Learn from the Professionals" Specially invited certified native speaker teachers will help you overcome all the challenges of learning a new language.`,
      flexibleOptions: "Flexible Learning Options:",
      flexibleOptionsP: `Learn on your own terms" We are open from 10:00 am to 10:00 pm, allowing you to attend classes at your convenience without taking time away from important business`,
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  return (
    <Container
      maxWidth="false"
      className="whatIsContainer"
      id="whatIs"
      sx={{ textAlign: { xs: "center", md: "start" } }}
    >
      <h1>{languagePack[language].whatIsSchool}</h1>
      <Grid container spacing={2}>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-1"
        >
          <img src="/individual.jpg" alt="individual lessons" />
          <h2>{languagePack[language].personalExperience}</h2>
          <p>{languagePack[language].personalExperienceP}</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-2"
        >
          <img src="/native2.jpg" alt="native speaker teachers" />
          <h2>{languagePack[language].certifiedInstructors}</h2>
          <p>{languagePack[language].certifiedInstructorsP}</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-3"
        >
          <img src="/smallGroup2.jpg" alt="small groups" />
          <h2>{languagePack[language].flexibleOptions}</h2>
          <p>{languagePack[language].flexibleOptionsP}</p>
        </Grid>
      </Grid>
    </Container>
  );
}
