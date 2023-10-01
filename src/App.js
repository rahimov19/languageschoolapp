import CssBaseline from "@mui/material/CssBaseline";
import "./sass/index.css";
import NavigationBar from "./Components/NavigationBar";
import TopBanner from "./Components/TopBanner";
import WhatIs from "./Components/WhatIs";
import AboutSchool from "./Components/AboutSchool";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";

function App() {
  return (
    <div className="App">
      <CssBaseline enableColorScheme>
        <NavigationBar />
        <TopBanner />
        <WhatIs />
        <AboutSchool />
        <Faq />
        <Footer />
      </CssBaseline>
    </div>
  );
}

export default App;
