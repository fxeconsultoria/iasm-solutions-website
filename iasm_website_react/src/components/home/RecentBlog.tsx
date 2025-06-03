import { Link } from 'react-router-dom';

const RecentBlog = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Últimos Artigos</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Insights, tendências e conhecimento prático sobre IA estratégica e sua aplicação nos negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artigo 1 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Estratégia</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">12 Mai 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">5 Critérios para Priorizar Projetos de IA com Maior ROI</h3>
              <p className="text-[#e0e0e0] mb-4 line-clamp-3">
                Descubra como identificar e priorizar iniciativas de IA que trarão resultados concretos e rápidos para o seu negócio, evitando armadilhas comuns e investimentos sem retorno.
              </p>
              <Link 
                to="/blog/priorizar-projetos-ia-maior-roi" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler artigo completo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Artigo 2 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
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
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Governança</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">28 Abr 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Governança de IA: Como Estruturar para o Sucesso</h3>
              <p className="text-[#e0e0e0] mb-4 line-clamp-3">
                Um modelo robusto de governança é essencial para garantir que suas iniciativas de IA saiam do papel e gerem resultados consistentes. Conheça as melhores práticas e estruturas recomendadas.
              </p>
              <Link 
                to="/blog/governanca-ia-estruturar-sucesso" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler artigo completo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Artigo 3 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">ROI</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">15 Abr 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Como Calcular o ROI Real de Projetos de IA</h3>
              <p className="text-[#e0e0e0] mb-4 line-clamp-3">
                Métricas claras e metodologia de cálculo para demonstrar o retorno sobre investimento em iniciativas de IA, considerando benefícios tangíveis e intangíveis.
              </p>
              <Link 
                to="/blog/calcular-roi-real-projetos-ia" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler artigo completo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-transparent border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-3 rounded-md transition-colors"
          >
            <span>Ver Todos os Artigos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
