const PrimaryButton = ({ styles, value, href }) => {
  return (
    <a
      className={`${styles} text-white bg-blue-400 hover:bg-blue-500 rounded-[.5rem] 
       border-blue-400 hover:border-blue-500 px-[1rem] py-[.75rem] duration-300 text-[16px] md:text-[18px] whitespace-nowrap`}
    >
      {value}
    </a>
  );
};

const SecondaryButton = ({ styles, value, href }) => (
  <a
    href={href}
    className={`${styles} text-white text-[16px] md:text-[18px] hover:bg-white  duration-300 hover:text-black px-[1rem] py-[.75rem] rounded-[.5rem] border-white whitespace-nowrap`}
  >
    {value}
  </a>
);

export { PrimaryButton, SecondaryButton };
