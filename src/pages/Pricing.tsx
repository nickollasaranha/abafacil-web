import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Terapeuta Individual",
      description: "Para profissionais autônomos que buscam organização.",
      price: "R$ 99,90",
      period: "/mês",
      features: [
        "Até 10 pacientes",
        "Registro ilimitado de sessões",
        "Gráficos de evolução básicos",
        "App para pais (visualização)",
        "Suporte por email"
      ],
      buttonText: "Começar Agora",
      popular: false,
    },
    {
      name: "Clínica Essencial",
      description: "Ideal para pequenas clínicas e consultórios em crescimento.",
      price: "R$ 549,90",
      period: "/mês",
      features: [
        "Até 100 pacientes",
        "Até 10 terapeutas",
        "Agenda compartilhada",
        "Relatórios personalizados",
        "Suporte prioritário"
      ],
      buttonText: "Contrate Agora",
      popular: true,
    },
    {
      name: "Rede / Instituição",
      description: "Solução completa para grandes clínicas e redes de atendimento.",
      price: "Sob Consulta",
      period: "",
      features: [
        "Pacientes ilimitados",
        "Terapeutas ilimitados",
        "Múltiplas unidades",
        "Treinamento dedicado",
        "Gerente de conta exclusivo"
      ],
      buttonText: "Falar com Consultor",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Planos que crescem com você
            </h1>
            <p className="text-xl text-muted-foreground">
              Escolha a opção ideal para simplificar o seu acompanhamento terapêutico, 
              seja você um profissional autônomo ou uma grande instituição.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`flex flex-col p-8 rounded-2xl bg-card border ${
                  plan.popular 
                    ? "border-primary shadow-lg scale-105 relative" 
                    : "border-border shadow-sm hover:shadow-md"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                    Mais Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm h-10">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="font-display font-bold text-4xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-secondary/10 border border-secondary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="text-muted-foreground mb-8">
              Entre em contato conosco para discutirmos necessidades específicas da sua clínica ou instituição.
            </p>
             <a 
              href="mailto:comercial@abafacil.app" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
