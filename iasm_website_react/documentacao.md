# Documentação do Site IASM Solutions

## Visão Geral
Este documento fornece uma visão geral da estrutura e organização do site da IASM Solutions, desenvolvido com React e Tailwind CSS. O site foi projetado para ser responsivo, moderno e alinhado com a identidade visual da empresa.

## Estrutura do Projeto
O projeto está organizado da seguinte forma:

```
iasm_website_react/
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logo.png
│   ├── components/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── Statistics.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── RecentBlog.tsx
│   │   │   └── CallToAction.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── RootLayout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Educational.tsx
│   │   ├── Cases.tsx
│   │   ├── Blog.tsx
│   │   ├── News.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   └── main.tsx
```

## Páginas Principais

### Home
A página inicial apresenta uma visão geral da empresa, destacando os principais serviços, problemas que a empresa resolve, estatísticas, depoimentos de clientes e chamadas para ação.

### Sobre
Página institucional com informações sobre a empresa, sua missão, visão e valores.

### Serviços
Detalhamento dos serviços oferecidos pela IASM Solutions, incluindo Diagnóstico Express, Roadmap Estratégico e PMO IA Mensal.

### Educacional
Centro de aprendizado com recursos educacionais, cursos, workshops, glossário de IA e webinars.

### Blog
Artigos e insights sobre IA estratégica, organizados por categorias e com destaque para os mais recentes.

### Notícias
Atualizações sobre a empresa, o mercado de IA e tendências do setor.

### Contato
Formulário de contato e informações para comunicação com a empresa.

## Componentes Reutilizáveis

### Navbar
Barra de navegação responsiva com menu mobile e desktop.

### Footer
Rodapé com links rápidos, informações de contato e formulário de newsletter.

### CallToAction
Componente de chamada para ação utilizado em várias páginas.

## Paleta de Cores
- Azul escuro principal: #1a2f4a
- Azul escuro secundário: #0c1a2a
- Azul médio: #2c4870
- Azul destaque: #4a90e2
- Azul botões: #3498db
- Azul botões hover: #2980b9
- Cinza prateado: #c0c0c0
- Cinza claro: #e0e0e0
- Cinza médio: #a0a0a0

## Responsividade
O site foi desenvolvido com design responsivo, adaptando-se a diferentes tamanhos de tela:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Próximos Passos
1. Adicionar imagens hiper-realistas nos placeholders
2. Preencher com conteúdo real
3. Implementar funcionalidades dinâmicas (formulários, filtros, etc.)
4. Realizar testes de usabilidade
5. Otimizar para SEO

## Requisitos para Implantação
- Node.js 16+
- npm ou yarn
- Servidor web com suporte a aplicações React
