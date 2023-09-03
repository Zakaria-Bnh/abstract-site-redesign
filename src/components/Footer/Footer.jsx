import { AbstractLogo, Envelope } from "../../assets";
import { footerLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className=" text-white pt-12 pb-12">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="flex flex-col  md:mr-12 gap-6 md:gap-8 m">
          <a href="/home">
            <img src={AbstractLogo} alt="abtract logo" className="w-[10rem]" />
          </a>
          <div className="flex flex-col">
            <h2 className="mb-2 text-[1.3rem] font-semibold">Contact Us</h2>
            <div className="flex gap-4 items-center">
              <img src={Envelope} alt="email contact" className="w-6" />
              <a href="#" className="hover:text-blue-300">
                info@abstract.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-wrap justify-around gap-8">
          {footerLinks.map((UsefulLinks) => (
            <div>
              <h2 className="mb-3 text-[1.3rem] font-semibold">
                {UsefulLinks.title}
              </h2>
              <ul>
                {UsefulLinks.links.map((ItemLink, index) => (
                  <li
                    className={`${
                      index === UsefulLinks.links.length - 1 ? "" : "mb-2"
                    }`}
                  >
                    <a
                      className="text-gray-300 hover:text-white"
                      href={ItemLink.link}
                    >
                      {ItemLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <span className="block m-auto w-[80%] h-[1px] bg-gray-500 rounded-lg mb-3"></span>
      <p className="text-center text-gray-400">© Copyright 2022 Abstract Studio Design, Inc. All rights reserved </p>
    </footer>
  );
};

export default Footer;
