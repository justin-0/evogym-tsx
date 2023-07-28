import { motion } from "framer-motion";
import { SelectedPage } from "../types/SelectedPage";
import Headline from "./Headline";

import {
  HomeIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        // WHEN BENEFITS DIV ENTERS VIEWPORT SET SELECTED PAGE
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-5 md:w-3/5">
          <Headline text="MORE THAN JUST A GYM" />
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes for
            the perfect environment to reach your goals. We provide equal care
            to every one of our members.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
