import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#1a2f4a] to-[#0c1a2a] overflow-hidden">
      {/* Hexagon Pattern Background (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transformando IA em <span className="text-[#4a90e2]">Resultados Reais</span>
            </h1>
            <p className="text-xl text-[#e0e0e0] mb-8 max-w-lg">
              Consultoria estratégica e personalizada para empresas que buscam implementar Inteligência Artificial de forma prática e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/servicos/diagnostico-express" 
                className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-3 rounded-md transition-colors text-center font-semibold"
              >
                Diagnóstico Express
              </Link>
              <Link 
                to="/contato" 
                className="border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-8 py-3 rounded-md transition-colors text-center font-semibold"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Placeholder para imagem hiper-realista */}
            <div className="relative w-full max-w-md aspect-square bg-[#2c4870] rounded-lg overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f4a]/50 to-[#0c1a2a]/50"></div>
              <div className="text-center p-8 relative z-10">
                <div className="w-24 h-24 mx-auto mb-4 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <p className="text-[#c0c0c0] text-sm">Imagem hiper-realista de IA estratégica será inserida aqui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
