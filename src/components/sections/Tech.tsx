// import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.technologies} />

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(technology => (
          <div className="h-28 w-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
