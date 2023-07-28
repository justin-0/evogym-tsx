import { motion } from "framer-motion";
import { SelectedPage } from "../types/SelectedPage";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import Headline from "./Headline";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const {
    formState: { errors },
    register,
    trigger,
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) e.preventDefault();
  };

  return (
    <section
      id={`${SelectedPage.ContactUs}`}
      className="mx-auto w-5/6 pb-32 pt-24 "
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Heading */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Headline text="JOIN NOW TO GET IN SHAPE" />
          <p className="my-5 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            sequi assumenda provident similique, perspiciatis, ad enim alias
            inventore laboriosam sit autem nihil, maxime minima earum maiores
            excepturi deleniti. Culpa, explicabo!
          </p>
        </motion.div>

        {/* Form */}

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ddb72250c6e0bf22915458ad8e0b038b"
              method="POST"
            >
              <input
                type="text"
                className="inputs"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "This field is limited to 100 characters"}
                </p>
              )}
              <input
                type="email"
                className="inputs"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "pattern" && "Email address is invalid"}
                </p>
              )}
              <textarea
                className="inputs"
                placeholder="MESSAGE"
                rows={5}
                {...register("message", {
                  required: true,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
