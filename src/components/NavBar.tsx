import { NavMobile } from './NavMobile';
import { useIsMobile } from '../hooks/useIsMobile';
import { NavDesktop } from './NavDesktop';

export function NavBar() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-[70px] dark:bg-[#0d1117] bg-white fixed z-50 flex inset-x-0 top-0 py-5 border-b dark:border-[#30363d] border-[#c2c2c2] transition-colors duration-300">
      <div className="md:px-[8em] px-[2em] flex justify-between items-center w-full">
        <a href='#' className='text-2xl font-bold bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent cursor-pointer'>JR</a>
        {isMobile ? (
          <NavMobile />
        ) : (
          <NavDesktop />
        )}
      </div>
    </div>
  )
}