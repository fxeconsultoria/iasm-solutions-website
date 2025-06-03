import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-[#1a2f4a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Nossos Serviços Estratégicos</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Oferecemos soluções personalizadas para cada etapa da sua jornada de implementação de IA, desde o diagnóstico inicial até a governança contínua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Serviço 1 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Diagnóstico Express</h3>
              <p className="text-[#e0e0e0] mb-4">
                Avaliação rápida e estratégica para identificar onde a IA pode gerar maior impacto no seu negócio, com recomendações práticas e priorizadas.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Duração: 1-2 semanas
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Relatório completo
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Recomendações acionáveis
                </li>
              </ul>
              <Link 
                to="/servicos/diagnostico-express" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Serviço 2 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Roadmap Estratégico</h3>
              <p className="text-[#e0e0e0] mb-4">
                Plano detalhado de implementação de IA, com priorização de iniciativas, estimativas de recursos e cronograma estruturado.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Visão de curto e longo prazo
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priorização estratégica
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Estimativa de ROI
                </li>
              </ul>
              <Link 
                to="/servicos/roadmap-estrategico" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Serviço 3 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">PMO IA Mensal</h3>
              <p className="text-[#e0e0e0] mb-4">
                Acompanhamento contínuo e governança robusta para garantir que as iniciativas de IA sejam executadas e gerem resultados concretos.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reuniões periódicas
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gestão de projetos
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Relatórios de progresso
                </li>
              </ul>
              <Link 
                to="/servicos/pmo-ia" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/servicos" 
            className="inline-flex items-center bg-transparent border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-3 rounded-md transition-colors"
          >
            <span>Ver Todos os Serviços</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
