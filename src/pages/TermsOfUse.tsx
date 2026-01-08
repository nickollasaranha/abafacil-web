import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8">Termos de Uso</h1>
          
          <div className="prose prose-slate max-w-none text-muted-foreground">
            <p className="mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="mb-4">
                Ao acessar e usar o aplicativo Aba Fácil, você aceita e concorda em estar vinculado aos termos e disposições deste acordo. Além disso, ao usar os serviços particulares deste aplicativo, você estará sujeito a quaisquer regras ou diretrizes publicadas aplicáveis a tais serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">2. Descrição do Serviço</h2>
              <p className="mb-4">
                O Aba Fácil é uma plataforma de gestão e acompanhamento terapêutico projetada para terapeutas e pais de crianças com autismo. O serviço permite o registro de sessões, acompanhamento de progresso, gestão de agenda e comunicação entre as partes interessadas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">3. Cadastro e Segurança</h2>
              <p className="mb-4">
                Para acessar certas funcionalidades do aplicativo, você deverá criar uma conta. Você é responsável por manter a confidencialidade de sua senha e conta, e é totalmente responsável por todas as atividades que ocorram sob sua senha ou conta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">4. Conduta do Usuário</h2>
              <p className="mb-4">
                Você concorda em não usar o serviço para:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Violar qualquer lei local, estadual, nacional ou internacional aplicável;</li>
                <li>Transmitir qualquer conteúdo que seja ilegal, prejudicial, ameaçador ou abusivo;</li>
                <li>Falsificar sua identidade ou afiliação com qualquer pessoa ou entidade.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">5. Propriedade Intelectual</h2>
              <p className="mb-4">
                Todo o conteúdo incluído neste aplicativo, como textos, gráficos, logotipos, ícones, imagens e software, é propriedade do Aba Fácil ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">6. Limitação de Responsabilidade</h2>
              <p className="mb-4">
                O Aba Fácil não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar o serviço.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">7. Modificações dos Termos</h2>
              <p className="mb-4">
                Reservamo-nos o direito de alterar estes termos de uso a qualquer momento sem aviso prévio. O uso continuado do serviço após tais alterações constitui sua aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">8. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: contato@abafacil.app
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
