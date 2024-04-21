import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { works } from "../data/Static";
import github from "../assets/github.png";


const ProjectCard = ({
  index,
  title,
  description,
  tech,
  imgUrl,
  workUrl,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <motion.div
      data-aos="fade-up"
      data-aos-duration={1000}
      data-aos-easing="linear"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75, delay: index * 0.5 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={imgUrl}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(workUrl, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tech.map((tag, idx) => (
            <p
              key={`${title}-${idx}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = () => {
  return (
    <div name="work" className="w-full bg-gradient-to-br from-[#100E09] to-[#1C1C1C] py-32">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">Recent Works</h1>
          <p className="text-xl py-6">During my experience as a self-taught developer, I have created many projects and shared them on LinkedIn and GitHub. I am always on the lookout for new and challenging projects to work on.</p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-7">
          {/* Map over the projects array and render each project */}
          {works.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
