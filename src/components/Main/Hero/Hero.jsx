import { SecondaryButton, PrimaryButton } from "../../Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row pt-24 pb-16 text-white">
      <div className="flex-1">
        <h1 className="text-[4rem] leading-[1.2] text-center">
          True version control for Sketch files
        </h1>
        <div className="flex gap-6 justify-center mt-4 sm:mt-6">
        <PrimaryButton href="/#" value="Start trial" />
        <SecondaryButton value="Download" />
        </div>
        <p>1 in 3 Fortune 500 companies use Sketch + Abstract</p>
      </div>
    </div>
  );
};

export default Hero;
