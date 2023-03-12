import React from 'react'

function ExperienceView() {
  return (
    <section className='w-full'>
        <div className='container'>
            <div className='flex-row p-20'>
                <h2 className='text-4xl font-kaushan font-bold text-center' style={{ letterSpacing: 2, }}>Work Experience</h2>
            </div>
            <div className='flex flex-col w-full gap-6 pl-20 pr-20'>
                <li className='w-full list-none'>
                    <div className='w-1/2 max-lg:w-full flex flex-col gap-4 items-end max-lg:items-start'>
                        <h3 className='text-2xl font-kaushan'>Senior Frontend Developer</h3>
                        <span className='text-lg text-gray-500 font-kaushan'>Crowdbotics - 2022 - 2023</span>
                        <p className='text-right max-lg:text-left'>Crowdbotics Inc. is a US based company specialised in software development. Here I was a senior frontend developer using JavaScript with React and React Native integration of Rest API. </p>
                    </div>
                </li>

                <li className='w-full list-none flex flex-row justify-end max-lg:justify-start'>
                    <div className='w-1/2 max-lg:w-full flex flex-col gap-4 items-start'>
                        <h3 className='text-2xl font-kaushan'>Frontend Developer</h3>
                        <span className='text-lg text-gray-500 font-kaushan'>Hipolar Software - 2021 - 2022</span>
                        <p className='text-left'>Here at Hipolar Software Company, a company based in India, I worked as a frontend developer for both mobile{'(iOS & Android)'} and Web application developer. </p>
                    </div>
                </li>
            </div>
        </div>
    </section>
  )
}

export default ExperienceView