import { RxHamburgerMenu } from "react-icons/rx";
import type { NavItem } from "./Type/types";

interface NavbarCodeProps {
  navItems: NavItem[];
}

const Navbar_code = ({ navItems }: NavbarCodeProps) => {
  return (
    <header className="  sticky top-0 z-50 bg-white border-b border-zinc-100">
      <div className=" flex justify-between items-center  max-w-7xl w-full mx-auto h-[60px] py-4 px-4">
        {/* Mobile Menu Button*/}

        <button className="md:hidden text-2xl">
          <RxHamburgerMenu />
        </button>

        <div>
          <img src="/public/logo-text.png" alt="Navbar-logo" />
        </div>
        <ul className=" hidden md:flex justify-around gap-5 font-jakarta">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`${item.active ? "text-[#DB2777]" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* <li className="text-[#DB2777]">Home </li>
          <li> Technologies</li>
          <li>Project</li>
          <li>About</li>
          <li>Contact</li> */}
        </ul>
        <div className="flex   p-2 justify-between gap-5 items-center">
          <span className="cursor-pointer">Sign in</span>
          <button className="btn btn-secondary rounded-3xl px-5 bg-[#D91B7E]">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar_code;
