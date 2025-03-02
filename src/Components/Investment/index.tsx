import BgImage from "../../assets/bglogo.png";
import LeftImageBg from "../../assets/invest-image-1.png";
import { impactSectionsInvest } from "../../reusableFunction";

const InvestmentPage = () => {
  return (
    <div className="w-screen max-w-[1580px] lg:h-[950px] md:h-[1880px] bg-[#002549] flex lg:flex-row md:flex-col sm:flex-col xs:flex-col items-center">
      <div className="lg:w-[50%] md:w-full sm:w-full xs:w-full relative">
        <img
          src={BgImage}
          alt="BgImage"
          className="absolute lg:mt-[8rem] md:mt-[1rem] sm:mt-[2rem] z-40 w-full lg:h-[695px] xs:h-[450px] sm:h-full"
        />
        <div className="z-50 w-full h-full flex relative">
          <img
            src={LeftImageBg}
            alt="LeftImageBg"
            className=" w-[80%] lg:h-[765px] sm:h-[800px] md:h-[950px] xs:h-[400px] lg:ml-[6rem] sm:mx-[5rem] xs:ml-[2rem] xs:mx-[2rem] xs:mt-[2rem] md:mx-[5rem] md:mt-[4rem] sm:mt-[2rem] relative"
          />
          <div className="z-50 flex flex-col lg:gap-8 md:gap-[5rem] sm:gap-[3rem] xs:gap-[1rem] lg:ml-[5rem] md:ml-[5rem] sm:ml-[4rem] lg:mt-[16.5rem] md:mt-[23rem] sm:mt-[16rem] xs:mt-[9rem] xs:ml-[1rem] absolute">
            {impactSectionsInvest.map((point, index) => (
              <div
                key={index}
                className="lg:w-[180px] md:w-[180px] sm:w-[180px] xs:w-[100px] xs:h-[50px] sm:h-[90px] md:h-[90px]  lg:h-[90px] bg-[#002e72] shadow-2xl rounded-xl gap-2 flex items-center px-4"
              >
                <img
                  src={point.image}
                  alt={point.title}
                  className="lg:w-[40px] md:w-[40px] sm:w-[40px] xs:w-[15px] lg:h-[40px] md:h-[40px] sm:h-[40px] xs:h-[15px] mr-3"
                />
                <h2 className="text-[#fff] lg:text-[16px] md:text-[16px] sm:text-[16px] xs:text-[8px] font-['Poppins'] font-medium">
                  {point.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-[50%] lg:pr-[3rem] md:w-full sm:w-full xs:w-full md:px-[6rem] xs:px-[2rem] xs:py-[2rem] sm:px-[4rem] sm:my-[3rem] md:my-[4rem] h-full lg:pt-[8rem] lg:pl-[1rem]">
        <h1 className="font-['Lato'] font-bold lg:text-[40px] md:text-[40px] sm:text-[35px] xs:text-[22px] text-[#fff]">
          What we do at a high level
        </h1>
        <p className="w-full lg:pr-[2rem] lg:text-[18px] md:text-[18px] sm:text-[17px] xs:text-[12px] font-normal text-[#fff] mt-[1rem]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>

        <div className="flex flex-col gap-4 mt-6 lg:pr-[1rem]">
          {impactSectionsInvest.map((section, index) => (
            <div
              key={index}
              className="bg-[#fff] rounded-xl w-full  lg:h-[120px] md:h-[120px] sm:h-[120px] xs:h-[90px] flex items-center p-4 shadow-lg"
            >
              <img
                src={section.image}
                alt={section.title}
                className="lg:w-[60px] md:w-[60px] sm:w-[60px] xs:w-[30px] lg:h-[60px] md:h-[60px] sm:h-[60px] xs:h-[30px] mr-4"
              />
              <div>
                <h1 className="text-[#002e72] font-['Inter'] font-semibold lg:text-[24px] md:text-[24px] sm:text-[24px] xs:text-[16px]">
                  {section.title}
                </h1>
                <p className="font-['Inter'] font-medium lg:text-[16px] md:text-[16px] sm:text-[16px] xs:text-[10px] mt-1">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPage;
