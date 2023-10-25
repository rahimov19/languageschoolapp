import { Container, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Container className="faqContainer" maxWidth="false" id="faq">
      <h1>FAQ</h1>
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
                <Typography>
                  What languages do you offer at your language school?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We offer a wide range of languages, including English,
                  Russian, French, German, and sometimes others too. Contact us
                  for a full list of languages available.
                </Typography>
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
                <Typography>
                  Are your language instructors qualified and experienced?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, all our instructors are highly qualified and experienced
                  language professionals. They are native speakers and are
                  dedicated to helping you achieve your language learning goals.
                </Typography>
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
                <Typography>
                  What is the class size for your language courses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We keep our class sizes small to ensure personalized
                  attention. Classes typically up to 4 students, as well as
                  individual lessons, allowing for interactive and effective
                  learning.
                </Typography>
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
                <Typography>
                  What materials and textbooks are required for the courses?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Course materials and textbooks are typically provided as part
                  of the course fee. You may need to bring a notebook and
                  writing materials for some classes.
                </Typography>
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
