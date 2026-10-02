const Hero = () => {
  return (
    <section className="max-w-7xl w-full flex items-center justify-between mx-auto gap-10 my-16 px-4">
      <div className="max-w-[630px] w-full">
        <h1 className="font-['Plus_Jakarta_Sans'] text-6xl font-extrabold tracking-[-1.5px] leading-[60px] text-slate-900">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent block">
            Development Stack
          </span>
        </h1>
        <p className="font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[29.3px] text-[#475569] mt-4 mb-8">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold rounded-lg px-6 py-3 transition-opacity ">
            Explore Technologies
          </button>
          <button className="bg-transparent text-slate-700 font-semibold border border-slate-300 rounded-lg px-6 py-3 transition-colors ">
            Learn More
          </button>
        </div>
      </div>
      <img
        className="w-[350px] h-auto object-contain"
        src="/banner-stack.png"
        alt="Banner graphic"
        loading="eager"
      />
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <section className="max-w-7xl w-full flex justify-between mx-auto gap-10 my-20 py-4   ">
//       <div className="bg-teal-500 w-[630px]  py-10">
//         <p className="font-['Inter'] text-6xl  font-extrabold tracking-[-1.5px] leading-[60px]">
//           Build Your Ideal
//         </p>
//         <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent    text-6xl font-extrabold tracking-[-1.5px] leading-[60px]">
//           Development Stack
//         </span>
//         <p className="font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[29.3px] text-[#475569] tracking-normal mt-4 mb-9">
//           Explore frontend, backend, database, and tooling options, compare them
//           side by side, and put together the stack that fits your next project.
//         </p>
//         <div>
//           <button className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899]  text-white border-none rounded-[10px] px-4 py-3 mr-3">
//             Explore Technologies
//           </button>
//           <button className="btn px-4 py-3 rounded-xl">Learn More</button>
//         </div>
//       </div>
//       <img
//         className="w-[350px] h-[350px]"
//         src="/banner-stack.png"
//         alt="Banner img"
//       />
//     </section>
//   );
// };

// export default Hero;
