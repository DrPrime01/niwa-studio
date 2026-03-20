import { NavLink } from "react-router";
import Logo from "./vectors/Logo";

export default function Navbar() {
  return (
    <nav className="px-5 py-4.25 md:py-5 backdrop-blur-xs bg-transparent fixed w-full z-50">
      <div className="flex items-center justify-between container max-w-7xl mx-auto">
        <div className="flex items-center gap-x-8">
          <NavLink to="/">
            <Logo />
          </NavLink>

          <div className="hidden md:flex items-center gap-x-7">
            <NavLink to="/" className="nav-texts text-black">
              Niwa
            </NavLink>
            <NavLink
              to="/work"
              className="nav-texts text-black mix-blend-difference"
            >
              Work
            </NavLink>
            <NavLink to="/plant" className="nav-texts text-black">
              Plant
            </NavLink>
          </div>
        </div>
        <div>
          <button className="bg-black py-2 px-5 rounded-full h-12 text-brand-jaffa nav-texts">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
