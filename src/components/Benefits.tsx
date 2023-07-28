import { motion } from "framer-motion";
import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";
import { SelectedPage } from "../types/SelectedPage";
import Headline from "./Headline";
import BenefitCard from "./BenefitCard";

import {
  UserGroupIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import ActionButton from "./ActionButton";

type BenefitType = {
  icon: ReactElement<any, any>;
  headline: string;
  paragraph: string;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    headline: "State of the Art Facilities",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ex",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    headline: "100's of Classes",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ex",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    headline: "Expert Trainers",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ex",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

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
        {/* SECTION HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Headline text="MORE THAN JUST A GYM" />
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes for
            the perfect environment to reach your goals. We provide equal care
            to every one of our members.
          </p>
        </motion.div>
        {/* BENEFITS SECTION */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitCard
              key={benefit.headline}
              headline={benefit.headline}
              icon={benefit.icon}
              paragraph={benefit.paragraph}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Image & Description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Image */}
          <img
            className="mx-auto"
            alt="benefits-page"
            src={BenefitsPageGraphic}
          />
          {/* Description */}
          <div>
            {/* Headline Component */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:-z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Headline text="MILLIONS OF HAPPY MEMBERS GETTING FIT" />
                </motion.div>
              </div>
            </div>
            {/* Paragraph */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
                facere velit sapiente delectus tempore, reprehenderit aspernatur
                fugit sit quia in totam sint minus odio ratione. Quaerat ratione
                laboriosam reiciendis quos itaque odio nam animi doloribus
                quidem nesciunt! Nulla suscipit nihil cum, deserunt eius eum,
                incidunt soluta magni molestias, ut voluptate?
              </p>
              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                illo dolore adipisci cupiditate, totam voluptatem accusantium
                eos eum temporibus ipsam consequatur modi porro facere, nesciunt
                tempore quibusdam at, sed inventore veritatis voluptas id
                molestiae vitae. Hic quis accusantium similique dolorem itaque
                quisquam aut corrupti enim aliquid? Incidunt tempore natus quo?
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:-z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
