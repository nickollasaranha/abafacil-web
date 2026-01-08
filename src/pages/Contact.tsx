import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8 text-center">Entre em Contato</h1>
          
          <div className="max-w-md mx-auto bg-card border border-border/50 rounded-2xl p-8 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <p className="text-muted-foreground mb-6 text-lg">
              Tem alguma dúvida, sugestão ou precisa de suporte? Entre em contato conosco através do e-mail:
            </p>
            
            <a 
              href="mailto:contato@abafacil.app" 
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg"
            >
              contato@abafacil.app
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
