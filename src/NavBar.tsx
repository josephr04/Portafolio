import { NavMobile } from './components/NavMobile';
import { useIsMobile } from './hooks/useIsMobile';
import { NavDesktop } from './components/NavDesktop';

export function NavBar() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-[70px] bg-[#0d1117] flex absolute inset-x-0 top-0 py-5 border-b border-[#30363d]">
      <div className="md:px-[8em] px-[2em] flex justify-between items-center w-full">
        <a href='#' className='text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer'>JR</a>
        {isMobile ? (
          <NavMobile />
        ) : (
          <NavDesktop />
        )}
      </div>
    </div>
  )
}