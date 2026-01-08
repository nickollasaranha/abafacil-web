import { UserPlus, ClipboardList, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Cadastre o Paciente",
    description: "Crie um perfil com todas as informações relevantes do paciente em poucos minutos.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Registre as Atividades",
    description: "Adicione sessões, comportamentos, medicações e observações de forma simples e rápida.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Acompanhe o Progresso",
    description: "Visualize relatórios e gráficos que mostram a evolução ao longo do tempo.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Como Funciona
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Simples de usar,{" "}
            <span className="text-gradient-primary">poderoso nos resultados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comece a usar o Aba Fácil em três passos simples e veja a diferença no acompanhamento.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step number badge */}
              <div className="relative inline-flex mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-soft group-hover:shadow-hover transition-all duration-300 group-hover:scale-110">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-display font-bold text-sm flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              
              <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
