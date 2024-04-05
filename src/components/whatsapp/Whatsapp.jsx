import whatsappLogo from '../../assets/whatsapp.png';
function Whatsapp() {
  return (
    <div className="h-[5rem] w-[5rem] fixed bottom-5 right-2 cursor-pointer animate-bounce">
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
