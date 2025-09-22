import React, { useState } from 'react';
import BaseSection from '../BaseSection';
import { Shield, AlertTriangle, Lock, Monitor, FileText, ShieldCheck } from 'lucide-react';

const ISO27001Section = ({ section }) => {

  const ISO27001Interactive = () => {
    const [selectedPrinciple, setSelectedPrinciple] = useState(0); 

    const principles = [
      {
        id: 0,
        title: "Objetivo Principal",
        icon: Shield,
        color: "blue",
        description: "Garantizar la protección de la confidencialidad, integridad y disponibilidad de la información dentro de la organización."
      },
      {
        id: 1,
        title: "Gestión de Riesgos",
        icon: AlertTriangle,
        color: "amber",
        description: "Gestiona los riesgos asociados a posibles amenazas y vulnerabilidades de la información crítica."
      },
      {
        id: 2,
        title: "Protección de Datos",
        icon: Lock,
        color: "purple",
        description: "Enfoque reforzado en la protección de datos personales y cumplimiento de normativas de privacidad."
      },
      {
        id: 3,
        title: "Entorno Digital",
        icon: Monitor,
        color: "cyan",
        description: "La versión 2022 adapta los requisitos a los nuevos desafíos del entorno digital moderno."
      },
      {
        id: 4,
        title: "Cumplimiento Normativo",
        icon: FileText,
        color: "orange",
        description: "Ayuda a cumplir con normativas y generar confianza entre socios comerciales."
      },
      {
        id: 5,
        title: "Seguridad Integral",
        icon: ShieldCheck,
        color: "green",
        description: "Asegura la protección completa de la información crítica de la organización."
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
        case 'blue': return 'text-blue-600';
        case 'amber': return 'text-amber-600';
        case 'purple': return 'text-purple-600';
        case 'cyan': return 'text-cyan-600';
        case 'orange': return 'text-orange-600';
        case 'green': return 'text-green-600';
        default: return 'text-blue-600';
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
                  <div className="text-blue-600 font-bold text-xs">27001:2022</div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-orange-400 text-white px-2 py-1 rounded text-xs font-semibold">
                CERTIFIED
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
              Sistema de Gestión de Seguridad de la Información
            </h1>
          </div>
        </div>

        {/* Descripción */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6 md:mb-8">
          <p className="text-gray-700 text-center text-sm md:text-base">
            <strong>ISO/IEC 27001:2022</strong> es una norma internacional que establece los requisitos para implementar un <strong>Sistema de Gestión de Seguridad de la Información (SGSI)</strong>.
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
      title: "NORMA ISO/IEC 27001:2022",
      placeholder: "Sistema de Gestión de Seguridad de la Información interactivo",
      url: "", 
      interactive: true,
      component: ISO27001Interactive,
      height: "auto", 
      fullHeight: false, 
      containerClasses: "flex items-start justify-center", 
      type: "Norma ISO"
    }
  ];

  return <BaseSection section={section} images={images} />;
};

export default ISO27001Section;