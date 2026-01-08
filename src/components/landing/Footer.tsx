import { Heart, Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getLink = (hash: string) => {
    return isHome ? hash : `/${hash}`;
  }

  return (
    <footer className="py-12 md:py-16 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Aba Fácil" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-display font-bold text-xl text-background">
                Aba Fácil
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Simplificando o acompanhamento terapêutico para profissionais e famílias.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-background mb-4">Produto</h4>
            <ul className="space-y-3">
              <li><a href={getLink("#recursos")} className="text-muted hover:text-background transition-colors text-sm">Recursos</a></li>
              <li><Link to="/planos" className="text-muted hover:text-background transition-colors text-sm">Planos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted hover:text-background transition-colors text-sm">Sobre Nós</a></li>
              <li><Link to="/contato" className="text-muted hover:text-background transition-colors text-sm">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/termos-de-uso" className="text-muted hover:text-background transition-colors text-sm">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-muted hover:text-background transition-colors text-sm">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-muted/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © 2025 Aba Fácil. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/abafacilapp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Instagram className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
            </a>
            <a href="mailto:contato@abafacil.com" className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center hover:bg-primary transition-colors group">
              <Mail className="w-5 h-5 text-muted group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
