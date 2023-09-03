import { SecondaryButton, PrimaryButton } from "../../Button";
import { CompanyClients } from "../../../constants";
import { baranchesHero } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex flex-col items-start md:flex-row gap-6 md:gap-4 text-white mt-16 md:mt-24 pb-14">
      <div className="flex-[.7] text-center md:text-start mb-6 md:mb-0">
        <h1 className="ff-playfair text-[3.5rem] md:text-[4rem] lg:text-[6rem] font-semibold  leading-[1.2] text-center md:text-start mb-4">
          True version control for Sketch files
        </h1>
        <div className="flex gap-6 justify-center md:justify-start mb-8">
        <PrimaryButton href="/#" value="Start trial" />
        <SecondaryButton value="Download"/>
        </div>
        <p className="mb-4">1 in 3 Fortune 500 companies use Sketch + Abstract</p>
        <div className="flex md:justify-start justify-center items-center flex-row flex-wrap gap-x-8 gap-y-3">
          {CompanyClients.map(company => (
            <img className="w-[6rem] sm:w-[4rem] md:w-[5rem]" src={company.logo} alt={company.alt} />
          ))}
        </div>
      </div>
      <div className="md:absolute top-[16%] left-[70%] right-[-85%]">
        <img className='md:absolute md:w-[50%] md:max-w-[600px]' src={baranchesHero} alt="branches hero" />
      </div>
    </div>
  );
};

export default Hero;
