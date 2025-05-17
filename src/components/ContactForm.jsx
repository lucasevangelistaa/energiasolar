import { motion as Motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

export default function ContactForm() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entre em <span className="text-orange-500">Contato</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Solicite um orçamento sem compromisso ou tire suas dúvidas sobre
              nossos serviços. Nossa equipe está pronta para atender você!
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-black text-yellow-500 p-2 rounded-full">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="font-bold">Telefone</h4>
                  <p className="text-gray-600">(XX) XXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black text-yellow-500 p-2 rounded-full">
                  <FiMail />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-600">contato@energiasolar.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black text-yellow-500 p-2 rounded-full">
                  <FiUser />
                </div>
                <div>
                  <h4 className="font-bold">Atendimento</h4>
                  <p className="text-gray-600">Seg-Sex: 8h às 18h</p>
                </div>
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <form className="p-8">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nome
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Telefone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Mensagem
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <FiMessageSquare className="text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>
              </div>

              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Enviar Mensagem
              </Motion.button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
