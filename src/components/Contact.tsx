import { motion } from "framer-motion";
import { SelectedPage } from "../types/SelectedPage";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      ></motion.div>
    </section>
  );
};

export default Contact;
