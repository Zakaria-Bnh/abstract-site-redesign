import { useState, useEffect } from "react";
import { SecondaryButton } from "../Button";
import { AbstractLogo } from "../../assets";


const Header = () => {
  const [scroll, setscroll] = useState(false)

  const handlescroll = () => {
    if (window.innerWidth > 768 && window.scrollY > 100) {
      setscroll(true)
    }else if ( window.innerWidth < 768 && window.scrollY > 50) {
      setscroll(true)
    } else {
      setscroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handlescroll)
    return () => {  
      window.removeEventListener('scroll', handlescroll)
    }
  },[])

  return (
    <header className={`flex items-center justify-between h-[70px] gap-4 sticky top-0 ${scroll ? 'opacity-0  duration-400 z-[100]': ''}`}>
      <a href="/home">
        <img src={AbstractLogo} alt="abtract logo" className="w-[10rem]" />
      </a>
      <SecondaryButton href='/#' value="Sign-in"/>
    </header>
  );
};

export default Header;
