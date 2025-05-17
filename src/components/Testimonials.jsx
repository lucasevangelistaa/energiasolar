import { motion as Motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Residencial - Casa",
    content:
      "Instalei energia solar e minha conta de luz caiu de R$ 400 para R$ 20. Excelente serviço e atendimento!",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Comercial - Loja",
    content:
      "Fizeram toda a parte elétrica da minha loja nova, ficou perfeito e dentro do prazo combinado.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "Residencial - Apartamento",
    content:
      "Sistema de câmeras e automação para meu apartamento. Agora controlo tudo pelo celular, muito prático!",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-yellow-500">clientes</span> dizem
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-500"
                    } text-lg`}
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
