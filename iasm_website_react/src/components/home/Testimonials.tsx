import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#1a2f4a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c0c0c0] mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-[#e0e0e0] max-w-3xl mx-auto">
            Conheça as experiências de empresas que transformaram sua abordagem de IA com nossa consultoria estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-[#0c1a2a] rounded-lg p-8 shadow-lg relative">
            <div className="absolute top-4 left-4 text-[#4a90e2] opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-[#e0e0e0] mb-6 italic">
                "O Diagnóstico Express da IASM foi fundamental para entendermos onde a IA poderia realmente fazer a diferença no nosso negócio. Em duas semanas, tínhamos um plano claro e priorizado, o que nos deu segurança para iniciar os primeiros projetos."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#4a90e2] font-semibold">RC</span>
                </div>
                <div>
                  <h4 className="text-[#c0c0c0] font-semibold">Ricardo Costa</h4>
                  <p className="text-[#a0a0a0] text-sm">CTO, TechSolutions Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-[#0c1a2a] rounded-lg p-8 shadow-lg relative">
            <div className="absolute top-4 left-4 text-[#4a90e2] opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-[#e0e0e0] mb-6 italic">
                "Estávamos perdidos com tantas opções de IA. A IASM nos trouxe clareza estratégica e uma abordagem prática. O roadmap que construímos juntos está sendo executado e já vemos os primeiros resultados na eficiência operacional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#4a90e2] font-semibold">AS</span>
                </div>
                <div>
                  <h4 className="text-[#c0c0c0] font-semibold">Ana Silva</h4>
                  <p className="text-[#a0a0a0] text-sm">Diretora de Inovação, Grupo Nexus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-[#0c1a2a] rounded-lg p-8 shadow-lg relative">
            <div className="absolute top-4 left-4 text-[#4a90e2] opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="pt-6">
              <p className="text-[#e0e0e0] mb-6 italic">
                "A capacidade da equipe IASM de conectar a tecnologia aos desafios reais do nosso negócio foi impressionante. Eles não venderam apenas IA, venderam soluções que geram valor. O PMO mensal tem sido essencial para manter os projetos no trilho."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#2c4870] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#4a90e2] font-semibold">MO</span>
                </div>
                <div>
                  <h4 className="text-[#c0c0c0] font-semibold">Marcelo Oliveira</h4>
                  <p className="text-[#a0a0a0] text-sm">CEO, LogisTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/cases" 
            className="inline-flex items-center text-[#4a90e2] hover:text-white transition-colors"
          >
            <span>Ver todos os cases de sucesso</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
