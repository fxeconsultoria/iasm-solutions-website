import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0c1a2a] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/src/assets/images/logo.png" 
                alt="IASM Solutions" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-[#e0e0e0] text-sm mb-4">
              Na IASM Solutions, transformamos IA em resultados reais. Oferecemos consultoria estratégica e personalizada para empresas que buscam implementar IA de forma prática e eficiente.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0c0c0] hover:text-[#4a90e2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0c0c0] hover:text-[#4a90e2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0c0c0] hover:text-[#4a90e2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-[#c0c0c0] font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  Cases
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-[#c0c0c0] font-semibold text-lg mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos/diagnostico-express" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  Diagnóstico Express
                </Link>
              </li>
              <li>
                <Link to="/servicos/roadmap-estrategico" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  Roadmap Estratégico
                </Link>
              </li>
              <li>
                <Link to="/servicos/pmo-ia" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  PMO IA
                </Link>
              </li>
              <li>
                <Link to="/servicos/workshops" className="text-[#e0e0e0] hover:text-[#4a90e2] transition-colors">
                  Workshops e Treinamentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#c0c0c0] font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-[#e0e0e0] text-sm mb-4">
              Inscreva-se para receber novidades, artigos e insights sobre IA estratégica.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-[#1a2f4a] border border-[#2c4870] rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#4a90e2]"
                required
              />
              <button
                type="submit"
                className="bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#2c4870] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#a0a0a0] text-sm">
            &copy; {new Date().getFullYear()} IASM Solutions. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/termos-de-uso" className="text-[#a0a0a0] text-sm hover:text-[#4a90e2] transition-colors">
              Termos de Uso
            </Link>
            <Link to="/politica-de-privacidade" className="text-[#a0a0a0] text-sm hover:text-[#4a90e2] transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
