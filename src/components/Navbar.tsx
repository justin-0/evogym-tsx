import { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";
import { SelectedPage } from "src/types/SelectedPage";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav>
      <div className="flexBetween fixed top-0 z-30 w-full py-6">
        <div className="flexBetween mx-auto w-5/6">
          <div className="flexBetween w-full gap-16">
            {/* Left Side Nav */}
            <img src={Logo} alt="logo" />
            {/* Right Side Nav */}
            <div className="flexBetween w-full">
              <div className="flexBetween gap-8 text-sm">
                <NavLink
                  page="Home"
                  setSelectedPage={setSelectedPage}
                  selectedPage={selectedPage}
                />
                <NavLink
                  page="Benefits"
                  setSelectedPage={setSelectedPage}
                  selectedPage={selectedPage}
                />
                <NavLink
                  page="Our Classes"
                  setSelectedPage={setSelectedPage}
                  selectedPage={selectedPage}
                />
                <NavLink
                  page="Contact Us"
                  setSelectedPage={setSelectedPage}
                  selectedPage={selectedPage}
                />
              </div>
              <div className="flexBetween gap-8 text-sm">
                <span>Sign In</span>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
