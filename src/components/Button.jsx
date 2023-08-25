

const PrimaryButton = ({styles, value, href}) => {
  return (
    <a className={`${styles} text-white bg-blue-700 hover:bg-blue-800 rounded-[.5rem] border-2 border-blue-700 hover:border-blue-800 px-[1rem] py-[.75rem] duration-300 text-[18px]`}>
      {value}
    </a>
  )
}



const SecondaryButton = ({ styles, value, href }) => (
    <a href={href} className={`${styles} text-white text-[18px] hover:bg-white duration-300 hover:text-black px-[1rem] py-[.75rem] border-2 rounded-[.5rem] border-white`}>
      {value}
    </a>
  );

export {PrimaryButton, SecondaryButton}
