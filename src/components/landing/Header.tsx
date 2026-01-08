import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Apple, Play } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Aba Fácil
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Recursos
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#conheca-o-app" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Conheça o App
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Depoimentos
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Apple className="w-4 h-4" />
                App Store
              </Button>
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Play className="w-4 h-4" />
                Google Play
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#recursos" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Recursos
              </a>
              <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Como Funciona
              </a>
              <a href="#conheca-o-app" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Conheça o App
              </a>
              <a href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Depoimentos
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full gap-2">
                    <Apple className="w-4 h-4" />
                    App Store
                  </Button>
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full gap-2">
                    <Play className="w-4 h-4" />
                    Google Play
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
