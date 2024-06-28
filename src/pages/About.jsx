import { motion } from "framer-motion";
import developerLight from "../images/regina.png";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-20 "
    >
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img src={developerLight} className="rounded-lg w-96" alt="" />
        </div>

        <div className="font-general-regular w-full sm:w-3/4 text-left mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iure
          ea libero dignissimos sunt recusandae. Molestias veritatis quidem
          totam asperiores accusamus minima quia illo accusantium eos at
          voluptatibus fugiat expedita, tempora velit? Temporibus atque
          voluptates cum iure distinctio assumenda, optio iusto, unde, suscipit
          sed repellat quaerat quia? Quisquam iste assumenda labore commodi
          asperiores ad dolores maxime ipsa omnis reprehenderit voluptatum eos
          architecto mollitia, amet magnam quasi fuga minus! Quae eos distinctio
          pariatur magnam aliquam! Tempore modi ullam assumenda blanditiis sint
          aut eos, fuga minus. Suscipit excepturi sapiente fugiat facilis
          adipisci et, ad ex dolor consequuntur! Sit quisquam voluptatibus
          officia ducimus.
        </div>
      </div>
    </motion.div>
  );
};

export default About;
