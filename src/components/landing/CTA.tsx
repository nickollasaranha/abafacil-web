import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

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
          <img src="/logo.png" alt="Aba Fácil" className="inline-block w-16 h-16 rounded-full object-cover mb-8" />
          
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Comece a transformar o acompanhamento hoje
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais e famílias que já usam o Aba Fácil 
            para oferecer o melhor cuidado possível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/planos">
              <Button variant="heroOutline" size="xl">
                Usar na minha unidade
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              Falar com Especialista
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/60 mt-8">
            Veja planos específicos para sua unidade. Disponível para todo o Brasil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
