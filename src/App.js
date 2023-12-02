import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";
import ColorNav from "./components/ColorNav";
import Intro from "./components/Intro";
import ColorContext, { ColorProvider } from "./contexts/ColorContext";
import WhyBox from "./components/WhyBox";
import GridSection from "./components/GridSection";
import InfoBox from "./components/InfoBox";
import PlanSection from "./components/PlanSection";
import ReferancesSection from "./components/ReferancesSection";
import FASection from "./components/FASection";
import JourneySection from "./components/JourneySection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ColorProvider>
      <AppContent />
    </ColorProvider>
  );
}

function AppContent() {
  const { backgroundColor } = useContext(ColorContext);

  return (
    <div className="app-container" style={{ background: backgroundColor }}>
      <Header />
      <main style={{ paddingTop: "64px" }}>
        <Intro />
        <WhyBox />
        <GridSection />
        <InfoBox />
        <PlanSection />
        <ReferancesSection />
        <FAQSection />
        <FASection />
        <JourneySection />
        <ColorNav />
      </main>
      <Footer />
    </div>
  );
}

export default App;
