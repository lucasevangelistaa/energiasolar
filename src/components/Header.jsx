import { motion as Motion } from "framer-motion";
import {
  FiSun,
  FiZap,
  FiHome,
  FiLock,
  FiVideo,
  FiSettings,
} from "react-icons/fi";

export default function Header() {
  const navItems = [
    { name: "Início", icon: <FiHome />, target: "inicio" },
    { name: "Energia Solar", icon: <FiSun />, target: "servicos" },
    { name: "Instalações", icon: <FiZap />, target: "servicos" },
    { name: "Segurança", icon: <FiLock />, target: "servicos" },
    { name: "Automação", icon: <FiSettings />, target: "servicos" },
    { name: "Câmeras", icon: <FiVideo />, target: "servicos" },
  ];
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
    <Motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-black text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleScroll('inicio')}
        >
          <FiSun className="text-yellow-500 text-2xl" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            ENERGIA SOLAR
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Motion.div
              key={index}
              whileHover={{ scale: 1.05, color: '#f59e0b' }}
              className="flex items-center space-x-1 cursor-pointer"
              onClick={() => handleScroll(item.target)}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Motion.div>
          ))}
        </nav>
        
        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 px-4 py-2 rounded-full font-medium"
          onClick={() => handleScroll('contato')}
        >
          Contato
        </Motion.button>
      </div>
    </Motion.header>
  );
}
