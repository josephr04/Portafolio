
export function About() {
  return(
    <div className='px-[1em] pt-10 pb-10 text-white flex flex-col items-center justify-center'>
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="text-center text-3xl font-bold mb-2">About Me</div>
        <div className="h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-xl w-12"></div>
      </div>
      <img src="../public/dogpfp.jpg" alt="Personal photo" className="border-3 border-[#0d1117] rounded-full w-42 h-42 mb-6 object-cover shadow-2xl hover:scale-108 transition-transform duration-400 ease-in-out" />
      <div className="mb-4">I stand out as a passionate and dedicated software developer who is always thriving in building efficient solutions in every project.</div>
      <div>I possess strong skills in web application development, both in frontend and backend. I excel in collaborative environments and am always eager to learn and improve my skills.</div>
    </div>
  );
};