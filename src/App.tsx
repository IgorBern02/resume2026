import { Section } from "./components/Section";
import { Project } from "./components/Project";

export default function App() {
  return (
    <main className="max-w-3xl mx-auto p-8 font-sans">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Igor Bernardes</h1>
        <p className="text-gray-600">
          Desenvolvedor Front-End | React | TypeScript
        </p>
        <div className="text-sm text-gray-700 mt-2">
          <p>Praia Grande - SP</p>
          <p>Email: igudevfrontend@gmail.com</p>
          <p>GitHub: github.com/IgorBern02</p>
        </div>
      </header>

      {/* Resumo */}
      <Section title="Resumo Profissional">
        <p className="text-sm text-gray-800">
          Desenvolvedor Front-End com foco em aplicações modernas utilizando
          React e TypeScript. Experiência prática em SPAs, consumo de APIs REST
          e organização de código com boas práticas de componentização.
        </p>
      </Section>

      {/* Stack */}
      <Section title="Stack Técnica">
        <ul className="text-sm space-y-1">
          <li>
            <strong>Linguagens:</strong> JavaScript, TypeScript, HTML5, CSS3
          </li>
          <li>
            <strong>Frontend:</strong> React, Vite, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express
          </li>
          <li>
            <strong>Ferramentas:</strong> Git, GitHub, Vercel
          </li>
        </ul>
      </Section>

      {/* Projetos */}
      <Section title="Projetos Relevantes">
        <Project
          title="Sistema Full Stack – React + Node"
          description="Aplicação completa com API REST em Node.js e frontend em React, estruturada de forma modular."
        />
        <Project
          title="Portfólio SPA – React + TypeScript"
          description="Aplicação single-page com navegação dinâmica, componentização e deploy em produção."
        />
        <Project
          title="API de Carros – Node.js"
          description="API RESTful com CRUD completo e organização por camadas."
        />
      </Section>

      {/* Formação */}
      <Section title="Formação">
        <p className="text-sm">
          Tecnólogo em Análise e Desenvolvimento de Sistemas – UNIP (2024)
        </p>
      </Section>
    </main>
  );
}
