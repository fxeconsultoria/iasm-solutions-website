import { Link } from 'react-router-dom';

const Statistics = () => {
  return (
    <section className="py-16 bg-[#0c1a2a] relative overflow-hidden">
      {/* Hexagon Pattern Background (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons-stats" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons-stats)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Estatística 1 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 text-center shadow-lg">
            <div className="w-16 h-16 bg-[#2c4870] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-[#c0c0c0] mb-2">50+</div>
            <div className="text-[#e0e0e0]">Clientes Atendidos</div>
          </div>

          {/* Estatística 2 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 text-center shadow-lg">
            <div className="w-16 h-16 bg-[#2c4870] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-[#c0c0c0] mb-2">30%</div>
            <div className="text-[#e0e0e0]">Redução Média de Custos</div>
          </div>

          {/* Estatística 3 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 text-center shadow-lg">
            <div className="w-16 h-16 bg-[#2c4870] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-[#c0c0c0] mb-2">85%</div>
            <div className="text-[#e0e0e0]">Taxa de Implementação</div>
          </div>

          {/* Estatística 4 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 text-center shadow-lg">
            <div className="w-16 h-16 bg-[#2c4870] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-[#c0c0c0] mb-2">95%</div>
            <div className="text-[#e0e0e0]">Satisfação dos Clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
