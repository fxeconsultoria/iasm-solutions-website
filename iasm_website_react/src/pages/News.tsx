import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div className="news-page">
      <HeroSection />
      <LatestNews />
      <NewsCategories />
      <PressReleases />
      <IndustryUpdates />
      <Newsletter />
    </div>
  );
};

// Hero Section para a página de Notícias
const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-[#1a2f4a] to-[#0c1a2a] overflow-hidden">
      {/* Hexagon Pattern Background (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons-news" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons-news)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Notícias e <span className="text-[#4a90e2]">Atualizações</span>
          </h1>
          <p className="text-xl text-[#e0e0e0] mb-8">
            Fique por dentro das últimas novidades sobre IA estratégica, tendências do mercado e atualizações da IASM Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/noticias/categoria/tendencias" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-2 rounded-md transition-colors text-center font-semibold"
            >
              Tendências de IA
            </Link>
            <Link 
              to="/noticias/categoria/mercado" 
              className="border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-2 rounded-md transition-colors text-center font-semibold"
            >
              Mercado
            </Link>
            <Link 
              to="/noticias/categoria/iasm" 
              className="border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-2 rounded-md transition-colors text-center font-semibold"
            >
              IASM Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção de Últimas Notícias
const LatestNews = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0]">Últimas Notícias</h2>
          <div className="hidden md:flex items-center space-x-2">
            <button className="w-10 h-10 rounded-full bg-[#1a2f4a] flex items-center justify-center text-[#c0c0c0] hover:bg-[#2c4870] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1a2f4a] flex items-center justify-center text-[#c0c0c0] hover:bg-[#2c4870] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Notícia Principal */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Tendências</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">01 Jun 2025</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#c0c0c0] mb-3">Relatório Anual de Tendências em IA Estratégica 2025</h3>
              <p className="text-[#e0e0e0] mb-4">
                A IASM Solutions lança seu relatório anual com as principais tendências e previsões para o mercado de IA estratégica em 2025, destacando oportunidades e desafios para empresas brasileiras.
              </p>
              <Link 
                to="/noticias/relatorio-anual-tendencias-ia-2025" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler notícia completa</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Lista de Notícias Recentes */}
          <div className="space-y-6">
            {/* Notícia 1 */}
            <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-32 md:h-auto bg-[#2c4870] relative">
                  {/* Placeholder para imagem */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-2 py-1 rounded-full">Mercado</span>
                    <span className="text-[#a0a0a0] text-xs ml-auto">28 Mai 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#c0c0c0] mb-2">Investimentos em IA no Brasil crescem 45% no primeiro trimestre</h3>
                  <Link 
                    to="/noticias/investimentos-ia-brasil-crescem" 
                    className="text-[#4a90e2] hover:text-white transition-colors text-sm inline-flex items-center"
                  >
                    <span>Ler mais</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Notícia 2 */}
            <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-32 md:h-auto bg-[#2c4870] relative">
                  {/* Placeholder para imagem */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-2 py-1 rounded-full">IASM</span>
                    <span className="text-[#a0a0a0] text-xs ml-auto">25 Mai 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#c0c0c0] mb-2">IASM Solutions anuncia parceria estratégica com Microsoft</h3>
                  <Link 
                    to="/noticias/iasm-parceria-microsoft" 
                    className="text-[#4a90e2] hover:text-white transition-colors text-sm inline-flex items-center"
                  >
                    <span>Ler mais</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Notícia 3 */}
            <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-32 md:h-auto bg-[#2c4870] relative">
                  {/* Placeholder para imagem */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-2 py-1 rounded-full">Tendências</span>
                    <span className="text-[#a0a0a0] text-xs ml-auto">20 Mai 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#c0c0c0] mb-2">Estudo revela os 5 setores que mais se beneficiarão da IA em 2025</h3>
                  <Link 
                    to="/noticias/setores-beneficiados-ia-2025" 
                    className="text-[#4a90e2] hover:text-white transition-colors text-sm inline-flex items-center"
                  >
                    <span>Ler mais</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/noticias/todas" 
            className="inline-flex items-center bg-transparent border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-3 rounded-md transition-colors"
          >
            <span>Ver Todas as Notícias</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Categorias de Notícias
const NewsCategories = () => {
  return (
    <section className="py-20 bg-[#1a2f4a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Categorias</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Explore notícias e atualizações por tópicos específicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Categoria 1 */}
          <Link 
            to="/noticias/categoria/tendencias"
            className="bg-[#0c1a2a] rounded-lg p-8 text-center shadow-lg transition-transform hover:transform hover:scale-[1.02]"
          >
            <div className="w-16 h-16 bg-[#2c4870] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">Tendências de IA</h3>
            <p className="text-[#e0e0e0] mb-4">
              Últimas tendências, inovações e previsões para o futuro da IA estratégica.
            </p>
            <span className="text-[#4a90e2] inline-flex items-center">
              <span>Explorar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>

          {/* Categoria 2 */}
          <Link 
            to="/noticias/categoria/mercado"
            className="bg-[#0c1a2a] rounded-lg p-8 text-center shadow-lg transition-transform hover:transform hover:scale-[1.02]"
          >
            <div className="w-16 h-16 bg-[#2c4870] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">Mercado</h3>
            <p className="text-[#e0e0e0] mb-4">
              Análises de mercado, investimentos e movimentações no setor de IA.
            </p>
            <span className="text-[#4a90e2] inline-flex items-center">
              <span>Explorar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>

          {/* Categoria 3 */}
          <Link 
            to="/noticias/categoria/iasm"
            className="bg-[#0c1a2a] rounded-lg p-8 text-center shadow-lg transition-transform hover:transform hover:scale-[1.02]"
          >
            <div className="w-16 h-16 bg-[#2c4870] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#c0c0c0] mb-2">IASM Updates</h3>
            <p className="text-[#e0e0e0] mb-4">
              Novidades, parcerias e atualizações sobre a IASM Solutions.
            </p>
            <span className="text-[#4a90e2] inline-flex items-center">
              <span>Explorar</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Press Releases
const PressReleases = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0]">Press Releases</h2>
          <Link 
            to="/noticias/press-releases" 
            className="text-[#4a90e2] hover:text-white transition-colors hidden md:inline-flex items-center"
          >
            <span>Ver todos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Press Release 1 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Press Release</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">15 Mai 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">IASM Solutions expande operações para América Latina</h3>
              <p className="text-[#e0e0e0] mb-4">
                A IASM Solutions anuncia a expansão de suas operações para países da América Latina, com escritórios iniciais no Chile e Colômbia, como parte de sua estratégia de crescimento internacional.
              </p>
              <Link 
                to="/noticias/press-releases/iasm-expande-america-latina" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler comunicado completo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Press Release 2 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Press Release</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">02 Mai 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">IASM Solutions lança programa de certificação em Governança de IA</h3>
              <p className="text-[#e0e0e0] mb-4">
                Novo programa de certificação profissional visa capacitar líderes e especialistas em implementar e gerenciar estruturas robustas de governança para iniciativas de IA.
              </p>
              <Link 
                to="/noticias/press-releases/programa-certificacao-governanca" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler comunicado completo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/noticias/press-releases" 
            className="inline-flex items-center text-[#4a90e2] hover:text-white transition-colors"
          >
            <span>Ver todos os press releases</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Atualizações da Indústria
const IndustryUpdates = () => {
  return (
    <section className="py-20 bg-[#1a2f4a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">Atualizações da Indústria</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Fique por dentro das principais novidades e mudanças no setor de IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Atualização 1 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Regulação</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">10 Mai 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Brasil avança em marco regulatório para IA</h3>
              <p className="text-[#e0e0e0] mb-4">
                Congresso Nacional aprova projeto de lei que estabelece diretrizes para o desenvolvimento e uso de sistemas de IA no país.
              </p>
              <Link 
                to="/noticias/industria/brasil-marco-regulatorio-ia" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler mais</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Atualização 2 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Negócios</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">05 Mai 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Empresas brasileiras aumentam orçamento para IA em 60%</h3>
              <p className="text-[#e0e0e0] mb-4">
                Pesquisa revela que organizações nacionais estão priorizando investimentos em IA para ganhar vantagem competitiva.
              </p>
              <Link 
                to="/noticias/industria/empresas-brasileiras-orcamento-ia" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler mais</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Atualização 3 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
            <div className="h-48 bg-[#2c4870] relative">
              {/* Placeholder para imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#4a90e2]/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4a90e2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Tecnologia</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">01 Mai 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Avanços em IA generativa transformam processos de negócios</h3>
              <p className="text-[#e0e0e0] mb-4">
                Novas tecnologias de IA generativa estão revolucionando setores como marketing, design e desenvolvimento de produtos.
              </p>
              <Link 
                to="/noticias/industria/avancos-ia-generativa" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler mais</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/noticias/industria" 
            className="inline-flex items-center bg-transparent border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-3 rounded-md transition-colors"
          >
            <span>Ver Todas as Atualizações</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Newsletter
const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a2f4a] to-[#0c1a2a] relative overflow-hidden">
      {/* Hexagon Pattern Background (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons-newsletter" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons-newsletter)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#c0c0c0] mb-6">
            Fique por dentro das novidades
          </h2>
          <p className="text-xl text-[#e0e0e0] mb-10 max-w-2xl mx-auto">
            Assine nossa newsletter e receba as últimas notícias, artigos e insights sobre IA estratégica diretamente na sua caixa de entrada.
          </p>
          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="bg-[#0c1a2a] border border-[#2c4870] rounded-md px-6 py-4 text-white focus:outline-none focus:border-[#4a90e2] flex-grow"
              required
            />
            <button
              type="submit"
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-4 rounded-md transition-colors text-center font-semibold"
            >
              Inscrever-se
            </button>
          </form>
          <p className="text-[#a0a0a0] text-sm mt-4">
            Ao se inscrever, você concorda com nossa <Link to="/politica-de-privacidade" className="text-[#4a90e2] hover:text-white">Política de Privacidade</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;
