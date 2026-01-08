import { Star, Quote } from "lucide-react";
import dardaniaImg from "@/assets/person/dardania.jpg";
import carolinaImg from "@/assets/person/carolina.jpg";
import stephanieImg from "@/assets/person/stephanie.png";

const testimonials = [
  {
    name: "Dardânia Mylana",
    role: "Psicóloga Especialista em ABA",
    content: "O Aba Fácil transformou a forma como organizo os dados dos meus pacientes. Consigo ver o progresso de forma muito mais clara e os pais adoram os relatórios visuais.",
    rating: 5,
    image: dardaniaImg
  },
  {
    name: "Carolina Firmo",
    role: "Mãe de paciente",
    content: "Finalmente posso acompanhar o desenvolvimento do meu filho de forma organizada. A comunicação com os terapeutas ficou muito mais fácil e transparente.",
    rating: 5,
    image: carolinaImg
  },
  {
    name: "Stefanie Pinho",
    role: "Terapeuta Ocupacional",
    content: "Interface super intuitiva! Economizo muito tempo no registro das sessões e ainda consigo compartilhar informações importantes com a equipe multidisciplinar.",
    rating: 5,
    image: stephanieImg
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground font-medium text-sm mb-4">
            Depoimentos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Quem usa,{" "}
            <span className="text-gradient-primary">recomenda</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que profissionais e famílias estão dizendo sobre o Aba Fácil.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-warm" />
                )}
                <div>
                  <p className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
