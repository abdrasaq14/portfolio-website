import { useState } from 'react';
import whatsappLogo from '../../assets/whatsapp.png';
function Whatsapp() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <div
      className="h-[5rem] w-[5rem] fixed bottom-5 right-5 cursor-pointer animate-bounce flex align-center justify-center"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {isMouseOver && (
        <div className="absolute bg-[#E1E9E5] top-[-40%] min-w-[7rem] backdrop-blur-blur bg-opacity-[1] rounded-lg shadow-lg shadow-[#00000040] animate-bounce flex align-center text-center justify-center text-primary text-[.8rem] left-[-20%] p-1 font-bold">
          Chat me on WhatsApp
        </div>
      )}
      <a
        className="decoration-none"
        href="https://wa.me/2348023989479?text=Hi%20Abdulrasaq%20,%20I'm%20impressed%20with%20your%20work%20and%20would%20like%20to%20discuss%20potential%20opportunity,%20are%20you%20available%20for%20further%20discussion?"
        target="_blank"
      >
        {' '}
        <img src={whatsappLogo} className="max-[100%] w-[100%]:" />
      </a>
    </div>
  );
}

export default Whatsapp;
