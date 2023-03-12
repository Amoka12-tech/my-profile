import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// animation motion
import { motion } from 'framer-motion';
// varient
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Frontend Design',
    description: 
      'I have over six(6) years experience in delivery perfect pixel frontend design using HTML, CSS, JavaScript, Sass with React library, Bootstrap, Material design, and Tailwinds.',
    link: 'Learn more',
  },
  {
    name: 'Backend Design',
    description: 
      'I also develop backend application for web application and build RestApi for other application usage, using PHP with Laravel framework, Node.Js, and Python.',
    link: 'Learn more',
  },
  {
    name: 'Database Design',
    description: 
      'I have over eight(8) years experience in database development with both Relational and None-Relational database(MySQL and MongoDB).',
    link: 'Learn more',
  },
  {
    name: 'Project Management',
    description: 
      'With my long time experience in software developement, I had eqully function well in staging software design process and managing the development team and make sure project is deliver on-time and scaleable with clean codes.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat bg-contain mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Full-stack Developer with over 6 years of professoinal experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* loop list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div 
                    className='border-b border-white/20 h-[146px] mb-[38px] flex' 
                    key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
