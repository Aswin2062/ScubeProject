import Logo from "../../assets/appLogo.png";
import LogoLine from "../../assets/appLogoLine.png";
import { IoArrowUpOutline } from "react-icons/io5";
import { impactSections } from "../../reusableFunction";

const ImpactPage = () => {
  return (
    <div className="w-screen max-w-[1580px] h-full bg-[#f8fafc] py-[7rem]">
      <h1 className="font-['Lato'] font-bold lg:text-[40px] md:text-[30px] sm:text-[25px] xs:text-[22px] text-[#002e72] lg:ml-[6rem] md:mx-[6rem] sm:mx-[4rem] xs:mx-[3rem]">
        Capital growth that benefits people and planet
      </h1>

      <div className="flex flex-col gap-[8rem] mt-[3rem]">
        {impactSections.map((section, index) => (
          <div
            key={index}
            className={`flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-[3.8rem] ${
              section.switchLayout ? "lg:flex-row-reverse  " : ""
            }`}
          >
            <div
              className={` xs:w-full h-full relative ${
                section.switchLayout
                  ? "lg:mr-[6rem] lg:w-[35%]"
                  : " lg:ml-[6rem] lg:w-[30%] "
              }`}
            >
              <div
                className="lg:w-full h-[550px] lg:mx-1 md:mx-[12rem] sm:mx-[11rem] xs:mx-[2rem] justify-center items-center flex flex-col relative rounded-2xl shadow-lg"
                style={{ backgroundColor: section.bgColor }}
              >
                <img
                  src={section.bgImage}
                  alt="BgImage"
                  className="absolute z-10 w-full lg:px-[2rem] md:px-[4rem] sm:px-[2rem] xs:px-[3rem] "
                />

                <div className="flex flex-row gap-2 items-center lg:w-full lg:mt-[2rem] justify-center relative z-50">
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
                  <div className="flex flex-col leading-8">
                    <h1 className="lg:text-[34px] text-[#ffffff] font-semibold pt-4">
                      IMPACTABLE
                    </h1>
                    <h3 className="text-[18px] text-[#ffffff] text-end font-semibold">
                      {section.title.split(" ")[1]}
                    </h3>
                  </div>
                </div>
                <img
                  src={section.image}
                  alt={section.title}
                  className="lg:w-full lg:h-[450px] lg:px-[2.5rem] relative z-50"
                />
              </div>
            </div>
            <div
              className={` md:w-full sm:w-full xs:w-full md:px-[4rem] sm:px-[4rem] xs:px-[4rem] ${
                section.switchLayout
                  ? " lg:w-[65%] lg:ml-[2rem]"
                  : " lg:w-[65%]"
              }`}
            >
              <h4 className="text-[#0764bf] font-['Inter'] font-medium text-[16px]">
                {section.title}
              </h4>
              <h1 className="font-['Lato'] font-semibold lg:text-[36px] text-[#002e72] mt-[2rem]">
                {section.heading}
              </h1>
              <p
                className={`text-[16px] text-[#333] leading-6 w-full lg:pr-[7rem] ${
                  section.description.includes("<div>") ? "mt-1" : "mt-[1rem]"
                }`}
                dangerouslySetInnerHTML={{
                  __html: section.description.replace(
                    /<br\s*\/?>/g,
                    "<br><br>"
                  ),
                }}
              ></p>

              <div className="flex flex-row items-center gap-2 mt-[2rem]">
                <a
                  href="#"
                  className="underline text-[16px] font-semibold font-['Inter'] text-[#0090ff]"
                >
                  Learn More
                </a>
                <IoArrowUpOutline className="text-[#0090ff] text-[20px] rotate-45" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactPage;
