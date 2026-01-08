import { Activity, Calendar, BarChart3, Users, Shield, Bell } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Registro de Atividades",
    description: "Documente sessões terapêuticas, exercícios e atividades diárias de forma rápida e organizada.",
  },
  {
    icon: BarChart3,
    title: "Gráficos de Progresso",
    description: "Visualize a evolução do paciente com relatórios visuais claros e fáceis de entender.",
  },
  {
    icon: Calendar,
    title: "Agenda Integrada",
    description: "Mande recados de eventos, compromissos e lembretes importantes em um só lugar.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Compartilhe informações entre terapeutas e familiares de forma segura e controlada.",
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Todas as informações são criptografadas e protegidas seguindo as melhores práticas.",
  },
  {
    icon: Bell,
    title: "Notificações",
    description: "Receba lembretes automáticos para registros, consultas e marcos importantes.",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground font-medium text-sm mb-4">
            Recursos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Tudo o que você precisa para um{" "}
            <span className="text-gradient-primary">acompanhamento completo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ferramentas pensadas para facilitar o dia a dia de quem cuida, 
            com foco na simplicidade e eficiência.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
