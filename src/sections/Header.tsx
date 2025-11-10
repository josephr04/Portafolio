import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export function Header() {
  return(
    <div className='px-[2em] pt-10 pb-10 bg-linear-to-br from-[#0a0a0f] via-[#0f172a] to-[#0a0a0f] text-white'>
      <TypeAnimation
        sequence={[
          'Joseph Rosas',
          1000,
          'Joseph',
          200,
          'Joseph Rosas',
        ]}
        wrapper="span"
        cursor={true}
        repeat={0}
        speed={30}
        style={{ display: 'inline-block', color: "#60A5FA", wordBreak: 'break-all' }}
        className='sm:font-extrabold font-semibold text-base/11 text-[2.3em] sm:text-[4em] w-[140px] sm:w-full h-[100px]'
      />
      <div className='text-[#8d96a0] text-[20px] mb-[1em]'>Software Developer</div>
      <div>Full-stack software developer with a strong focus on backend development. 
        I build robust, scalable applications using modern technologies and best practices. 
      </div>
      <div className='mt-8'>
        <a href='#' className='inline-block rounded-lg bg-blue-400 py-3 px-5 w-[150px] text-center font-semibold cursor-pointer hover:brightness-90 hover:-translate-y-1 transition-transform duration-300 ease-in-out'>Download CV</a>
      </div>
      <div className='flex gap-4 items-center mt-6'>
        <a href="https://www.linkedin.com/in/joseph-rosas-595a15371" rel="noopener noreferrer" target="_blank">
          <FaLinkedinIn className="icon" size={30} />
        </a>
        <a href="https://github.com/josephr04" rel="noopener noreferrer" target="_blank">
          <FaGithub className="icon" size={30} />
        </a>
        <a href="mailto:joseph.rosas.peralta@gmail.com" rel="noopener noreferrer" target="_blank">
          <IoIosMail className="icon" size={36} />
        </a>
      </div>
    </div>
  );
};