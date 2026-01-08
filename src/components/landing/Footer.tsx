import { Heart, Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-background">
                Aba Fácil
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Simplificando o acompanhamento terapêutico para profissionais e famílias.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Produto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Recursos</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Preços</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Segurança</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Carreiras</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Termos de Uso</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">LGPD</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © 2025 Aba Fácil. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Instagram className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Facebook className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Linkedin className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Mail className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
