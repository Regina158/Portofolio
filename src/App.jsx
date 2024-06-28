import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import "./App.css";
import Artikel from "./pages/Artikel";
import ArtikelDetail from "./pages/DetailArtikel";
import Contact from "./pages/Contact";
// import About from "./pages/About";
const Home = lazy(() => import("./pages/Home"));
export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppHeader />
      <Suspense fallback={""}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/:id" element={<ArtikelDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <AppFooter />
    </>
  );
}
