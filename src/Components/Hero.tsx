const Hero = () => {
  return (
    <section className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between mx-auto gap-8 md:gap-10 my-8 md:my-16 px-4">
      <div className="max-w-[630px] w-full text-center md:text-left">
        <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-1.5px] leading-tight md:leading-[60px] text-slate-900">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent block">
            Development Stack
          </span>
        </h1>
        <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-[18px] font-normal leading-relaxed sm:leading-[29.3px] text-[#475569] mt-4 mb-8">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold rounded-lg px-6 py-3 transition-opacity">
            Explore Technologies
          </button>
          <button className="bg-transparent text-slate-700 font-semibold border border-slate-300 rounded-lg px-6 py-3 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <img
        className="w-full max-w-[280px] sm:max-w-[350px] h-auto object-contain"
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
//     <section className="max-w-7xl w-full flex items-center justify-between mx-auto gap-10 my-16 px-4">
//       <div className="max-w-[630px] w-full">
//         <h1 className="font-['Plus_Jakarta_Sans'] text-6xl font-extrabold tracking-[-1.5px] leading-[60px] text-slate-900">
//           Build Your Ideal{" "}
//           <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent block">
//             Development Stack
//           </span>
//         </h1>
//         <p className="font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[29.3px] text-[#475569] mt-4 mb-8">
//           Explore frontend, backend, database, and tooling options, compare them
//           side by side, and put together the stack that fits your next project.
//         </p>
//         <div className="flex items-center gap-4">
//           <button className="bg-gradient-to-r from-[#F97316] to-[#EC4899] text-white font-semibold rounded-lg px-6 py-3 transition-opacity ">
//             Explore Technologies
//           </button>
//           <button className="bg-transparent text-slate-700 font-semibold border border-slate-300 rounded-lg px-6 py-3 transition-colors ">
//             Learn More
//           </button>
//         </div>
//       </div>
//       <img
//         className="w-[350px] h-auto object-contain"
//         src="/banner-stack.png"
//         alt="Banner graphic"
//         loading="eager"
//       />
//     </section>
//   );
// };

// export default Hero;
