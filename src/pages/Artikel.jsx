import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Artikel = () => {
  const [artikel, setArtikel] = useState([]);

  const fetchDataArtikel = async () => {
    try {
      const response = await axios.get(
        "https://high-pearle-istudent-e72a78db.koyeb.app/artikel"
      );
      setArtikel(response.data.allArtikel);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataArtikel();
  }, []);

  return (
    <div className="container mx-auto lg:px-20 px-10 sm:px-5">
      <section className="py-5 sm:py-10 mt-5">
        <div className="text-center mb-20">
          <p className="font-bold text-gray-800 text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            Artikel
          </p>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-10">
          {artikel.map((item) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, delay: 1 }}
              transition={{
                ease: "easeInOut",
                duration: 0.7,
                delay: 0.15,
              }}
            >
              <Link to={`/artikel/${item._id}`} aria-label={item.title}>
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer  overflow-hidden p-5 dark:bg-violet-200 bg-violet-50">
                  <img
                    src={item.img}
                    className="w-full h-64 object-cover rounded-xl"
                    alt={item.title}
                  />
                  <div className="text-center px-4 py-6 rounded-xl  h-48 flex flex-col justify-center">
                    <p className="font-general-medium text-lg md:text-xl mb-2">
                      {item.title}
                    </p>
                    <p>Oleh {item.penulis}</p>
                    <p> {item.tahun}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Artikel;
