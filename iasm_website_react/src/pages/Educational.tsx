import { Link } from 'react-router-dom';

const Educational = () => {
  return (
    <div className="educational-page">
      <HeroSection />
      <ResourcesSection />
      <CoursesSection />
      <GlossarySection />
      <WebinarsSection />
      <DownloadableResources />
      <CallToAction />
    </div>
  );
};

// Hero Section para a página Educacional
const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#1a2f4a] to-[#0c1a2a] overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Centro de <span className="text-[#4a90e2]">Aprendizado</span> em IA
          </h1>
          <p className="text-xl text-[#e0e0e0] mb-8">
            Recursos educacionais, guias práticos e conhecimento especializado para impulsionar sua jornada de implementação estratégica de IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/educacional/recursos" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-3 rounded-md transition-colors text-center font-semibold"
            >
              Explorar Recursos
            </Link>
            <Link 
              to="/educacional/webinars" 
              className="border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-8 py-3 rounded-md transition-colors text-center font-semibold"
            >
              Participar de Webinars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção de Recursos Educacionais
const ResourcesSection = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Recursos Educacionais</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Conteúdos selecionados para ajudar sua empresa a navegar pelo universo da IA estratégica com confiança e clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recurso 1 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Guia Completo de IA para Executivos</h3>
              <p className="text-[#e0e0e0] mb-4">
                Um guia abrangente para líderes empresariais sobre como implementar IA estrategicamente, sem jargões técnicos e com foco em resultados práticos.
              </p>
              <Link 
                to="/educacional/recursos/guia-ia-executivos" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Acessar guia</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Recurso 2 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Calculadora de ROI para Projetos de IA</h3>
              <p className="text-[#e0e0e0] mb-4">
                Ferramenta interativa para estimar o retorno sobre investimento de diferentes iniciativas de IA, considerando custos, benefícios e tempo de implementação.
              </p>
              <Link 
                to="/educacional/recursos/calculadora-roi-ia" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Usar calculadora</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Recurso 3 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Quiz de Maturidade em IA</h3>
              <p className="text-[#e0e0e0] mb-4">
                Avalie o nível de maturidade da sua empresa em relação à implementação de IA e receba recomendações personalizadas para avançar.
              </p>
              <Link 
                to="/educacional/recursos/quiz-maturidade-ia" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Fazer o quiz</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/educacional/recursos" 
            className="inline-flex items-center bg-transparent border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-3 rounded-md transition-colors"
          >
            <span>Ver Todos os Recursos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Cursos
