// import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { MdRemoveRedEye } from 'react-icons/md';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';
import { useState } from 'react';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  isOnGoing
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="relative bg-tertiary w-full rounded-2xl p-5 sm:w-[300px] min-h-[550px] flex flex-col justify-between overflow-hidden">
        {isOnGoing && (
          <div className="absolute !z-20 right-[-45px] shadow-md rotate-45 h-[20px] min-w-[150px] bg-[#ec008c] flex items-center justify-center text-sm font-semibold">
            On going
          </div>
        )}
        <div
          className="relative h-[230px] w-full cursor-pointer"
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <img src={image} alt={name} className="h-full w-full rounded-2xl object-cover" />
          {isMouseOver && (
            <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-primary opacity-[0.8] backdrop-blur-blur flex items-center justify-center">
              <a
                href={sourceCodeLink}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdRemoveRedEye />
              </a>
            </div>
          )}
          {/* <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, '_blank')}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img src={github} alt="github" className="h-1/2 w-1/2 object-contain" />
              </div>
            </div> */}
        </div>
        <div className="mt-5 flex-grow">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
