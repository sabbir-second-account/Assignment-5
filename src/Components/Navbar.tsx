import { RxHamburgerMenu } from "react-icons/rx";
import type { INavItem } from "../Type/types";

const navItems: INavItem[] = [
  { id: 1, label: "Home", href: "#", active: true },
  { id: 2, label: "Technologies", href: "#" },
  { id: 3, label: "Project", href: "#" },
  { id: 4, label: "About", href: "#" },
  { id: 5, label: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-100">
      <div className="relative flex justify-between items-center max-w-7xl w-full mx-auto h-[60px] py-4 px-3 sm:px-4">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl sm:text-2xl z-10 shrink-0">
          <RxHamburgerMenu />
        </button>

        {/* Scaled logo to fit small viewports */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img
            src="/logo-text.png"
            alt="Navbar-logo"
            className="h-6 sm:h-8 object-contain"
          />
        </div>

        <ul className="hidden md:flex justify-around gap-5 font-jakarta">
          {navItems.map((item) => (
            <li key={item.id} className="font-semibold">
              <a
                href={item.href}
                className={`${item.active ? "text-[#DB2777]" : "text-[#475569]"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Compact buttons for mobile */}
        <div className="flex gap-2 sm:gap-4 items-center z-10 shrink-0">
          <span className="cursor-pointer text-xs sm:text-base">Sign in</span>
          <button className="btn btn-secondary rounded-3xl px-3 sm:px-5 text-xs sm:text-sm h-8 min-h-8 sm:h-10 bg-[#D91B7E]">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// import { RxHamburgerMenu } from "react-icons/rx";
// import type { INavItem } from "../Type/types";

// const navItems: INavItem[] = [
//   { id: 1, label: "Home", href: "#", active: true },
//   { id: 2, label: "Technologies", href: "#" },
//   { id: 3, label: "Project", href: "#" },
//   { id: 4, label: "About", href: "#" },
//   { id: 5, label: "Contact", href: "#" },
// ];

// const Navbar = () => {
//   return (
//     <header className="  sticky top-0 z-50 bg-white border-b border-zinc-100">
//       <div className=" flex justify-between items-center  max-w-7xl w-full mx-auto h-[60px] py-4 px-4">
//         {/* Mobile Menu Button*/}

//         <button className="md:hidden text-2xl">
//           <RxHamburgerMenu />
//         </button>

//         <div>
//           <img src="/logo-text.png" alt="Navbar-logo" />
//         </div>
//         <ul className=" hidden md:flex justify-around gap-5 font-jakarta">
//           {navItems.map((item) => (
//             <li key={item.id} className="font-semibold">
//               <a
//                 href={item.href}
//                 className={`${item.active ? "text-[#DB2777]" : "text-[#475569]"}`}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}

//           {/* <li className="text-[#DB2777]">Home </li>
//           <li> Technologies</li>
//           <li>Project</li>
//           <li>About</li>
//           <li>Contact</li> */}
//         </ul>
//         <div className="flex   p-2 justify-between gap-5 items-center">
//           <span className="cursor-pointer">Sign in</span>
//           <button className="btn btn-secondary rounded-3xl px-5 bg-[#D91B7E]">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
