import { motion as Motion } from "framer-motion";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSun
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <FiSun className="text-yellow-500 text-2xl" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                ENERGIA SOLAR
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Soluções completas em elétrica e energia solar para residências e
              empresas.
            </p>
            <div className="flex space-x-4">
              <Motion.a
                whileHover={{ y: -3, color: "#3b5998" }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <FiFacebook className="text-xl" />
              </Motion.a>
              <Motion.a
                whileHover={{ y: -3, color: "#E1306C" }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <FiInstagram className="text-xl" />
              </Motion.a>
              <Motion.a
                whileHover={{ y: -3, color: "#0077B5" }}
                href="#"
                className="text-gray-400 hover:text-white"
              >
                <FiLinkedin className="text-xl" />
              </Motion.a>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Energia Solar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Instalações Elétricas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Sistemas de Segurança
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Automação Residencial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Manutenção Elétrica
                </a>
              </li>
            </ul>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-500">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiMapPin className="text-yellow-500 mt-1" />
                <span className="text-gray-400">
                  Rua Elétrica, 123 - Centro
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <FiPhone className="text-yellow-500 mt-1" />
                <span className="text-gray-400">(XX) XXXX-XXXX</span>
              </li>
              <li className="flex items-start space-x-2">
                <FiMail className="text-yellow-500 mt-1" />
                <span className="text-gray-400">contato@energiasolar.com</span>
              </li>
            </ul>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
        >
          <p>
            &copy; {new Date().getFullYear()} ENERGIA SOLAR. Todos os direitos
            reservados.
          </p>
          <p className="mt-2">"Deus é Luz! ✨"</p>
        </Motion.div>
      </div>
    </footer>
  );
}
