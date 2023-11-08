import { Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function WhatIs() {
  const languagePack = {
    Russian: {
      whatIsSchool: "Что такое языковая школа Melting Pot?",
      personalExperience: "Индивидуальный опыт обучения:",
      personalExperienceP: `"Индивидуальный подход к вашему успеху. Индивидуальное обучение языку. Индивидуальный подход к каждому студенту, индивидуальные планы занятий и отслеживание прогресса позволяют оптимизировать процесс изучения языка для достижения успеха."`,
      certifiedInstructors: "Сертифицированные преподаватели-носители языка:",
      certifiedInstructorsP: `"Учитесь у профессионалов" Предоставленная команда высококвалифицированных и сертифицированных преподавателей-носителей языка, работающих в нашей школе. Обучение у экспертов в области языка дает студентам аутентичный опыт, который выходит за рамки учебников и грамматических правил."`,
      flexibleOptions: "Гибкие варианты обучения:",
      flexibleOptionsP: `"Учитесь на своих условиях" Подчеркните гибкость ваших языковых курсов, предлагая варианты как группового, так и индивидуального обучения. Упомяните о различной продолжительности курсов и расписании, чтобы учесть особенности образа жизни и сделать изучение языка удобным для студентов в их собственном темпе"`,
    },
    Tajik: {
      whatIsSchool: "Мактаби забони Melting Pot чист?",
      personalExperience: "Таҷрибаи омӯзиши фардӣ:",
      personalExperienceP: `"Муносибати инфиродӣ ба муваффақияти шумо. Омӯзиши забони инфиродӣ. Муносибати инфиродӣ ба ҳар як донишҷӯ, нақшаҳои дарсҳои инфиродӣ ва пайгирии пешрафт ба шумо имкон медиҳанд, ки раванди омӯзиши забонро барои муваффақ шудан ба муваффақият оптимизатсия кунед."`,
      certifiedInstructors: "Муаллимони сертификатсияшудаи забони модарӣ:",
      certifiedInstructorsP: `"Аз мутахассисон омӯзед" Аз ҷониби як гурӯҳи муаллимони баландихтисос ва сертификатсияшудаи забони модарӣ, ки дар мактаби мо кор мекунанд. Омӯзиш аз мутахассисони забон ба донишҷӯён таҷрибаи аслӣ медиҳад, ки аз доираи китобҳои дарсӣ ва қоидаҳои грамматикӣ берунтар аст."`,
      flexibleOptions: "Имкониятҳои омӯзиши чандир:",
      flexibleOptionsP: `"Бо шартҳои худ омӯзед" Бо пешниҳоди имконоти омӯзиши гурӯҳӣ ва хусусӣ ба чандирии курсҳои забонии худ таъкид кунед. Давомнокии курсҳо ва ҷадвалҳои гуногуни курсҳоро барои қонеъ кардани эҳтиёҷоти тарзи зиндагӣ қайд кунед ва ба донишҷӯён бо суръати худ омӯхтани забонро осон созед."`,
    },
    English: {
      whatIsSchool: "What is Melting Pot Language School?",
      personalExperience: "Personalized Learning Experience:",
      personalExperienceP: `"Tailored to Your Success" Highlight your school's commitment to
        providing personalized language instruction. Individualized attention each student receives, custom-tailored
        lesson plans, and progress tracking to ensure their language
        learning journey is optimized for success."`,
      certifiedInstructors: "Certified Native Instructors:",
      certifiedInstructorsP: `"Learn from the Pros" Showcase your school's team of highly
        qualified and certified native-speaking instructors. Learning from experts in the language offers students an authentic,
        immersive experience that goes beyond textbooks and grammar rules."`,
      flexibleOptions: "Flexible Learning Options:",
      flexibleOptionsP: `"Learn on Your Terms" Highlight the flexibility of your language
        courses, offering options for both group and individual learning.
        Mention varied course lengths and schedules to accommodate different
        lifestyles, making it convenient for students to pursue language
        learning at their own pace."`,
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
          <img src="/individual.jpg" alt="cardImage" />
          <h4>{languagePack[language].personalExperience}</h4>
          <p>{languagePack[language].personalExperienceP}</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-2"
        >
          <img src="/native2.jpg" alt="cardImage" />
          <h4>{languagePack[language].certifiedInstructors}</h4>
          <p>{languagePack[language].certifiedInstructorsP}</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-3"
        >
          <img src="/smallGroup2.jpg" alt="cardImage" />
          <h4>{languagePack[language].flexibleOptions}</h4>
          <p>{languagePack[language].flexibleOptionsP}</p>
        </Grid>
      </Grid>
    </Container>
  );
}
