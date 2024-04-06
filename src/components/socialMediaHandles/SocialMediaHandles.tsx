import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
function SocialMediaHandles() {
  return (
    <div className="hidden lg:flex min-h-[10rem] w-[3rem] absolute justify-evenly p-1 gap-1 flex-col items-center top-[3%] left-0 bg-[#ffffff] overflow-hidden shadow-custom-shadow animate-appear">
      <a
        href="https://www.linkedin.com/in/abdulrasaq-suleiman/"
        target="_blank"
        className="text-decoration-none"
      >
        <FaLinkedin
          className="text-primary px-1 py-2 m-1 hover:bg-[#ad87ff89] rounded-[4px] cursor-pointer"
          style={{ fontSize: '2.7rem' }}
        />
      </a>
      <a href="https://github.com/abdrasaq14/" target="_blank" className="text-decoration-none">
        <FaGithub
          className="text-primary px-1 py-2 m-1 hover:bg-[#ad87ff89] rounded-[4px] cursor-pointer"
          style={{ fontSize: '2.7rem' }}
        />
      </a>
      <a href="https://twitter.com/abdrasaq14" target="_blank" className="text-decoration-none">
        <FaTwitter
          className="text-primary px-1 py-2 m-1 hover:bg-[#ad87ff89] rounded-[4px] cursor-pointer"
          style={{ fontSize: '2.7rem' }}
        />
      </a>
    </div>
  );
}

export default SocialMediaHandles;
