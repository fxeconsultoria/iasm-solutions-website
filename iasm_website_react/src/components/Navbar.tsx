import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0c1a2a] shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/src/assets/images/logo.png" 
              alt="IASM Solutions" 
              className="h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#4a90e2] transition-colors">
              Home
            </Link>
            <Link to="/sobre" className="text-white hover:text-[#4a90e2] transition-colors">
              Sobre Nós
            </Link>
            <Link to="/servicos" className="text-white hover:text-[#4a90e2] transition-colors">
              Serviços
            </Link>
            <Link to="/educacional" className="text-white hover:text-[#4a90e2] transition-colors">
              Educacional
            </Link>
            <Link to="/cases" className="text-white hover:text-[#4a90e2] transition-colors">
              Cases
            </Link>
            <Link to="/blog" className="text-white hover:text-[#4a90e2] transition-colors">
              Blog
            </Link>
            <Link to="/noticias" className="text-white hover:text-[#4a90e2] transition-colors">
              Notícias
            </Link>
            <Link to="/contato" className="text-white hover:text-[#4a90e2] transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              to="/servicos/diagnostico-express" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-2 rounded-md transition-colors"
            >
              Diagnóstico Express
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-[#2c4870]">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-[#4a90e2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/sobre" 
                className="text-white hover:text-[#4a90e2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/servicos" 
                className="text-white hover:text-[#4a90e2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/educacional" 
                className="text-white hover:text-[#4a90e2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Educacional
              </Link>
              <Link 
                to="/cases" 
                className="text-white hover:text-[#4a90e2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cases
              </Link>
              <Link 
                to="/blog" 
                className="text-white hover:text-[#4a90e2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/noticias" 
                className="text-white hover:text-[#4a90e2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias
              </Link>
              <Link 
                to="/contato" 
                className="text-white hover:text-[#4a90e2] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link 
                to="/servicos/diagnostico-express" 
                className="bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Diagnóstico Express
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
