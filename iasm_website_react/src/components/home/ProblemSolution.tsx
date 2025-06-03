import { Link } from 'react-router-dom';

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">O Desafio da IA nas Empresas</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Empresas médias e grandes enfrentam obstáculos significativos ao tentar implementar Inteligência Artificial de forma estratégica e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Problema */}
          <div className="bg-[#1a2f4a] rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#c0c0c0] mb-6">O Problema</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Falta de Clareza Estratégica</h4>
                  <p className="text-[#e0e0e0]">Dificuldade em identificar quais projetos de IA priorizar e como alinhar com objetivos de negócio.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Medo de Investimentos Equivocados</h4>
                  <p className="text-[#e0e0e0]">Receio de alocar recursos em iniciativas de IA que não trarão retorno adequado.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Complexidade Tecnológica</h4>
                  <p className="text-[#e0e0e0]">Confusão diante de múltiplas tecnologias, fornecedores e buzzwords do mercado de IA.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solução */}
          <div className="bg-[#1a2f4a] rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-[#c0c0c0] mb-6">Nossa Solução</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Diagnóstico Estratégico</h4>
                  <p className="text-[#e0e0e0]">Identificação precisa de onde a IA pode gerar maior impacto no seu negócio.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Roadmap Estruturado (IASM)</h4>
                  <p className="text-[#e0e0e0]">Plano de implementação personalizado com priorização clara de iniciativas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Governança Robusta</h4>
                  <p className="text-[#e0e0e0]">Acompanhamento e gestão para garantir que as iniciativas saiam do papel e gerem resultados reais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/servicos" 
            className="inline-flex items-center text-[#4a90e2] hover:text-white transition-colors"
          >
            <span>Conheça nossos serviços em detalhes</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
