import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary-foreground/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/20 mb-8">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Comece a transformar o acompanhamento hoje
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais e famílias que já usam o Aba Fácil 
            para oferecer o melhor cuidado possível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="xl">
              Começar Grátis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Falar com Especialista
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/60 mt-8">
            Sem cartão de crédito • Teste grátis por 14 dias • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
