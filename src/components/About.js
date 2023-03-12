import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* image */}
          <motion.div 
            variants={fadeIn('right', 0.3)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} 
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
          {/* text*/}
          <motion.div
            variants={fadeIn('left', 0.5)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} 
            className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>I'm a Full-stack Developer with over 6 years of professoinal experience.</h3>
            <p className='mb-6'>I have a strong understanding of all layers of web development and am comfortable working on both the front-end and back-end of an application. I have experience with a wide range of technologies, including HTML, CSS, JavaScript, React, PHP, Node.js, MySQL, MongoDB, REST APIs, MVC architecture, server-side rendering, and more. <br /> 
              I'm very passionate and dedicated to my work. I am an experienced software developer with a passion for creating creative programs that improve corporate performance and efficiency. I'm Well-knowledged in programming and clean coding to build dependable and user-friendly applications.
            </p>
            {/* Stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient pt-2 mb-2'>
                  {inView ?  <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient pt-2 mb-2'>
                  {inView ?  <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient pt-2 mb-2'>
                  {inView ?  <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
