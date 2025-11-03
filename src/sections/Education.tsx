export function Education() {
  return (
    <div className="px-[2em] pt-10 pb-10 bg-[#0d1117] text-white flex flex-col">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="text-center text-3xl font-bold mb-2">Education</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-xl w-12"></div>
      </div>
      <div className="border rounded-xl p-4 border-[#30363d] relative overflow-hidden before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-linear-to-r before:from-blue-400 before:to-purple-500">
        <h3 className="text-xl font-semibold text-white">
          Bachelor's Degree in Software Development and Management
        </h3>
        <p className="text-blue-400 mt-1">Technological University of Panama</p>
        <p className="text-gray-400 text-sm mt-1">
          2023 - 2026
        </p>
      </div>
    </div>
  );
};