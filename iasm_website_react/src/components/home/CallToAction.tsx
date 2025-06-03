import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a2f4a] to-[#0c1a2a] relative overflow-hidden">
      {/* Hexagon Pattern Background (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons-cta" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons-cta)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#c0c0c0] mb-6">
            Pronto para transformar IA em resultados reais?
          </h2>
          <p className="text-xl text-[#e0e0e0] mb-10 max-w-2xl mx-auto">
            Inicie sua jornada estratégica de IA com nosso Diagnóstico Express e descubra onde a inteligência artificial pode gerar maior impacto no seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/servicos/diagnostico-express" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-4 rounded-md transition-colors text-center font-semibold text-lg"
            >
              Solicitar Diagnóstico Express
            </Link>
            <Link 
              to="/contato" 
              className="border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-8 py-4 rounded-md transition-colors text-center font-semibold text-lg"
            >
              Agendar Reunião Estratégica
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
