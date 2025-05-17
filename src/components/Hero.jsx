import { motion as Motion } from "framer-motion";
import { FiSun, FiZap, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Soluções Elétricas{" "}
              <span className="text-yellow-500">Inteligentes</span> Para Seu Lar
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Instalações, manutenções e sistemas de energia solar com qualidade
              e garantia. Deixe sua casa mais segura, eficiente e tecnológica.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 px-6 py-3 rounded-full font-medium flex items-center"
                onClick={() => handleScroll("contato")}
              >
                Solicitar Orçamento <FiArrowRight className="ml-2" />
              </Motion.button>

              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white px-6 py-3 rounded-full font-medium flex items-center"
                onClick={() => handleScroll("servicos")}
              >
                Nossos Serviços <FiZap className="ml-2" />
              </Motion.button>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

              <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-1 rounded-2xl">
                <div className="bg-black rounded-xl p-8">
                  <FiSun className="text-yellow-500 text-5xl mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Economize até 95% na sua conta de luz
                  </h3>
                  <p className="text-gray-300">
                    Com sistemas de energia solar fotovoltaica, você reduz
                    drasticamente seus gastos com energia elétrica.
                  </p>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
