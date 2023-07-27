import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "src/types/SelectedPage";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const hrefPageLowerCase = page
    .toLowerCase()
    .replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === hrefPageLowerCase ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${hrefPageLowerCase}`}
      onClick={() => setSelectedPage(hrefPageLowerCase)}
    >
      {page}
    </AnchorLink>
  );
};

export default NavLink;
