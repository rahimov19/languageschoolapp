/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AboutSchool() {
  const languagePack = {
    Russian: {
      WhyPot: "Почему именно Melting Pot?",
      smallGroups: "Малые группы",
      smallGroupsP:
        "Мы предлагаем небольшие группы (не более 4 человек), чтобы уделить максимум внимания преподавателям",
      nativeSpeakers: "Носители языка",
      nativeSpeakersP:
        "Все наши преподаватели - носители языка, что позволит вам узнать все мельчайшие подробности изучаемого языка",
      creditScoring: "Кредитная система",
      creditScoringP:
        "Нет ежемесячной платы, только кредиты, которые вы можете потратить на различные виды занятий (индивидуальные, групповые или интерактивные)",
    },
    Tajik: {
      WhyPot: "Чаро Melting Pot?",
      smallGroups: "Гурӯҳҳои хурд",
      smallGroupsP:
        "Мо гурӯҳҳои хурдро (максимум 4 нафар) пешниҳод менамоем, то таваҷҷӯҳи бештари муаллимонро ҷалб кунем",
      nativeSpeakers: "Забонони модарӣ",
      nativeSpeakersP:
        "Ҳамаи муаллимони мо забони модарӣ мебошанд, ки ба шумо тамоми ҷузъиёти хурди забонро барои омӯхтан медиҳанд",
      creditScoring: "Баххои кредитӣ",
      creditScoringP:
        "Пардохти моҳона нест, танҳо кредитҳое, ки шумо метавонед барои намудҳои гуногуни дарсҳо сарф кунед (дарси инфиродӣ, дарси гурӯҳӣ ё дарси интерактивӣ)",
    },
    English: {
      WhyPot: "Why Melting Pot?",
      smallGroups: "Small groups",
      smallGroupsP:
        "We offering small groups (max 4 person) to give most of teachers attention",
      nativeSpeakers: "Native speakers",
      nativeSpeakersP:
        "All our teacher are native speakers, which will give you all small details of language to learn",
      creditScoring: "Credit scoring",
      creditScoringP:
        "No monthly fee, only credits that you can spend on different type of lessons (individual lesson, group lesson or interactive lesson)",
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  const [rerender, setRerender] = useState(true);
  useEffect(() => {
    let observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-right");
          console.log(".");
          setRerender(!rerender);
        } else {
          entry.target.classList.remove("slide-right");
          setRerender(!rerender);
        }
      });
    });
    const listRight = document.querySelectorAll(".right");
    listRight.forEach((el) => {
      observerRight.observe(el);
    });

    let observerLeft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(".");
          entry.target.classList.add("slide-left");
          setRerender(!rerender);
        } else {
          entry.target.classList.remove("slide-left");
          setRerender(!rerender);
        }
      });
    });
    const listLeft = document.querySelectorAll(".left");
    listLeft.forEach((el) => {
      observerLeft.observe(el);
    });
  }, []);

  return (
    <Container
      className="aboutSchoolContainer"
      maxWidth="false"
      id="aboutUs"
      sx={{ textAlign: { xs: "center", md: "start" } }}
    >
      <h1 className="aboutSchoolH1">{languagePack[language].WhyPot}</h1>
      <Grid container>
        <Grid xs={12} sm={12} md={6} className="right textGrid ">
          <h3>{languagePack[language].smallGroups}</h3>
          <p>{languagePack[language].smallGroupsP}</p>
        </Grid>
        <Grid xs={12} sm={12} md={6} className="right ">
          <img
            className="aboutSchoolImg"
            src="/smallGroup.jpg"
            alt="small groups in our school"
          />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          className="left slide-left "
          sx={{ order: { xs: 3, md: 2 } }}
        >
          <img
            className="aboutSchoolImg"
            src="/credit.jpg"
            alt="credit payments in our school"
          />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          className="textGrid left slide-left "
          sx={{ order: { xs: 2, md: 3 }, pr: 2 }}
        >
          <h3>{languagePack[language].nativeSpeakers}</h3>
          <p>{languagePack[language].nativeSpeakersP}</p>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          className="textGrid right"
          sx={{ order: { xs: 1, md: 2 }, pl: 2 }}
        >
          <h3>{languagePack[language].creditScoring}</h3>
          <p>{languagePack[language].creditScoringP}</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          className=" right"
          sx={{ order: { xs: 1, md: 3 } }}
        >
          <img
            className="aboutSchoolImg"
            src="/native.jpg"
            alt="native speaker teachers"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
