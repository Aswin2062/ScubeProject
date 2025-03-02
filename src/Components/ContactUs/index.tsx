import ContactUsImgLogo from "../../assets/contactusBg-1.png";
import ContactUsImgBg from "../../assets/contactusBg-2.png";
import { useState } from "react";
import Logo from "../../assets/appLogoBule.png";
import { FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";

const ContactUs = () => {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="w-screen max-w-[1580px] bg-[#f9fafc] flex flex-col items-center justify-center">
      <div className="w-[90%] h-[385px] bg-[#002549] my-[5rem] rounded-xl flex flex-col">
        <div className="flex w-[90%] absolute overflow-hidden items-center justify-between h-[390px] lg:gap-[18rem] flex-row">
          <img
            src={ContactUsImgBg}
            alt="ContactUsImgBg"
            className="lg:w-[28%] md:w-[50%]"
          />
          <img
            src={ContactUsImgLogo}
            alt="ContactUsImgLogo"
            className="lg:w-[35%] md:w-[50%]"
          />
        </div>
        <div className="z-40 w-full flex flex-col items-center lg:mt-[4rem] md:mt-[4rem] sm:mt-[4rem] xs:mt-[4rem]">
          <h1 className="font-['Lato'] text-center lg:text-[40px] md:text-[35px] sm:text-[26px] xs:text-[18px] font-bold text-[#fff]">
            What are you interested in?
          </h1>
          <p className="w-[50%]  font-['Inter'] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[10px] lg:mt-2 sm:mt-[1rem] font-medium text-center text-[#fff]">
            We work with ambitious investors who want to define the future
            through impactful investments to achieve extraordinary outcomes in
            Emerging Markets.
          </p>

          <div className="flex w-[80%] lg:flex-row md:flex-row sm:flex-row xs:flex-col items-center justify-center lg:gap-4 md:gap-4 sm:gap-4 xs:gap-4 xs:gap-2 lg:mt-[3rem] md:mt-[3rem]  sm:mt-[3rem] xs:mt-[3rem]">
            <select
              className="bg-[#002549] text-white border border-white px-4 py-2 lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] rounded-lg lg:w-[35%] md:w-[35%] sm:w-[35%] xs:w-[55%] focus:outline-none"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="">Select a service you are interested in</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>

            <input
              type="email"
              placeholder="Email address"
              className="bg-[#002549] text-white border border-white px-4 py-2 rounded-lg lg:w-[20%] md:w-[20%] sm:w-[20%] xs:w-[40%]  lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] focus:outline-none"
            />

            <button className="bg-white lg:w-[25%] md:w-[25%] sm:w-[25%] xs:w-[45%] font-['Inter'] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-[#002549] lg:px-6 xs:px-1 py-2 rounded-lg font-medium hover:bg-gray-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f9fafc] py-10 flex lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-between md:px-[4rem] lg:px-[4rem] items-center md:gap-[2rem] ">
        <div className="flex flex-col lg:w-[50%] md:w-full sm:w-full  lg:pr-[2rem] md:px-[1rem] sm:px-[4rem] xs:px-[2rem] xs:py-[2rem] justify-start text-center">
          <div className="flex flex-row gap-2">
            <img src={Logo} alt="Logo" className="w-[30px] h-[30px]" />
            <h1 className="text-[#002e72] font-semibold text-[18px]">
              IMPACTABLE
            </h1>
          </div>
          <p className="w-full text-[#52525c] font-['Inter'] mt-[2rem] text-start text-[16px] font-medium">
            We work with ambitious investors who want to define the future
            through impactful investments to achieve extraordinary outcomes in
            Emerging Markets.
          </p>
          <div className="flex flex-row gap-3 mt-[1.5rem]">
            <div className="w-[30px] h-[30px] rounded-full border-[1px] flex items-center justify-center border-[#d4d4d8]">
              <FaLinkedinIn className="text-[#003c73]" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full border-[1px] flex items-center justify-center border-[#d4d4d8]">
              <CgFacebook className="text-[#003c73]" />
            </div>
          </div>
        </div>

        <div className="flex gap-[4rem] text-[#002e72] flex-col md:w-full sm:w-full xs:w-full lg:px-1 md:px-[1rem] sm:px-[4rem] xs:px-[2rem] font-['Inter'] items-start justify-start text-[16px] font-medium mb-[5rem]">
          <div className="flex lg:flex-row md:flex-row sx:flex-row xs:flex-col w-full px-2  justify-between md:gap-[2rem] xs:gap-2 xs:pt-2 h-full">
            <a href="#" className="hover:underline">
              Homepage
            </a>
            <a href="#" className="hover:underline">
              Resources
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </div>

          <div className="flex w-full lg:flex-row md:flex-row sm:flex-row xs:flex-col items-center gap-4">
            <div className="lg:w-[65%] md:w-[65%] sm:w-[65%] xs:w-[80%] flex gap-[1rem] flex-row">
              <input
                type="text"
                placeholder="First name"
                className="bg-white text-[#52525c] border border-gray-300 px-4 py-2 rounded-lg w-full h-[50px] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email address"
                className="bg-white text-[#52525c] border border-gray-300 px-4 py-2 rounded-lg w-full h-[50px] focus:outline-none"
              />
            </div>

            <button className="bg-[#0090ff] lg:w-[35%] md:w-[35%] sm:w-[35%] xs:w-[80%] h-[50px] font-['Inter'] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] font-medium text-white px-1 py-2 rounded-lg">
              Subscribe To Our Newsletter
            </button>
          </div>
        </div>
      </div>
      <span className="bg-[#e2e7f1] w-[90%] h-[2px] mb-[2rem]"></span>
      <div className="flex flex-row gap-1 items-center justify-center mb-[2rem]">
        <FaRegCopyright className="text-[#545454] text-[12px]" />
        <h5 className="text-[#545454] font-['Lato'] font-normal text-[12px]">
          2024 Impactable Investment Group
        </h5>
      </div>
    </div>
  );
};

export default ContactUs;
