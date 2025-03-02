import React, { useState } from "react";
import Image from "../../assets/Background.png";
import Logo from "../../assets/appLogo.png";
import LogoLine from "../../assets/appLogoLine.png";
import {
  IoIosArrowDown,
  IoIosMenu,
  IoIosClose,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";

interface NavItem {
  name: string;
  id: string;
}

interface HomePageProps {
  navItems: NavItem[];
}

const HomePage: React.FC<HomePageProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [investmentDropdownOpen, setInvestmentDropdownOpen] = useState(false);
  const [impactDropdownOpen, setImpactDropdownOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
      setInvestmentDropdownOpen(false);
      setImpactDropdownOpen(false);
    }
  };

  const goBack = () => {
    setInvestmentDropdownOpen(false);
    setImpactDropdownOpen(false);
  };
  return (
    <div
      id="home"
      className="w-full max-w-[1580px] lg:h-[900px] md:h-[650px] sm:h-[500px] xs:h-[400px] bg-cover bg-center relative"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 46, 114, 0.7), rgba(0, 46, 114, 0)), 
          linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), 
          url(${Image})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="flex flex-row lg:px-[6rem] md:px-[4rem] sm:px-[2rem] xs:px-[2rem] xs:py-[1rem] lg:py-[2rem] md:py-[1rem] sm:py-[0.5rem] justify-between border-b-[#6c6c6c] border-[0.5px]">
        <div id="title" className="flex flex-row gap-3 items-center">
          <div className="flex relative">
            <img src={Logo} alt="Logo" className="w-[35px] h-[35px]" />
            <div className="absolute mt-4 ml-1 leading-2">
              <img
                src={LogoLine}
                alt="LogoLine"
                className="w-[12px] h-[12px]"
              />
            </div>
            <div className="absolute mt-5 ml-[7px] leading-2">
              <img
                src={LogoLine}
                alt="LogoLine"
                className="w-[12px] h-[12px]"
              />
            </div>
          </div>
          <h1 className="lg:text-[24px] md:text-[20px] sm:text-[16px] text-[#ffffff] font-semibold">
            IMPACTABLE
          </h1>
        </div>
        <button
          id="contact"
          onClick={() => handleScroll("contactUs")}
          className={`lg:w-[135px] md:w-[115px] sm:-[90px] lg:h-[45px] md:h-[45px] sm:h-[35px] bg-[#0090ff] text-[#fff] text-[14px] rounded-xl xs:hidden lg:flex md:flex sm:hidden items-center justify-center`}
        >
          Contact Us
        </button>

        <div id="headingButton" className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            {isMenuOpen ? (
              <IoIosClose className="w-[30px] h-[30px]" />
            ) : (
              <IoIosMenu className="w-[30px] h-[30px]" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-[#fff] flex flex-col sm:py-[2rem] xs:pb-[2rem] items-start gap-4 z-50">
          {/* Hide main menu when a dropdown is open */}
          {!investmentDropdownOpen && !impactDropdownOpen ? (
            <>
              {navItems.map((item) => (
                <div key={item.id} className="w-full">
                  <button
                    onClick={() => {
                      if (item.id === "investment") {
                        setInvestmentDropdownOpen(true);
                        setImpactDropdownOpen(false);
                      } else if (item.id === "impact-industry") {
                        setImpactDropdownOpen(true);
                        setInvestmentDropdownOpen(false);
                      } else {
                        handleScroll(item.id);
                      }
                    }}
                    className="text-black text-lg py-2 font-['Inter'] w-full flex items-center justify-between font-normal text-[14px] hover:text-[#0090ff] transition-all px-[2rem]"
                  >
                    {item.name}
                    {["investment", "impact-industry"].includes(item.id) && (
                      <IoIosArrowForward className="text-[#222] text-lg" />
                    )}
                  </button>
                </div>
              ))}
            </>
          ) : (
            <>
              <button
                onClick={goBack}
                className="text-[#fff] bg-[#00428b] px-[2rem] h-[50px] gap-2 text-lg py-2 font-['Inter'] w-full flex items-center justify-start font-normal text-[14px] hover:text-[#fff] transition-all"
              >
                <IoIosArrowBack />
                Back
              </button>

              {investmentDropdownOpen && (
                <div className="w-full">
                  {[
                    { name: "Investment", id: "investment-main" },
                    { name: "Why Impactable?", id: "why-impactable" },
                    {
                      name: "Impactable EM Products",
                      id: "impactable-products",
                    },
                  ].map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleScroll(subItem.id)}
                      className="w-full text-left px-6 py-2 text-black hover:bg-gray-100 flex items-center justify-between"
                    >
                      {subItem.name}
                      <IoIosArrowForward className="text-gray-600" />
                    </button>
                  ))}
                </div>
              )}

              {impactDropdownOpen && (
                <div className="w-full">
                  {[
                    { name: "Impact Industry Building", id: "impact-building" },
                    { name: "Impactable Network", id: "impactable-network" },
                    {
                      name: "Impactable Technical Assistance",
                      id: "impactable-assistance",
                    },
                  ].map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => handleScroll(subItem.id)}
                      className="w-full text-left px-6 py-2 text-black hover:bg-gray-100 flex items-center justify-between"
                    >
                      {subItem.name}
                      <IoIosArrowForward className="text-gray-600" />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          <button
            onClick={() => handleScroll("contactUs")}
            className="lg:w-[135px] md:w-[115px] sm:w-[340px] xs:w-[300px] xs:mx-[1rem] lg:h-[45px] md:h-[45px] sm:h-[40px] xs:h-[40px] xs bg-[#0090ff] text-[#fff] lg:text-[14px] md:text-[13px] sm:text-[12px] xs:text-[12px] rounded-xl lg:flex md:flex items-center justify-center"
          >
            Contact Us
          </button>
        </div>
      )}

      <div className="hidden md:flex items-center lg:gap-7 md:gap-7 sm:gap-5 lg:ml-[6rem] md:ml-[5rem] sm:ml-[4rem]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="text-white px-1 py-2 font-medium hover:border-t-[3px] hover:font-bold hover:border-[#0090ff] hover:text-[#0090ff] transition-all font-['Inter] flex items-center lg:text-[16px] md:text-[14px] sm:text-[12px]"
          >
            {item.name}
            {["impact-industry", "investment"].includes(item.id) && (
              <IoIosArrowDown
                className="ml-2 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("hello");
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div
        id="homeTitle"
        className="lg:ml-[6rem] md:ml-[5rem] sm:ml-[3rem] xs:ml-[2rem] lg:mt-[7rem] md:mt-[6rem] sm:mt-[4rem] xs:mt-[2rem]"
      >
        <h1 className="lg:text-[80px] md:text-[50px] sm:text-[30px] xs:text-[20px] xs:mt-[3rem] font-bold font-['Lato'] lg:w-[720px] md:w-[600px] sm:w-[400px] xs:w-[180px] text-[#ffffff]">
          Scale up your Impact Investment
        </h1>
        <h3 className="font-['Inter] text-[#ffffff] mt-[2rem] lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[10px] font-normal">
          Impactable provides impact investing solutions at institutional scale
        </h3>
        <button className="bg-[#0090FF] lg:w-[230px] md:w-[200px] sm:w-[170px] xs:w-[140px] xs:h-[35px] md:h-[45px] sm:h-[40px] lg:h-[45px] mt-[2.5rem] rounded-md text-[#fff] xs:text-[12px]">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default HomePage;
