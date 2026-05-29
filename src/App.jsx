import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

    </Routes>
  );
}