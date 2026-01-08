import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-slate max-w-none text-muted-foreground">
            <p className="mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">1. Introdução</h2>
              <p className="mb-4">
                A sua privacidade é importante para o Aba Fácil. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos as suas informações quando você utiliza nosso aplicativo e website.
              </p>
              <p>
                Ao utilizar o Aba Fácil, você concorda com a coleta e uso de informações de acordo com esta política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">2. Coleta de Dados</h2>
              <p className="mb-4">
                Coletamos informações que você nos fornece diretamente, tais como:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Informações de cadastro (nome, e-mail, telefone);</li>
                <li>Dados dos pacientes (nome, idade, diagnósticos);</li>
                <li>Registros de atividades terapêuticas e progresso;</li>
                <li>Informações de pagamento (processadas por terceiros seguros).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">3. Uso das Informações</h2>
              <p className="mb-4">
                Utilizamos os dados coletados para:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Fornecer e manter o serviço;</li>
                <li>Gerar relatórios de progresso dos pacientes;</li>
                <li>Notificá-lo sobre alterações no serviço;</li>
                <li>Fornecer suporte ao cliente;</li>
                <li>Monitorar o uso do serviço para melhorias.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">4. Proteção de Dados</h2>
              <p className="mb-4">
                A segurança dos seus dados é importante para nós. Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">5. Compartilhamento de Dados</h2>
              <p className="mb-4">
                Não vendemos suas informações pessoais. Podemos compartilhar dados apenas:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Com provedores de serviço terceirizados que nos ajudam a operar o serviço;</li>
                <li>Para cumprir obrigações legais;</li>
                <li>Com seu consentimento explícito.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">6. Seus Direitos</h2>
              <p className="mb-4">
                Você tem direito a acessar, corrigir ou excluir seus dados pessoais a qualquer momento através das configurações da sua conta ou entrando em contato conosco.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">7. Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: contato@abafacil.app
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
