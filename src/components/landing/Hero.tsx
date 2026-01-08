import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-soft">
      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-soft" />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Cuidado e acompanhamento simplificados</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Acompanhe o progresso com{" "}
              <span className="text-gradient-primary">carinho e precisão</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              O Aba Fácil ajuda terapeutas e pais a registrar atividades, 
              monitorar saúde e acompanhar o desenvolvimento de pacientes 
              com autismo de forma simples e organizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                Começar Grátis
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground mb-4">
                Usado por profissionais em todo o Brasil
              </p>
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-warm border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-foreground">+2.500</p>
                  <p className="text-sm text-muted-foreground">Profissionais ativos</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Aba Fácil - Acompanhamento terapêutico"
                className="w-full rounded-3xl shadow-card animate-float"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-2xl -z-10 animate-float-delayed" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full -z-10 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
