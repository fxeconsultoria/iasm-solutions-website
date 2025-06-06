# Documentação Técnica do Projeto IASEM

## Tabela de Conteúdos
1.  [Visão Geral](#visão-geral)
2.  [Stack Tecnológico](#stack-tecnológico)
3.  [Configuração e Integração com Supabase](#configuração-e-integração-com-supabase)
4.  [Estrutura do Projeto Frontend](#estrutura-do-projeto-frontend)
5.  [Modelagem de Dados](#modelagem-de-dados)
    1.  [Esquema do Banco de Dados (SQL)](#esquema-do-banco-de-dados-sql)
    2.  [Interfaces TypeScript](#interfaces-typescript)
6.  [Autenticação de Usuários](#autenticação-de-usuários)
    1.  [Fluxo de Autenticação](#fluxo-de-autenticação)
    2.  [Componentes e Contextos Chave](#componentes-e-contextos-chave)
7.  [Módulos da Aplicação](#módulos-da-aplicação)
    1.  [Dashboard Principal](#dashboard-principal)
    2.  [Módulo de Avaliação PGR (Programa de Gerenciamento de Riscos)](#módulo-de-avaliação-pgr-programa-de-gerenciamento-de-riscos)
8.  [Integração com WhatsApp (Conceitual)](#integração-com-whatsapp-conceitual)

---

## 1. Visão Geral
Este documento contém detalhes técnicos, decisões de arquitetura e guias para o desenvolvimento do projeto IASEM (Intelligent Assessment for Safety and Environmental Management). O IASEM é uma plataforma SaaS projetada para facilitar a criação, gerenciamento e acompanhamento de Programas de Gerenciamento de Riscos (PGR) e outras avaliações de segurança e meio ambiente.

---

## 2. Stack Tecnológico
-   **Frontend:** React com TypeScript, Vite, TailwindCSS, ShadCN UI
-   **Backend-as-a-Service (BaaS):** Supabase (PostgreSQL, Supabase Auth, Supabase Storage, Supabase Functions - *ainda não utilizadas*)
-   **Controle de Versão:** Git, GitHub

---

## 3. Configuração e Integração com Supabase
A integração com o Supabase é central para o backend da aplicação.

-   **Cliente Supabase:** A inicialização do cliente Supabase é feita no arquivo `src/lib/supabaseClient.ts`. Este arquivo utiliza variáveis de ambiente para configurar a URL do projeto Supabase e a chave anônima (anon key).
-   **Variáveis de Ambiente:**
    -   `VITE_SUPABASE_URL`: A URL única do projeto Supabase.
    -   `VITE_SUPABASE_ANON_KEY`: A chave pública anônima para interagir com o Supabase.
    -   Essas variáveis são armazenadas em um arquivo `.env` na raiz do diretório `iasm_website_react`. Este arquivo `.env` deve ser incluído no `.gitignore` para não ser commitado no repositório.
-   **Utilização:** O cliente Supabase exportado de `supabaseClient.ts` é utilizado em toda a aplicação para interações com o banco de dados (operações CRUD), autenticação e, futuramente, storage.

---

## 4. Estrutura do Projeto Frontend
```
iasm_website_react/
├── public/                   # Arquivos estáticos públicos
├── src/
│   ├── assets/               # Imagens, fontes, etc.
│   ├── components/           # Componentes React reutilizáveis
│   │   ├── auth/             # Componentes específicos de autenticação
│   │   ├── dashboard/        # Componentes para o Dashboard Principal
│   │   ├── pgr/              # Componentes para o módulo PGR
│   │   └── ui/               # Componentes de UI (ShadCN)
│   ├── contexts/             # Contextos React (ex: AuthContext.tsx)
│   ├── hooks/                # Hooks customizados (ex: useAuth.ts está em contexts)
│   ├── layouts/              # Layouts de página (ex: RootLayout.tsx)
│   ├── lib/                  # Bibliotecas e clientes (ex: supabaseClient.ts)
│   ├── pages/                # Componentes de página mapeados para rotas
│   │   ├── auth/             # Páginas de autenticação (LoginPage.tsx, etc.)
│   │   └── pgr/              # Páginas do módulo PGR
│   ├── styles/               # Estilos globais (App.css) - OBS: TailwindCSS é primário
│   ├── types/                # Definições globais TypeScript (database.ts)
│   ├── App.tsx               # Configuração de rotas e provedores globais
│   └── main.tsx              # Ponto de entrada da aplicação
├── .env                      # Variáveis de ambiente (NÃO COMMITAR)
├── .gitignore
├── index.html                # HTML principal da SPA
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js         # Configuração do PostCSS (para Tailwind)
├── tailwind.config.js        # Configuração do TailwindCSS
├── tsconfig.json             # Configuração do TypeScript
├── tsconfig.node.json
└── vite.config.ts            # Configuração do Vite
```
*Nota: Alguns diretórios como `services` (para lógica de API mais abstrata) ou `utils` (para funções utilitárias genéricas) podem ser adicionados conforme a necessidade.*

---

## 5. Modelagem de Dados

### 5.1. Esquema do Banco de Dados (SQL)
O esquema do banco de dados PostgreSQL gerenciado pelo Supabase é definido no arquivo `iasm_website_react/supabase_schema.sql`. Este arquivo contém as instruções DDL (`CREATE TABLE`, etc.) para todas as entidades da aplicação. As tabelas principais incluem:

-   `user_profiles`: Estende a tabela `auth.users` do Supabase Auth, adicionando informações específicas do perfil do usuário, como `full_name`, `avatar_url`, e `role` (ex: 'consultant', 'manager', 'employee'). O `id` desta tabela é uma chave estrangeira para `auth.users.id`.
-   `companies`: Armazena informações sobre as empresas clientes que serão avaliadas (ex: nome, CNPJ, informações de contato).
-   `pgr_assessments`: Contém os metadados de cada avaliação PGR realizada, como `company_id` (a qual empresa se refere), `consultant_id` (qual consultor realizou), data da avaliação, status, etc.
-   `risk_factors`: Um catálogo de fatores de risco genéricos que podem ser identificados nas avaliações (ex: descrição, categoria, severidade, probabilidade, normas NR relacionadas).
-   `assessment_risks`: Tabela de junção que conecta uma `PgrAssessment` específica a um `RiskFactor` genérico, permitindo adicionar observações e detalhes contextuais sobre aquele risco naquela avaliação particular.
-   `action_items`: Descreve as ações corretivas ou preventivas a serem tomadas, geralmente vinculadas a um `AssessmentRisk` ou a uma `PgrAssessment` como um todo. Inclui descrição, responsável, prazo e status.

### 5.2. Interfaces TypeScript
As interfaces TypeScript correspondentes às tabelas do banco de dados estão definidas em `src/types/database.ts`. Essas interfaces garantem a tipagem correta dos dados quando manipulados no frontend. Exemplos: `UserProfile`, `Company`, `PgrAssessment`, `RiskFactor`, etc.

---

## 6. Autenticação de Usuários

### 6.1. Fluxo de Autenticação
A autenticação é gerenciada pelo Supabase Auth. O fluxo básico inclui:
-   **Sign Up (Cadastro):** Novos usuários podem se cadastrar fornecendo um email e senha. O Supabase Auth lida com a criação do usuário. (Pode envolver confirmação por email dependendo da configuração do Supabase).
-   **Login (Entrada):** Usuários existentes entram com email e senha. O Supabase Auth valida as credenciais e retorna uma sessão.
-   **Logout (Saída):** Invalida a sessão do usuário no Supabase.
-   **Persistência de Sessão:** O Supabase Auth gerencia a persistência da sessão, tipicamente usando `localStorage`.

### 6.2. Componentes e Contextos Chave
-   **`src/contexts/AuthContext.tsx` (`useAuth`):**
    -   Provê o estado da sessão de autenticação (`session`, `user`, `isLoading`) para toda a aplicação.
    -   Expõe a função `signOut`.
    -   Escuta as mudanças de estado de autenticação do Supabase (`onAuthStateChange`) para atualizar o contexto automaticamente.
-   **`src/components/auth/ProtectedRoute.tsx`:**
    -   Um componente de ordem superior que envolve rotas que exigem autenticação.
    -   Verifica se há um usuário logado usando o `AuthContext`.
    -   Redireciona para a página de login (`/login`) se o usuário não estiver autenticado.
    -   Renderiza o conteúdo da rota protegida se o usuário estiver autenticado.
-   **Páginas de Autenticação (`src/pages/auth/`):**
    -   `LoginPage.tsx`: Contém o `LoginForm.tsx` para entrada de usuários.
    -   `SignUpPage.tsx`: Contém o `SignUpForm.tsx` para cadastro de novos usuários.
    -   `AuthCallbackPage.tsx`: Página para lidar com redirecionamentos do Supabase Auth (ex: após confirmação de email, embora o fluxo atual seja focado em email/senha simples).
-   **Componentes de Formulário de Autenticação (`src/components/auth/`):**
    -   `LoginForm.tsx`: Componente de formulário com campos para email/senha e lógica para chamar `supabase.auth.signInWithPassword()`.
    -   `SignUpForm.tsx`: Componente de formulário com campos para email/senha e lógica para chamar `supabase.auth.signUp()`.
    -   `LogoutButton.tsx`: Componente de botão que chama a função `signOut` do `AuthContext`.

---

## 7. Módulos da Aplicação

### 7.1. Dashboard Principal
-   **Propósito:** Servir como a página inicial para usuários logados, oferecendo uma visão geral e acesso rápido às funcionalidades principais.
-   **Localização:** `src/pages/DashboardPage.tsx`.
-   **Estrutura:**
    -   Apresenta um título como "PGR Monitoring Dashboard".
    -   Layout com seções para:
        *   **Key Performance Indicators (KPIs):** Exibe métricas chave (ex: número de avaliações ativas). Utiliza o componente `KpiCard.tsx`.
        *   **Visual Insights (Gráficos):** Espaços reservados para gráficos (ex: "Avaliações por Status"). Utiliza o componente `ChartPlaceholder.tsx`.
        *   **Recent Activity:** Lista de atividades recentes no sistema. Utiliza o componente `ActivityItem.tsx`.
    -   O `LogoutButton` está acessível nesta página.
-   **Componentes Associados (`src/components/dashboard/`):**
    -   `KpiCard.tsx`: Para exibir um único KPI.
    -   `ActivityItem.tsx`: Para exibir uma linha de atividade recente.
    -   `ChartPlaceholder.tsx`: Para demarcar áreas de gráficos.

### 7.2. Módulo de Avaliação PGR (Programa de Gerenciamento de Riscos)
-   **Propósito:** Permitir que consultores e gestores criem, gerenciem e visualizem avaliações PGR.
-   **Páginas Principais (`src/pages/pgr/`):**
    *   `PgrDashboardPage.tsx`: Painel principal do módulo PGR. Lista as avaliações existentes (usando `AssessmentList.tsx`) e oferece a opção de criar uma nova avaliação.
    *   `NewAssessmentPage.tsx`: Página para iniciar a criação de uma nova avaliação PGR. Contém placeholders para formulários de detalhes da avaliação (`NewAssessmentForm.tsx`) e seleção de fatores de risco (`RiskFactorSelector.tsx`).
    *   `AssessmentDetailPage.tsx`: Página para exibir os detalhes completos de uma avaliação PGR específica. Atualmente é um placeholder que mostra o ID da avaliação.
-   **Componentes Chave (`src/components/pgr/`):**
    *   `AssessmentList.tsx`: Componente para listar as avaliações PGR (atualmente com dados mockados).
    *   `NewAssessmentForm.tsx`: Formulário básico para os detalhes iniciais de uma nova avaliação (placeholder para campos como nome, data, empresa).
    *   `RiskFactorSelector.tsx`: Componente para selecionar fatores de risco aplicáveis a uma avaliação (atualmente com dados mockados e funcionalidade de seleção básica).
-   **Proteção:** Todas as rotas do módulo PGR são protegidas e exigem que o usuário esteja autenticado.

---

## 8. Integração com WhatsApp (Conceitual)

Esta seção descreve as opções de integração do WhatsApp para o projeto IASEM, focando em como "viabilizar as avaliações" e outras comunicações relevantes.

### 8.1. Métodos de Integração Pesquisados

#### a. Links "Click-to-Chat" (wa.me/)

*   **Como funciona:**
    *   Utiliza URLs formatadas como `https://wa.me/<numerotelefone>?text=<mensagemurlencoded>`.
    *   Ao clicar no link, o WhatsApp (móvel ou web) abre uma conversa com o número e a mensagem pré-preenchida. O usuário precisa confirmar o envio.
*   **Prós:** Simples, gratuito, funciona em todas as plataformas.
*   **Contras:** Requer ação manual do usuário para enviar, sem confirmação de envio/recebimento, não ideal para automação.
*   **Adequação para o Projeto:** Limitado. Útil para envio manual de links de avaliação pelo consultor.

#### b. WhatsApp Business Platform (Cloud API)

*   **Como funciona:**
    *   API robusta da Meta para comunicação programática. Hospedada pela Meta.
    *   Requer WABA, número de telefone comercial, verificação da empresa.
    *   Suporta mensagens de conversa (iniciadas pelo usuário) e mensagens de modelo (iniciadas pelo negócio, exigem aprovação e opt-in).
*   **Prós:** Automação completa, ideal para notificações e lembretes, escalável, suporta webhooks e interatividade.
*   **Contras:** Configuração complexa, custos baseados em conversas, políticas estritas, aprovação de modelos.
*   **Adequação para o Projeto:** Muito adequado para enviar links de avaliação, notificações de conclusão e lembretes automaticamente.

#### c. Provedores de API de Terceiros (Business Solution Providers - BSPs)

*   **Como funciona:** Intermediários que facilitam o acesso à WhatsApp Business Platform, oferecendo ferramentas adicionais.
*   **Prós:** Simplificam onboarding, podem oferecer SDKs, painéis, suporte.
*   **Contras:** Custo adicional, dependência de terceiros.
*   **Adequação para o Projeto:** Boa opção para acelerar implementação e reduzir complexidade, dependendo do custo-benefício.

### 8.2. Casos de Uso para o Projeto IASEM
1.  **Envio de Link de Avaliação Único para o Avaliador.**
2.  **Notificação de Conclusão de Avaliação para Gestores/Consultores.**
3.  **Lembretes para Avaliações Pendentes ou Itens de Ação.**
    *(Fluxos conceituais detalhados para cada caso de uso foram omitidos aqui para brevidade, mas estão presentes na versão anterior desta seção e podem ser consultados se necessário.)*

### 8.3. Pré-requisitos e Considerações
*   **Click-to-Chat:** Número do destinatário, WhatsApp instalado pelo remetente.
*   **WhatsApp Business Platform:** Número de telefone dedicado, conta no Meta Business Manager, verificação da empresa, WABA, opt-in do usuário, aprovação de modelos de mensagem, conformidade com políticas, entendimento dos custos.

### 8.4. Recomendação Preliminar para o IASEM
*   **MVP:** Click-to-Chat para envio manual de links.
*   **Solução Escalável:** WhatsApp Business Platform (Cloud API, diretamente ou via BSP) para automação completa.

---
*Nota: Esta documentação é um documento vivo e será atualizada conforme o projeto evolui.*
