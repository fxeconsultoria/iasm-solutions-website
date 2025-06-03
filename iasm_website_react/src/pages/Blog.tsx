import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blog-page">
      <HeroSection />
      <FeaturedPosts />
      <AllPosts />
      <CategoriesSection />
      <Newsletter />
    </div>
  );
};

// Hero Section para a página do Blog
const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-[#1a2f4a] to-[#0c1a2a] overflow-hidden">
      {/* Hexagon Pattern Background (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons-blog" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons-blog)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Blog IASM: <span className="text-[#4a90e2]">Insights em IA</span>
          </h1>
          <p className="text-xl text-[#e0e0e0] mb-8">
            Artigos, análises e conhecimento prático sobre a aplicação estratégica da Inteligência Artificial nos negócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/blog/categoria/estrategia" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white px-6 py-2 rounded-md transition-colors text-center font-semibold"
            >
              Estratégia de IA
            </Link>
            <Link 
              to="/blog/categoria/governanca" 
              className="border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-2 rounded-md transition-colors text-center font-semibold"
            >
              Governança
            </Link>
            <Link 
              to="/blog/categoria/casos-de-uso" 
              className="border border-[#c0c0c0] text-[#c0c0c0] hover:bg-[#c0c0c0] hover:text-[#1a2f4a] px-6 py-2 rounded-md transition-colors text-center font-semibold"
            >
              Casos de Uso
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Seção de Posts em Destaque
const FeaturedPosts = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-12 text-center">Artigos em Destaque</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Post Destaque 1 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-[#2c4870] relative">
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
              <h3 className="text-2xl font-semibold text-[#c0c0c0] mb-3">5 Critérios para Priorizar Projetos de IA com Maior ROI</h3>
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

          {/* Post Destaque 2 */}
          <div className="bg-[#1a2f4a] rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-[#2c4870] relative">
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
              <h3 className="text-2xl font-semibold text-[#c0c0c0] mb-3">Governança de IA: Como Estruturar para o Sucesso</h3>
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
        </div>
      </div>
    </section>
  );
};

// Seção de Todos os Posts
const AllPosts = () => {
  return (
    <section className="py-20 bg-[#1a2f4a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-12 text-center">Todos os Artigos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
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

          {/* Post 2 */}
          <div className="bg-[#0c1a2a] rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-[1.02]">
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
              <div className="flex items-center mb-4">
                <span className="bg-[#2c4870] text-[#4a90e2] text-xs px-3 py-1 rounded-full">Casos de Uso</span>
                <span className="text-[#a0a0a0] text-sm ml-auto">05 Abr 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">IA no Varejo: Otimizando a Experiência do Cliente</h3>
              <p className="text-[#e0e0e0] mb-4 line-clamp-3">
                Exemplos práticos de como a Inteligência Artificial está transformando o setor varejista, desde a personalização de ofertas até a otimização de estoques.
              </p>
              <Link 
                to="/blog/ia-no-varejo-otimizando-experiencia" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler artigo completo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Post 3 */}
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
                <span className="text-[#a0a0a0] text-sm ml-auto">25 Mar 2025</span>
              </div>
              <h3 className="text-xl font-semibold text-[#c0c0c0] mb-3">Desmistificando MLOps: Da Teoria à Prática</h3>
              <p className="text-[#e0e0e0] mb-4 line-clamp-3">
                Entenda o que é MLOps e como implementar práticas eficientes para gerenciar o ciclo de vida de modelos de Machine Learning em produção.
              </p>
              <Link 
                to="/blog/desmistificando-mlops-teoria-pratica" 
                className="text-[#4a90e2] hover:text-white transition-colors inline-flex items-center"
              >
                <span>Ler artigo completo</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Adicionar mais posts aqui */}

        </div>

        {/* Paginação (Placeholder) */}
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="w-10 h-10 rounded-full bg-[#1a2f4a] flex items-center justify-center text-[#c0c0c0] hover:bg-[#2c4870] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#3498db] flex items-center justify-center text-white font-semibold">1</button>
            <button className="w-10 h-10 rounded-full bg-[#1a2f4a] flex items-center justify-center text-[#c0c0c0] hover:bg-[#2c4870] transition-colors">2</button>
            <button className="w-10 h-10 rounded-full bg-[#1a2f4a] flex items-center justify-center text-[#c0c0c0] hover:bg-[#2c4870] transition-colors">3</button>
            <span className="text-[#a0a0a0]">...</span>
            <button className="w-10 h-10 rounded-full bg-[#1a2f4a] flex items-center justify-center text-[#c0c0c0] hover:bg-[#2c4870] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

// Seção de Categorias
const CategoriesSection = () => {
  return (
    <section className="py-20 bg-[#0c1a2a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-12 text-center">Explorar por Categoria</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/blog/categoria/estrategia"
            className="bg-[#1a2f4a] hover:bg-[#2c4870] text-[#c0c0c0] px-6 py-3 rounded-full transition-colors"
          >
            Estratégia de IA
          </Link>
          <Link 
            to="/blog/categoria/governanca"
            className="bg-[#1a2f4a] hover:bg-[#2c4870] text-[#c0c0c0] px-6 py-3 rounded-full transition-colors"
          >
            Governança
          </Link>
          <Link 
            to="/blog/categoria/casos-de-uso"
            className="bg-[#1a2f4a] hover:bg-[#2c4870] text-[#c0c0c0] px-6 py-3 rounded-full transition-colors"
          >
            Casos de Uso
          </Link>
          <Link 
            to="/blog/categoria/tecnologia"
            className="bg-[#1a2f4a] hover:bg-[#2c4870] text-[#c0c0c0] px-6 py-3 rounded-full transition-colors"
          >
            Tecnologia
          </Link>
          <Link 
            to="/blog/categoria/roi"
            className="bg-[#1a2f4a] hover:bg-[#2c4870] text-[#c0c0c0] px-6 py-3 rounded-full transition-colors"
          >
            ROI
          </Link>
          <Link 
            to="/blog/categoria/tendencias"
            className="bg-[#1a2f4a] hover:bg-[#2c4870] text-[#c0c0c0] px-6 py-3 rounded-full transition-colors"
          >
            Tendências
          </Link>
        </div>
      </div>
    </section>
  );
};

// Seção de Newsletter (Reutilizada do News.tsx ou criar componente separado)
const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a2f4a] to-[#0c1a2a] relative overflow-hidden">
      {/* Hexagon Pattern Background (SVG) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons-newsletter-blog" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
            <polygon points="25,0 50,14.4 50,43.3 25,57.7 0,43.3 0,14.4" fill="none" stroke="#c0c0c0" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons-newsletter-blog)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#c0c0c0] mb-6">
            Receba nossos insights
          </h2>
          <p className="text-xl text-[#e0e0e0] mb-10 max-w-2xl mx-auto">
            Assine nossa newsletter e não perca nenhum artigo, análise ou novidade sobre IA estratégica.
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

export default Blog;
