import { Section } from "./components/Section";
import { Project } from "./components/Project";

export default function App() {
  return (
    <main className="max-w-3xl mx-auto p-8 font-sans">
      {/* Header */}
      <header className="mb-5">
        <h1 className="text-3xl font-bold">Igor Bernardes</h1>

        <div className="text-sm text-gray-700 mt-2">
          <p>Praia Grande - SP</p>
          <p>Telefone: (13) 99124-6604</p>
          <p>Email: igor.bernardes2@gmail.com</p>
        </div>
      </header>

      {/* Resumo */}
      <Section title="Resumo Profissional">
        <p className="text-sm text-gray-800">
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
          Tecnólogo em Análise e Desenvolvimento de Sistemas – UNIP (2024)
        </p>
      </Section>

      {/* Habilidades */}
      <Section title="Habilidades">
        <ul className="list-disc pl-5 text-sm text-gray-800">
          <li>Organização e atenção aos detalhes</li>
          <li>Responsabilidade e comprometimento</li>
          <li>Trabalho em equipe e comunicação</li>
        </ul>
      </Section>
    </main>
  );
}
