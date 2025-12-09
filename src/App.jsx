import React from "react";
import {
  Stethoscope,
  Users,
  ClipboardList,
  MessageSquare,
  FileText,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import TabsSections from "./components/TabSections";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#2F3542] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-azulClinico flex items-center justify-center text-white">
              <Stethoscope size={20} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold">Gestão Clínica</span>
              <span className="text-xs text-gray-500">
                Plataforma de Gestão de Processos Clínicos
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button href="#contato-form" variant="ghost" className="hidden md:inline-flex">
              Saiba mais
            </Button>
            <Button href="#contato-form" className="hidden md:inline-flex">
              Agendar demonstração
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-azulClinico text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                Acompanhando vidas com
                <span className="block">ciência, afeto e tecnologia.</span>
              </h1>
              <p className="text-base md:text-lg text-blue-50 max-w-lg">
                A Plataforma Gestão de Processos Clínicos foi criada para apoiar clínicas, terapeutas,
                supervisores e famílias no acompanhamento de crianças e jovens autistas. Um ecossistema
                simples, seguro e moderno que integra gestão clínica, evolução terapêutica, comunicação
                e administração financeira.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="#contato-form" className="bg-white text-blue-400 hover:bg-blue-50 font-semibold h-12 px-8 text-sm md:text-base">
                  Começar teste gratuito
                </Button>
                <Button href="#contato-form" variant="outline" className="border-white text-white h-12 px-7 text-sm md:text-base">
                  Falar com especialista
                </Button>
              </div>
              <p className="text-xs md:text-sm text-blue-100">
                Sem fidelidade. Onboarding guiado para toda a equipe.
              </p>
            </div>

            <div className="rounded-3xl">
              <img src="/dash.png" />
            </div>
          </div>
        </section>

        {/* Seções de valor */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-18">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cinzaProfissional">
                Gestão clínica completa em um único sistema
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Organize atendimentos, documentação, indicadores e comunicação da clínica em fluxos claros
                e intuitivos — da recepção à coordenação terapêutica.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="text-azulClinico mb-2" size={32} />
                  <CardTitle>Gestão e Documentação</CardTitle>
                  <CardDescription>
                    Organize atendimentos individuais e em grupo, cadastros de clientes, profissionais,
                    planos de saúde e clínicas em um só lugar.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <ClipboardList className="text-verdeEquilibrio mb-2" size={32} />
                  <CardTitle>Evolução terapêutica</CardTitle>
                  <CardDescription>
                    Registre evolução terapêutica em tempo real, acompanhe planos, avaliações e supervisões
                    com segurança e rastreabilidade.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="text-amareloEnergia mb-2" size={32} />
                  <CardTitle>Relatórios automatizados</CardTitle>
                  <CardDescription>
                    Emita relatórios e históricos clínicos de forma automatizada, com informações organizadas
                    por paciente, período ou profissional.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Integração e comunicação */}
        <section className="bg-[#E9EEF4] border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-18 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-cinzaProfissional mb-4">
                Integração e comunicação eficiente
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Todas as áreas da clínica conectadas: agenda, financeiro, contratos e indicadores de
                desempenho em um painel único.
              </p>

              <div className="space-y-4 text-sm md:text-base text-gray-700">
                <div className="flex gap-3">
                  <div className="mt-1">
                    <BarChart3 className="text-azulClinico" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-cinzaProfissional">Integração e monitoramento</p>
                    <p className="text-gray-600">
                      Integre agenda, finanças e contratos, monitorando indicadores de desempenho e evolução
                      terapêutica com clareza.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1">
                    <MessageSquare className="text-verdeEquilibrio" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-cinzaProfissional">Comunicação segura</p>
                    <p className="text-gray-600">
                      Mantenha uma comunicação segura com famílias e equipe, centralizando registros,
                      mensagens e evoluções importantes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1">
                    <ShieldCheck className="text-vermelhoAcao" size={22} />
                  </div>
                  <div>
                    <p className="font-medium text-cinzaProfissional">Segurança e responsabilidade</p>
                    <p className="text-gray-600">
                      Designed para garantir responsabilidade ética, confidencialidade de dados e apoio
                      qualificado às equipes clínicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Texto institucional</CardTitle>
                  <CardDescription>
                    A Plataforma Gestão de Processos Clínicos é um ambiente digital desenvolvido para
                    apoiar clínicas, terapeutas, supervisores e famílias no acompanhamento dos atendimentos
                    de crianças e jovens autistas.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Slogan da marca</CardTitle>
                  <CardDescription>
                    <span className="block mb-2 font-semibold">
                      “Acompanhando vidas com ciência e afeto.”
                    </span>
                    <span className="block">
                      “Gestão inteligente para um cuidado responsável.”
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção – Estrutura das Seções do Sistema */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Estrutura do Sistema
            </h2>
            <p className="text-lg opacity-80 mt-4">
              Navegue entre os módulos do sistema para entender como cada área foi organizada.
            </p>
          </div>

          <TabsSections />
        </section>


        {/* CTA final */}
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 py-14 md:py-18 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-cinzaProfissional mb-4">
              Pronto para organizar a rotina da sua clínica?
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mb-8">
              Modernize sua gestão com um sistema pensado para equipes multiprofissionais que acompanham
              cada processo com precisão, ética e organização.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="#contato-form" className="h-12 px-8 text-sm md:text-base">
                Agendar demonstração guiada
              </Button>
              <Button href="#contato-form" variant="outline" className="h-12 px-8 text-sm md:text-base">
                Receber apresentação completa
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Seção de Contato */}
      <section className="py-24 px-6 bg-white" id="contato-form">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Entre em Contato</h2>
          <p className="text-lg opacity-80 mt-4">
            Preencha o formulário e nossa equipe retornará em breve.
          </p>
        </div>

        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">Nome</label>
            <input
              className="h-12 px-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Seu nome"
              type="text"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">E-mail</label>
            <input
              className="h-12 px-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="seu@email.com"
              type="email"
            />
          </div>

          <div className="flex flex-col text-left md:col-span-2">
            <label className="font-semibold mb-1">Telefone</label>
            <input
              className="h-12 px-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="(00) 00000-0000"
              type="text"
            />
          </div>

          <div className="flex flex-col text-left md:col-span-2">
            <label className="font-semibold mb-1">Mensagem</label>
            <textarea
              className="px-4 py-3 rounded-xl border border-gray-300 shadow-sm h-32 resize-none focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Escreva sua mensagem..."
            ></textarea>
          </div>

          <button
            className="md:col-span-2 h-12 bg-blue-700 text-white font-semibold rounded-full shadow hover:bg-blue-800 transition"
            type="submit"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>


      {/* Footer */}
      <footer className="bg-cinzaProfissional text-white text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Gestão Clínica — Plataforma de Gestão de Processos Clínicos.</p>
          <div className="flex items-center gap-4">
            <button className="hover:underline">Política de Privacidade</button>
            <button className="hover:underline">Termos de Uso</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-[#F5F7FA] px-3 py-2.5">
      <p className="text-[11px] text-gray-500 mb-1">{label}</p>
      <p className="text-base font-semibold text-cinzaProfissional">{value}</p>
    </div>
  );
}

export default App;