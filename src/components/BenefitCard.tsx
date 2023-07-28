import { motion } from "framer-motion";
import { SelectedPage } from "../types/SelectedPage";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  headline: string;
  icon: JSX.Element;
  paragraph: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const BenefitCard = ({ headline, icon, paragraph, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center "
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{headline}</h4>
      <p className="my-3">{paragraph}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
};

export default BenefitCard;
