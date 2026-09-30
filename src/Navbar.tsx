import Navbar_code from "./Navbar_code";
import type { NavItem } from "./Type/types";

const navItems: NavItem[] = [
  { id: 1, label: "Home", href: "#", active: true },
  { id: 2, label: "Technologies", href: "#" },
  { id: 3, label: "Project", href: "#" },
  { id: 4, label: "About", href: "#" },
  { id: 5, label: "Contact", href: "#" },
];

const Navbar = () => {
  return <Navbar_code navItems={navItems} />;
};

export default Navbar;
