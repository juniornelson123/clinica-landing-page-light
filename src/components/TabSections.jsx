import React from "react";

export default function TabsSections() {
  const [active, setActive] = React.useState("cadastros");

  const tabs = {
    cadastros: {
      title: "Cadastros Gerais",
      items: [
        "Clientes",
        "Prestadores de Serviço",
        "Planos de Saúde",
        "Usuários",
        "Clínicas",
        "Importar Clientes",
      ],
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=60",
    },
    terapeutica: {
      title: "Gestão Terapêutica",
      items: [
        "Avaliações",
        "Tipos de Avaliação",
        "Serviços Terapêuticos",
        "Atendimentos",
        "Relatório de Atendimentos",
      ],
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=60",
    },
    contratos: {
      title: "Contratos & Pacotes",
      items: [
        "Contratos",
        "Pacotes",
        "Configuração de Contratos",
        "Tipo de Proposta de Serviço",
        "Configuração de Faixas",
      ],
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=60",
    },
    financeiro: {
      title: "Financeiro",
      items: [
        "Contas a Receber",
        "Recebíveis",
        "Boletos",
        "Notas Fiscais",
        "Custos Mensais",
        "Ranking de Prestadores de Serviço",
      ],
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=60",
    },
    configuracoes: {
      title: "Configurações Avançadas",
      items: [
        "Configurações do Sistema",
        "Notificações",
        "Tipos de Registro Nacional",
        "Tipos de Custo",
      ],
      image:
        "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=60",
    },
    outros: {
      title: "Outros Cadastros",
      items: [
        "Tipos de Formação",
        "Planos",
        "Chamados",
        "Tipos de Chamado",
      ],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=60",
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Botões */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              active === key
                ? "bg-blue-700 text-white border-blue-700 shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tabs[key].title}
          </button>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="bg-gray-50 p-10 rounded-2xl shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-10 text-center">
          {tabs[active].title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Coluna 1 — imagem */}
          <div className="w-full">
            <img
              src={tabs[active].image}
              alt="print"
              className="w-full h-72 md:h-80 rounded-2xl shadow-lg border border-gray-200 object-cover object-top"
            />
          </div>

          {/* Coluna 2 — lista */}
          <div>
            <ul className="space-y-4 text-gray-700 text-lg">
              {tabs[active].items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-blue-700 text-2xl leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
