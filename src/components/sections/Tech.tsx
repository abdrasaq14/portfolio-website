// import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { useState } from 'react';
const Tech = () => {
  const [isMouseOver, setIsMouseOver] = useState<Record<string, boolean>>({});
  return (
    <>
      <Header useMotion={true} {...config.sections.technologies} />

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map(technology => (
          <div className="h-28 w-28 relative" key={technology.name}>
            {isMouseOver![technology.name] && (
              <div className="absolute h-[28px] bg-[#E1E9E5] top-[-35%] w-[100%] backdrop-blur-blur bg-opacity-[1] rounded-lg shadow-lg shadow-[#00000040] animate-bounce flex align-center justify-center text-primary">
                {technology.name}
              </div>
            )}
            <img
              src={technology.icon}
              alt={technology.name}
              id={technology.name}
              onMouseEnter={() => setIsMouseOver({ ...isMouseOver, [technology.name]: true })}
              onMouseLeave={() => setIsMouseOver({ ...isMouseOver, [technology.name]: false })}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
