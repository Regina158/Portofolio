import { motion } from "framer-motion";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      }}
      className="container px-20 dark:bg-violet-200 bg-violet-50 rounded-xl shadow-xl mx-auto"
    >
      <div className="text-center text-2xl font-semibold pt-10">Contact Me</div>
      <div className="flex flex-col lg:flex-row py-5 lg:py-10 lg:mt-5">
        <div className="order-last lg:order-first w-full lg:w-1/2">
          <ContactForm />
        </div>
        <div className="order-first lg:order-last w-full lg:w-1/2">
          <ContactDetails />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