const CoursesSection = () => {
  return (
    <section className="py-20 bg-[#1a2f4a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Cursos e Workshops</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Capacitação especializada para equipes e líderes que desejam dominar a implementação estratégica de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Curso 1 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Workshop</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">8 horas</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Workshop: Construindo seu Roadmap de IA</h3>
              <p className="text-[#e0e0e0] mb-4">
                Workshop prático para equipes de liderança aprenderem a desenvolver um roadmap estratégico de IA alinhado aos objetivos de negócio.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Presencial ou remoto
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Até 15 participantes
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Material exclusivo incluído
                </li>
              </ul>
              <Link 
                to="/educacional/cursos/workshop-roadmap-ia" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          {/* Curso 2 */}
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
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Curso</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">4 semanas</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Governança de IA para Líderes</h3>
              <p className="text-[#e0e0e0] mb-4">
                Curso completo sobre como estruturar e implementar um modelo de governança eficaz para iniciativas de IA na sua empresa.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100% online
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certificado de conclusão
                </li>
                <li className="flex items-center text-[#e0e0e0]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4a90e2] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Mentoria individual
                </li>
              </ul>
              <Link 
                to="/educacional/cursos/governanca-ia-lideres" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/educacional/cursos" 
            className="inline-flex items-center text-[#4a90e2] hover:text-white transition-colors"
          >
            <span>Ver todos os cursos e workshops</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Glossário
const GlossarySection = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Glossário de IA</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Entenda os principais termos e conceitos de Inteligência Artificial sem jargões técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Termo 1 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">Machine Learning</h3>
            <p className="text-[#e0e0e0]">
              Técnica que permite aos computadores aprender padrões a partir de dados e melhorar seu desempenho em tarefas específicas sem serem explicitamente programados para isso.
            </p>
          </div>

          {/* Termo 2 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">Deep Learning</h3>
            <p className="text-[#e0e0e0]">
              Subconjunto do Machine Learning que utiliza redes neurais com múltiplas camadas para analisar diversos fatores de dados com uma estrutura semelhante ao cérebro humano.
            </p>
          </div>

          {/* Termo 3 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">NLP (Processamento de Linguagem Natural)</h3>
            <p className="text-[#e0e0e0]">
              Tecnologia que permite aos computadores entender, interpretar e gerar linguagem humana, possibilitando interações mais naturais entre humanos e máquinas.
            </p>
          </div>

          {/* Termo 4 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">Computer Vision</h3>
            <p className="text-[#e0e0e0]">
              Campo da IA que treina computadores para interpretar e entender o mundo visual, permitindo que máquinas identifiquem e processem imagens e vídeos.
            </p>
          </div>

          {/* Termo 5 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">Algoritmo</h3>
            <p className="text-[#e0e0e0]">
              Conjunto de regras ou instruções definidas para resolver um problema ou realizar uma tarefa específica, formando a base para o funcionamento de sistemas de IA.
            </p>
          </div>

          {/* Termo 6 */}
          <div className="bg-[#1a2f4a] rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">MLOps</h3>
            <p className="text-[#e0e0e0]">
              Conjunto de práticas que combina Machine Learning, DevOps e engenharia de dados para implantar e manter sistemas de IA em produção de forma confiável e eficiente.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/educacional/glossario" 
            className="inline-flex items-center bg-transparent border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-3 rounded-md transition-colors"
          >
            <span>Ver Glossário Completo</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Webinars
const WebinarsSection = () => {
  return (
    <section className="py-20 bg-[#1a2f4a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Webinars e Eventos</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Participe de sessões online com especialistas e aprenda sobre as melhores práticas e tendências em IA estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Webinar 1 - Próximo */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg border border-[#4a90e2]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#3498db] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Próximo
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-[#4a90e2] text-sm">15 de Junho, 2025 • 19:00</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Como Estruturar um Centro de Excelência em IA</h3>
              <p className="text-[#e0e0e0] mb-4">
                Neste webinar, discutiremos as melhores práticas para criar e gerenciar um Centro de Excelência em IA que impulsione a adoção e o sucesso das iniciativas em toda a organização.
              </p>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#2c4870] rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#4a90e2] font-semibold">MS</span>
                </div>
                <div>
                  <h4 className="text-[#c0c0c0] font-semibold">Marcos Santos</h4>
                  <p className="text-[#a0a0a0] text-sm">Diretor de IA, IASM Solutions</p>
                </div>
              </div>
              <Link 
                to="/educacional/webinars/centro-excelencia-ia" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Inscrever-se
              </Link>
            </div>
          </div>

          {/* Webinar 2 - Gravado */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[#2c4870] text-[#c0c0c0] px-3 py-1 rounded-full text-sm font-semibold">
                Gravado
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-[#4a90e2] text-sm">28 de Abril, 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Medindo o ROI de Projetos de IA: Além dos Números</h3>
              <p className="text-[#e0e0e0] mb-4">
                Uma análise aprofundada sobre como medir o retorno sobre investimento em iniciativas de IA, considerando tanto benefícios tangíveis quanto intangíveis.
              </p>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#2c4870] rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#4a90e2] font-semibold">CL</span>
                </div>
                <div>
                  <h4 className="text-[#c0c0c0] font-semibold">Carla Lima</h4>
                  <p className="text-[#a0a0a0] text-sm">Consultora Sênior, IASM Solutions</p>
                </div>
              </div>
              <Link 
                to="/educacional/webinars/roi-projetos-ia" 
                className="block text-center border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#0c1a2a] px-4 py-2 rounded-md transition-colors"
              >
                Assistir Gravação
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/educacional/webinars" 
            className="inline-flex items-center text-[#4a90e2] hover:text-white transition-colors"
          >
            <span>Ver todos os webinars e eventos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Recursos para Download
const DownloadableResources = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Recursos para Download</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            E-books, templates e ferramentas gratuitas para impulsionar sua estratégia de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recurso 1 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">E-book</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">32 páginas</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Guia Prático: Primeiros Passos com IA</h3>
              <p className="text-[#e0e0e0] mb-6">
                Um guia completo para empresas que estão começando sua jornada de implementação de IA, com exemplos práticos e casos de uso.
              </p>
              <Link 
                to="/educacional/downloads/guia-primeiros-passos-ia" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Download Gratuito
              </Link>
            </div>
          </div>

          {/* Recurso 2 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Template</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">Excel/Google Sheets</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Template de Priorização de Projetos de IA</h3>
              <p className="text-[#e0e0e0] mb-6">
                Planilha pronta para ajudar sua equipe a avaliar e priorizar iniciativas de IA com base em impacto, esforço e alinhamento estratégico.
              </p>
              <Link 
                to="/educacional/downloads/template-priorizacao-ia" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Download Gratuito
              </Link>
            </div>
          </div>

          {/* Recurso 3 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Checklist</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">PDF Interativo</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Checklist de Prontidão para IA</h3>
              <p className="text-[#e0e0e0] mb-6">
                Avalie a prontidão da sua empresa para implementar projetos de IA com este checklist abrangente que cobre dados, pessoas, processos e tecnologia.
              </p>
              <Link 
                to="/educacional/downloads/checklist-prontidao-ia" 
                className="block text-center bg-[#3498db] hover:bg-[#2980b9] text-white px-4 py-2 rounded-md transition-colors"
              >
                Download Gratuito
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/educacional/downloads" 
            className="inline-flex items-center bg-transparent border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-3 rounded-md transition-colors"
          >
            <span>Ver Todos os Downloads</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Call to Action
const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a2f4a] to-[#0c1a2a] relative overflow-hidden">
      {/* Hexagon Pattern Background (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons-cta-edu" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons-cta-edu)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#c0c0c0] mb-6">
            Precisa de ajuda personalizada?
          </h2>
          <p className="text-xl text-[#e0e0e0] mb-10 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para ajudar sua empresa a navegar pelo universo da IA com confiança e estratégia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contato" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-4 rounded-md transition-colors text-center font-semibold text-lg"
            >
              Fale com um Especialista
            </Link>
            <Link 
              to="/servicos" 
              className="border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-8 py-4 rounded-md transition-colors text-center font-semibold text-lg"
            >
              Conhecer Nossos Serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;
