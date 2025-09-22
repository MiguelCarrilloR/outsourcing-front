import React, { useState } from 'react';
import BaseSection from '../BaseSection';
import { Target, Users, TrendingUp, BarChart3, Scale, Trophy } from 'lucide-react';

const ISO9001Section = ({ section }) => {

  const ISO9001Interactive = () => {
    const [selectedPrinciple, setSelectedPrinciple] = useState(0); 

    const principles = [
      {
        id: 0,
        title: "Objetivo Principal",
        icon: Target,
        color: "red",
        description: "Ayudar a asegurar la calidad de sus productos y servicios, mejorar continuamente sus procesos y aumentar la satisfacción del cliente."
      },
      {
        id: 1,
        title: "Enfoque al Cliente",
        icon: Users,
        color: "purple",
        description: "Principio clave de gestión basado en la comprensión y satisfacción de las necesidades del cliente."
      },
      {
        id: 2,
        title: "Mejora Continua",
        icon: TrendingUp,
        color: "blue",
        description: "Implementación de procesos de mejora sistemática y constante en toda la organización."
      },
      {
        id: 3,
        title: "Decisiones Basadas en Evidencia",
        icon: BarChart3,
        color: "green",
        description: "Toma de decisiones fundamentada en datos, análisis y evidencia objetiva."
      },
      {
        id: 4,
        title: "Cumplimiento Legal",
        icon: Scale,
        color: "yellow",
        description: "Herramienta fundamental para lograr eficiencia, competitividad y cumplimiento de requisitos legales y contractuales."
      },
      {
        id: 5,
        title: "Competitividad",
        icon: Trophy,
        color: "orange",
        description: "Mejora la posición competitiva de la organización en el mercado a través de la excelencia operacional."
      }
    ];

    const getCardClasses = (principleId) => {
      const isSelected = selectedPrinciple === principleId;
      return isSelected
        ? "bg-red-50 p-4 md:p-6 rounded-lg border-2 border-red-500 shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
        : "bg-white p-4 md:p-6 rounded-lg border border-gray-300 shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300";
    };

    const getIconClasses = (principleId) => {
      const isSelected = selectedPrinciple === principleId;
      return isSelected
        ? "flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white rounded-full mb-3 md:mb-4 mx-auto border-2 border-red-500"
        : "flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full mb-3 md:mb-4 mx-auto";
    };

    const getIconColor = (principle) => {
      const isSelected = selectedPrinciple === principle.id;
      if (isSelected) return "text-red-600";
      

      switch (principle.color) {
        case 'purple': return 'text-purple-600';
        case 'blue': return 'text-blue-600';
        case 'green': return 'text-green-600';
        case 'yellow': return 'text-yellow-600';
        case 'orange': return 'text-orange-600';
        default: return 'text-red-600';
      }
    };

    const getTitleColor = (principleId) => {
      const isSelected = selectedPrinciple === principleId;
      return isSelected ? "text-red-600" : "text-gray-800";
    };

    return (
      <div className="w-full min-h-[600px] bg-white p-4 md:p-8 rounded-lg">
        {/* Header con logo ISO */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-600 rounded-full flex items-center justify-center bg-white">
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-xs md:text-sm">ISO</div>
                  <div className="text-blue-600 font-bold text-xs">9001:2015</div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-orange-400 text-white px-2 py-1 rounded text-xs font-semibold">
                CERTIFIED
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
              Sistema de Gestión de Calidad
            </h1>
          </div>
        </div>

        {/* Descripción */}
        <div className="bg-red-50 p-4 rounded-lg mb-6 md:mb-8">
          <p className="text-gray-700 text-center text-sm md:text-base">
            La norma <strong>ISO 9001:2015</strong> es un estándar internacional que establece los requisitos para implementar un <strong>Sistema de Gestión de la Calidad (SGC)</strong> eficaz.
          </p>
        </div>

        {/* Principios principales - Primera fila */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {principles.slice(0, 3).map((principle) => {
            const IconComponent = principle.icon;
            return (
              <div
                key={principle.id}
                onClick={() => setSelectedPrinciple(principle.id)}
                className={getCardClasses(principle.id)}
              >
                <div className={getIconClasses(principle.id)}>
                  <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${getIconColor(principle)}`} />
                </div>
                <h3 className={`text-base md:text-lg font-bold mb-2 md:mb-3 text-center ${getTitleColor(principle.id)}`}>
                  {principle.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Principios secundarios - Segunda fila */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {principles.slice(3, 6).map((principle) => {
            const IconComponent = principle.icon;
            return (
              <div
                key={principle.id}
                onClick={() => setSelectedPrinciple(principle.id)}
                className={getCardClasses(principle.id)}
              >
                <div className={getIconClasses(principle.id)}>
                  <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${getIconColor(principle)}`} />
                </div>
                <h3 className={`text-base md:text-lg font-bold mb-2 md:mb-3 text-center ${getTitleColor(principle.id)}`}>
                  {principle.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-700 text-center leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const images = [
    { 
      id: 1, 
      title: "NORMA ISO 9001:2015",
      placeholder: "Sistema de Gestión de Calidad interactivo",
      url: "", 
      interactive: true,
      component: ISO9001Interactive,
      height: "auto", 
      fullHeight: false,
      containerClasses: "flex items-start justify-center", 
      type: "Norma ISO"
    }
  ];

  return <BaseSection section={section} images={images} />;
};

export default ISO9001Section;