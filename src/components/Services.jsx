import { motion as Motion} from "framer-motion";
import {
  FiSun,
  FiZap,
  FiLock,
  FiVideo,
  FiSettings,
  FiDroplet,
} from "react-icons/fi";

const services = [
  {
    icon: <FiZap className="text-3xl" />,
    title: "Instalações Elétricas",
    description:
      "Residenciais e prediais completas, com materiais de qualidade e profissionais certificados.",
    color: "bg-yellow-500",
  },
  {
    icon: <FiSun className="text-3xl" />,
    title: "Energia Solar",
    description:
      "Sistemas fotovoltaicos que reduzem sua conta de luz em até 95% com retorno garantido.",
    color: "bg-orange-500",
  },
  {
    icon: <FiLock className="text-3xl" />,
    title: "Sistemas de Segurança",
    description:
      "Câmeras, alarmes e cercas elétricas para proteger seu patrimônio 24 horas por dia.",
    color: "bg-black",
  },
  {
    icon: <FiSettings className="text-3xl" />,
    title: "Automação Residencial",
    description:
      "Controle iluminação, temperatura e eletrodomésticos pelo celular de qualquer lugar.",
    color: "bg-yellow-500",
  },
  {
    icon: <FiVideo className="text-3xl" />,
    title: "Câmeras e Videoporte",
    description:
      "Sistemas de monitoramento e interfones com imagem para maior segurança e comodidade.",
    color: "bg-orange-500",
  },
  {
    icon: <FiDroplet className="text-3xl" />,
    title: "Bombas D'água",
    description:
      "Instalação e manutenção de sistemas de bombeamento para residências e empresas.",
    color: "bg-black",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-orange-500">Serviços</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas em elétrica e energia solar para residências e
            empresas.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${service.color} h-2`}></div>
              <div className="p-6">
                <div
                  className={`${
                    service.color === "bg-black" ? "text-black" : "text-white"
                  } w-16 h-16 ${
                    service.color
                  } rounded-full flex items-center justify-center mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
