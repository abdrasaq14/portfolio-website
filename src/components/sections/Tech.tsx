// import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { useState } from 'react';
const Tech = () => {
 const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <>
      <Header useMotion={true} {...config.sections.technologies} />

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map(technology => (
          <div className="h-28 w-28 relative" key={technology.name}>
            {activeTech === technology.name && (
              <div className="absolute h-[28px] bg-[#E1E9E5] top-[-35%] w-full rounded-lg shadow-lg flex items-center justify-center text-primary">
                {technology.name}
              </div>
            )}

            <img
              src={technology.icon}
              alt={technology.name}
              onMouseEnter={() => setActiveTech(technology.name)}
              onMouseLeave={() => setActiveTech(null)}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills');
