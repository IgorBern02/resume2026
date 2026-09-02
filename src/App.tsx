import { Section } from "./components/Section";
import { Project } from "./components/Project";

export default function App() {
  return (
    <main className="max-w-3xl mx-auto p-8 font-sans">
      {/* Header */}
      <header className="mb-5">
        <h1 className="text-3xl font-bold">Igor Bernardes</h1>
<<<<<<< HEAD

        <div className="text-sm text-gray-700 mt-2">
          <p>Praia Grande - SP</p>
          <p>Telefone: (13) 99124-6604</p>
          <p>Email: igor.bernardes2@gmail.com</p>
=======
        <p className="text-gray-600">
          Desenvolvedor Front-End | React • TypeScript • Node.js
        </p>
        <div className="text-sm text-gray-700 mt-2 flex flex-col space-y-1">
          <p>Praia Grande - SP</p>
          <p>Email: igor.bernardes2@gmail.com</p>
          <a
            href="https://github.com/IgorBern02"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: https://github.com/IgorBern02
          </a>
          <a
            href="https://igorbernardesportfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio: https://igorbernardesportfolio.vercel.app/
          </a>
>>>>>>> 5e0dda15460719707014eb977c7156b383311667
        </div>
      </header>

      {/* Resumo */}
      <Section title="Resumo Profissional">
        <p className="text-sm text-gray-800">
<<<<<<< HEAD
          Atuar em área operacional ou administrativa, contribuindo com
          organização, responsabilidade e comprometimento. Busco oportunidade
          para crescimento profissional e desenvolvimento contínuo.
        </p>
      </Section>

      {/* Projetos */}
      <Section title="Experiência Profissional">
        <Project
          title="Repositor de Estoque - Caixa"
          local="Supermercado Empório Caiçara  - Praia Grande, SP"
          date="2020 - 2021 (4 meses)"
          activies={[
            "Organização de prateleiras e reposição de produtos",
            "Controle de estoque e comunicação de necessidades de reposição",
            "Apoio no caixa durante períodos de alta demanda",
          ]}
          description="Responsável por organizar e repor mercadorias, garantindo a disponibilidade dos produtos para os clientes."
=======
          Desenvolvedor Front-End formado em Análise e Desenvolvimento de
          Sistemas, com experiência prática no desenvolvimento de aplicações
          utilizando React, TypeScript e Node.js. Tenho foco em criar interfaces
          modernas, consumir APIs REST e desenvolver soluções escaláveis. Busco
          minha primeira oportunidade para contribuir com projetos reais e
          continuar evoluindo tecnicamente.
        </p>
      </Section>

      {/* Competências */}
      <Section title="Competências">
        <ul className="text-sm space-y-1">
          <li>Desenvolvimento Front-End com React e TypeScript</li>
          <li>Desenvolvimento de interfaces web responsivas</li>
          <li>Conhecimentos em Back-End com Node.js e Express</li>
          <li>Consumo de APIs REST e integração com backend</li>
          <li>Componentização e reutilização de código em React</li>
          <li>Versionamento de código com Git e GitHub</li>
          <li>Deploy de aplicações em Vercel</li>
          <li>Aprendizado contínuo e boa capacidade de adaptação</li>
          <li>Pensamento analítico</li>
          <li>Resolução de problemas</li>
          <li>Trabalho em equipe</li>
          <li>Aprendizado rápido</li>
          <li>Comunicação</li>
        </ul>
      </Section>

      {/* Stack */}
      <Section title="Stack Técnica">
        <ul className="text-sm space-y-1">
          <li>
            <strong>Linguagens:</strong> JavaScript, TypeScript
          </li>
          <li>
            <strong>Frontend:</strong> Html, Css, React, Vite, Tailwind CSS,
            Responsividade, Componentização, Consumo de APIs REST, Hooks, React
            Router
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express, REST APIs, JWT, CRUD
          </li>
          <li>
            <strong>Ferramentas:</strong> Git, GitHub, Vercel, Render
          </li>
        </ul>
      </Section>

      {/* Projetos */}
      <Section title="Projetos Relevantes">
        {/* <Project
          title="DevEvents – React + Node"
          description="Um site para consultar eventos de tecnologia, com backend em Node.js e frontend em React, consumindo uma API REST para exibir os eventos mais recentes."
        /> */}
        <Project
          title="Portfólio SPA – React + TypeScript"
          description="Desenvolvi um portfólio responsivo para apresentar meus projetos, habilidades e trajetória como desenvolvedor Front-End. A aplicação possui interface moderna, animações, seção de projetos com demonstrações e links para o GitHub, formulário de contato e deploy contínuo na Vercel. O projeto foi desenvolvido com foco em performance, responsividade e experiência do usuário."
          demoLink="https://igorbernardesportfolio.vercel.app/"
          githubLink="https://github.com/IgorBern02/portfolio_2025"
        />
        <Project
          title="TaskFlowPro - React + Node.js"
          description="Sistema full stack de gerenciamento de tarefas com autenticação JWT, CRUD completo, organização por usuários, Backend Node + Express e Frontend React + TypeScript, deploy em produção."
          demoLink="https://taskflowpro-nine.vercel.app/"
          githubLink="https://github.com/IgorBern02/taskflowpro"
>>>>>>> 5e0dda15460719707014eb977c7156b383311667
        />
      </Section>
      <Project
        title="Auxiliar / Montador de Móveis - Marcenaria"
        local="Praia Grande, SP e São Paulo, SP"
        date="2021 - 2022"
        activies={[
          "Preparação e organização de materiais e ferramentas",
          "Apoio e posteriormente execução da instalação de móveis",
          "Lixamento e acabamento para garantia de qualidade",
          "Organização do ambiente de trabalho e cumprimento de prazos",
        ]}
        description="Iniciei como auxiliar e evoluí para montador de móveis, atuando na preparação, montagem e acabamento de móveis sob medida."
      />

      {/* Formação */}
      <Section title="Formação">
        <p className="text-sm">
          Tecnólogo em Análise e Desenvolvimento de Sistemas - UNIP - 2024
        </p>
      </Section>

<<<<<<< HEAD
      {/* Habilidades */}
      <Section title="Habilidades">
        <ul className="list-disc pl-5 text-sm text-gray-800">
          <li>Organização e atenção aos detalhes</li>
          <li>Responsabilidade e comprometimento</li>
          <li>Trabalho em equipe e comunicação</li>
        </ul>
=======
      {/* Idioma */}
      <Section title="Idioma">
        <p className="text-sm">Português - Nativo</p>
        <p className="text-sm">Inglês - Intermediário</p>
>>>>>>> 5e0dda15460719707014eb977c7156b383311667
      </Section>
    </main>
  );
}
