
import React from 'react';
import { FileCheck, Target, Settings, TrendingUp, Lightbulb, Cog, Wrench } from 'lucide-react';

const SlideProposito = () => {
  const steps = [
    {
      number: 1,
      title: "Establecer",
      description: "Establecer las metodologías afines, responsabilidades y herramientas para el adecuado funcionamiento y sistematización de procesos",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: 2,
      title: "Planear e Implementar",
      description: "Planear e implementar las actividades para favorecer diseño, ejecución sistemática documental y controlar los procesos de la organización",
      icon: <FileCheck className="w-8 h-8" />
    },
    {
      number: 3,
      title: "Alinear el Diseño",
      description: "Alinear el diseño y documentación de los procesos con los requerimientos funcionales y los contextos de información de la estrategia",
      icon: <Settings className="w-8 h-8" />
    },
    {
      number: 4,
      title: "Mejorar",
      description: "Mejorar y potencializar todos los conocimientos a partir del conocimiento y análisis de los procesos",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const bottomItems = [
    {
      title: "Diseño y estandarización de procesos",
      icon: <Lightbulb className="w-10 h-10" />
    },
    {
      title: "Implementación de procesos",
      icon: <Cog className="w-10 h-10" />
    },
    {
      title: "Mejoramiento continuo",
      icon: <Wrench className="w-10 h-10" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          ¿Cómo lo hacemos?
        </h1>
        
        {/* Purpose Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl md:text-2xl font-bold mb-2">PROPÓSITO</h2>
          <p className="text-lg">
            Identificar, documentar, analizar, mejorar y monitorear los procesos de negocio para que sean más eficientes y eficaces.
          </p>
        </div>
      </div>

      {/* Main Steps */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-t-4 border-red-500"
            >
              {/* Step Number */}
              <div className="flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full text-xl font-bold mb-4 mx-auto animate-pulse">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-4 text-red-500">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {step.description}
              </p>
              
              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-red-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Process Flow Line */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-red-300 via-red-500 to-red-300"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bottomItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-full p-8 shadow-lg text-center group hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-4 text-red-500 group-hover:text-red-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Elements */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-gray-700 font-medium">Proceso Continuo de Mejora</span>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SlideProposito;