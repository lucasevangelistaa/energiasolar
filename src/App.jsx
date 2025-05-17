import { motion as Motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="contato">
          <ContactForm />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
}
