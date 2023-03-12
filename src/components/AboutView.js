import React from 'react'

function AboutView() {
  return (
    <section className='flex-1'>
      <div className='flex-1'>
        <div className='flex flex-col justify-center my-10 mb-10'>
          <h2 className='w-fit self-center text-4xl font-kaushan font-bold' style={{letterSpacing: 2}}>About Me</h2>
        </div>

        <div className='flex-row flex justify-center max-lg:flex-col max-lg:items-center pr-10 pl-10'>
          <div className=' w-2/5 p-5 max-lg:w-full max-lg:flex justify-items-center flex-col'>
            <table className='table-auto w-fit self-center max-lg:w-full'>
              <tbody>
                <tr className=''>
                  <td className='font-bold text-md flex-nowraps pr-5 pb-5'>First Name: </td>
                  <td className=' text-md pb-5'>Abdulmutalib Adeiza Amoka</td>
                </tr>
                <tr className=''>
                  <td className='font-bold text-md flex-nowraps pr-5 pb-5'>Phone: </td>
                  <td className='text-md pb-5'>+234 803 4329 120</td>
                </tr>
                <tr className=''>
                  <td className='font-bold text-md flex-nowraps pr-5 pb-5'>Website: </td>
                  <td className='text-md pb-5'>www.mutalib.firstlink.com.ng</td>
                </tr>
                {/* <tr className=''>
                  <td className='font-bold text-md flex-nowraps pr-5 pb-5'>Address: </td>
                  <td className='text-md pb-5'>www.mutalib.firstlink.com.ng</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className='w-7/12 p-5 max-lg:w-full'>
          As a full-stack developer, I have a strong understanding of all layers of web development and am comfortable working on both the front-end and back-end of an application. I have experience with a wide range of technologies, including HTML, CSS, JavaScript, React, PHP, Node.js, MySQL, MongoDB, REST APIs, MVC architecture, server-side rendering, and more. <br /> 
          I'm very passionate and dedicated to my work. I am an experienced software developer with a passion for creating creative programs that improve corporate performance and efficiency. I'm Well-knowledged in programming and clean coding to build dependable and user-friendly applications.
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutView