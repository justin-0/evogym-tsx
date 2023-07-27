import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/SelectedPage";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

const ActionButton = ({ setSelectedPage, children }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href="#contactus"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
