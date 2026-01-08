import { useState } from "react";

import screenshotHome from "@/assets/screenshots/app-home.png";
import screenshotSpecialties from "@/assets/screenshots/app-specialties.png";
import screenshotDocument from "@/assets/screenshots/app-document.png";
import screenshotPatient from "@/assets/screenshots/app-patient.png";
import screenshotAgenda from "@/assets/screenshots/app-agenda.jpeg";
import screenshotGraphics from "@/assets/screenshots/app-graphics.jpeg";

const screenshots = [
  {
    id: 1,
    image: screenshotHome,
    title: "Tela Inicial",
    description: "Dashboard completo com acesso rápido a todas as funcionalidades",
  },
  {
    id: 2,
    image: screenshotSpecialties,
    title: "Especialidades",
    description: "Gerencie múltiplas especialidades terapêuticas em um só lugar",
  },
  {
    id: 3,
    image: screenshotAgenda,
    title: "Agenda",
    description: "Envie e receba recados importantes entre terapeutas e pais",
  },
  {
    id: 4,
    image: screenshotGraphics,
    title: "Gráficos",
    description: "Visualize o progresso dos pacientes com gráficos detalhados",
  },  
  {
    id: 5,
    image: screenshotDocument,
    title: "Documentos",
    description: "Adicione e organize documentos importantes dos pacientes",
  },
  {
    id: 6,
    image: screenshotPatient,
    title: "Dados do Paciente",
    description: "Informações completas e organizadas de cada paciente",
  }
];

const AppScreenshots = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="conheca-o-app" className="py-20 bg-gradient-soft overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Conheça o App
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja o Aba Fácil em Ação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Uma interface intuitiva e moderna, desenvolvida pensando em terapeutas e pais
          </p>
        </div>

        {/* Screenshots Display */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Phone Mockup with Active Screenshot */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[660px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <img
                    src={screenshots[activeIndex].image}
                    alt={screenshots[activeIndex].title}
                    className="w-full h-full object-cover object-top transition-all duration-500"
                  />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Screenshots Thumbnails & Info */}
          <div className="flex-1 max-w-md">
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {screenshots[activeIndex].title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {screenshots[activeIndex].description}
              </p>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-3">
              {screenshots.map((screenshot, index) => (
                <button
                  key={screenshot.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 aspect-[9/16] ${
                    activeIndex === index
                      ? "border-primary ring-2 ring-primary/30 scale-105"
                      : "border-border hover:border-primary/50 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>

            {/* Dots indicator for mobile */}
            <div className="flex justify-center gap-2 mt-6 lg:hidden">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-primary w-6" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
