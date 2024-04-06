import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { styles } from '../../constants/styles';

export default function Footer() {
  return (
    <footer
      className={`${styles.paddingX} bg-primary mt-5 flex justify-between items-center w-full h-20 text-white`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <p className="text-left text-[#ffffffad] sm:text-sm">© 2024 Abdulrasaq Suleiman</p>
        <div className="flex w-[40%]justify-end gap-1 items-center animate-appear">
          <a
            href="https://www.linkedin.com/in/abdulrasaq-suleiman/"
            target="_blank"
            className="text-decoration-none"
          >
            <FaLinkedin
              className="text-[#ffffffad] px-1 py-2 hover:text-[#915EFF] cursor-pointer"
              style={{ fontSize: '2.7rem' }}
            />
          </a>
          <a href="https://github.com/abdrasaq14/" target="_blank" className="text-decoration-none">
            <FaGithub
              className="text-[#ffffffad] px-1 py-2 hover:text-[#915EFF] cursor-pointer"
              style={{ fontSize: '2.7rem' }}
            />
          </a>
          <a href="https://twitter.com/abdrasaq14" target="_blank" className="text-decoration-none">
            <FaTwitter
              className="text-[#ffffffad] px-1 py-2 hover:text-[#915EFF] cursor-pointer"
              style={{ fontSize: '2.7rem' }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
