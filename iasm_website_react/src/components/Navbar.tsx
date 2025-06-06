import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Assuming path from components/Navbar.tsx
import LogoutButton from './auth/LogoutButton'; // Assuming path from components/Navbar.tsx

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isLoading } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-[#4a90e2] transition-colors">Home</Link>
            <Link to="/sobre" className="text-white hover:text-[#4a90e2] transition-colors">Sobre Nós</Link>
            <Link to="/servicos" className="text-white hover:text-[#4a90e2] transition-colors">Serviços</Link>
            <Link to="/educacional" className="text-white hover:text-[#4a90e2] transition-colors">Educacional</Link>
            {/* <Link to="/cases" className="text-white hover:text-[#4a90e2] transition-colors">Cases</Link> */}
            {/* <Link to="/blog" className="text-white hover:text-[#4a90e2] transition-colors">Blog</Link> */}
            {/* <Link to="/noticias" className="text-white hover:text-[#4a90e2] transition-colors">Notícias</Link> */}
            <Link to="/contato" className="text-white hover:text-[#4a90e2] transition-colors">Contato</Link>

            {!isLoading && user && (
              <>
                <Link to="/dashboard" className="text-white hover:text-[#4a90e2] transition-colors">Dashboard</Link>
                <Link to="/pgr" className="text-white hover:text-[#4a90e2] transition-colors">PGR</Link>
              </>
            )}
          </nav>

          {/* Auth Buttons / CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {!isLoading && user ? (
              <LogoutButton />
            ) : !isLoading ? (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-[#4a90e2] transition-colors px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-2 rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="h-10 w-24 bg-gray-700 animate-pulse rounded-md"></div> // Placeholder for loading
            )}
             {/* Original CTA - decide if it stays or is replaced by Login/Signup */}
             {/* <Link
              to="/servicos/diagnostico-express" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-2 rounded-md transition-colors"
            >
              Diagnóstico Express
            </Link> */}
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
              <Link to="/" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Home</Link>
              <Link to="/sobre" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Sobre Nós</Link>
              <Link to="/servicos" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Serviços</Link>
              <Link to="/educacional" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Educacional</Link>
              {/* <Link to="/cases" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Cases</Link> */}
              {/* <Link to="/blog" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Blog</Link> */}
              {/* <Link to="/noticias" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Notícias</Link> */}
              <Link to="/contato" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Contato</Link>

              {!isLoading && user && (
                <>
                  <Link to="/dashboard" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>Dashboard</Link>
                  <Link to="/pgr" className="text-white hover:text-[#4a90e2] transition-colors" onClick={closeMenu}>PGR</Link>
                </>
              )}

              <div className="mt-4 pt-4 border-t border-[#2c4870]">
                {!isLoading && user ? (
                  <LogoutButton />
                ) : !isLoading ? (
                  <>
                    <Link
                      to="/login"
                      className="block text-white hover:text-[#4a90e2] transition-colors py-2"
                      onClick={closeMenu}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors mt-2"
                      onClick={closeMenu}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : null}
              </div>
              {/* <Link
                to="/servicos/diagnostico-express" 
                className="bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors inline-block"
                onClick={closeMenu}
              >
                Diagnóstico Express
              </Link> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
