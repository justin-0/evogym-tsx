import { useState } from "react";
import NavLink from "./NavLink";
import ActionButton from "./ActionButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.png";
import { SelectedPage } from "../types/SelectedPage";
import useMediaQuery from "../hooks/useMediaQuery";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const isAboveMdScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`flexBetween fixed top-0 z-30 w-full py-6 ${
          isTopOfPage ? "" : "bg-primary-100 drop-shadow"
        }`}
      >
        <div className="flexBetween mx-auto w-5/6">
          <div className="flexBetween w-full gap-16">
            {/* Left Side Nav */}
            <img src={Logo} alt="logo" />
            {/* Right Side Nav */}
            {isAboveMdScreens ? (
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
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {!isAboveMdScreens && mobileMenu && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setMobileMenu(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[30%] flex flex-col gap-10 text-2xl">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
