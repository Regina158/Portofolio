import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArtikelDetail = () => {
  const { id } = useParams();
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArtikelDetail = async () => {
    try {
      const response = await axios.get(
        `https://high-pearle-istudent-e72a78db.koyeb.app/artikel/${id}`
      );
      setArtikel(response.data.artikelById);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
      setLoading(false);
    }
  };
  console.log(artikel);
  useEffect(() => {
    fetchArtikelDetail();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">{error}</p>;

  return (
    <div className="container mx-auto px-20  rounded-3xl">
      <section className="py-5 sm:py-10 mt-5 dark:text-white ">
        <div className="text-center mb-20">
          <h1 className="font-bold  text-gray-800 dark:text-white text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            {artikel.title}
          </h1>
          <p>{artikel.penulis}</p>
          <p>{artikel.tahun}</p>
        </div>
        <div className="text-center mb-20">
          <img src={artikel.img} alt={artikel.title} className="mx-auto" />
        </div>
        <div className="sm:px-40 ">
          <h1 className="font-bold  text-gray-800 text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
            {artikel.title}
          </h1>
          <br />
        </div>
        <div className="sm:px-40 text-justify">
          {artikel.content.map((artikel, index) => (
            <>
              <p className="" key={index}>
                {artikel}
              </p>
              <br />
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArtikelDetail;
