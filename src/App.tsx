import "./App.css";
import HomePage from "./Components/Home";
import AboutPage from "./Components/About";
import InvestmentPage from "./Components/Investment";
import ImpactPage from "./Components/Impact";
import NewsPage from "./Components/News";
import Cards from "./Components/Cards";
import ContactUs from "./Components/ContactUs";
import { Upcard } from "./Components/Up/upCard";

function App() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Investment", id: "investment" },
    { name: "Impact Industry Building", id: "impact-industry" },
    { name: "News & Insights", id: "news-insights" },
  ];

  return (
    <div className="w-screen max-w-[1580px] h-full relative flex flex-col items-center justify-center !bg-white m-auto">
      <div
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
        onClick={() => {
          const section = document.getElementById("home");
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      >
        <Upcard />
      </div>

      <HomePage navItems={navItems} />

      <div className="lg:mt-[-6rem] md:mt-[-4rem] sm:mt-[-4rem] xs:mt-[-4rem] z-40 w-full">
        <Cards />
      </div>

      <section id="about">
        <AboutPage />
      </section>
      <section id="investment">
        <InvestmentPage />
      </section>
      <section id="impact-industry">
        <ImpactPage />
      </section>
      <section id="news-insights">
        <NewsPage />
      </section>
      <section id="contactUs">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;
