import React, { useState } from 'react';
import { FileText, Map, Settings, BookOpen } from 'lucide-react';


import ProcesosGeneralSection from './sections/ProcesosGeneralSection';
import MapaProcesosSection from './sections/MapaProcesosSection';
import ISO9001Section from './sections/ISO9001Section';
import ISO27001Section from './sections/ISO27001Section';

const Main = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 0,
      title: "Área de Procesos General",
      subtitle: "Presentación general del área de procesos",
      icon: FileText,
      color: "bg-red-50 from-red-500 to-red-600",
      component: ProcesosGeneralSection
    },
    {
      id: 1,
      title: "Mapa de Procesos",
      subtitle: "Visualización completa del mapa de procesos organizacional",
      icon: Map,
      color: "bg-red-50 from-red-500 to-red-600",
      component: MapaProcesosSection
    },
    {
      id: 2,
      title: "ISO 9001:2015",
      subtitle: "ASPECTOS IMPORTANTES DE LA NORMA",
      icon: Settings,
      color: "from-red-500 to-pink-600",
      component: ISO9001Section
    },
    {
      id: 3,
      title: "ISO/IEC 27001:2022",
      subtitle: "ASPECTOS IMPORTANTES DE LA NORMA",
      icon: BookOpen,
      color: "bg-red-50 from-red-500 to-red-600",
      component: ISO27001Section
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sistema Integrado de Gestión</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nuestras diferentes áreas de procesos a través de una experiencia interactiva
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeSection === index
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="hidden md:inline">{section.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Section Display */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {sections.map((section, sectionIndex) => {
            const SectionComponent = section.component;
            return (
              <div
                key={section.id}
                className={`transition-all duration-500 ${
                  activeSection === sectionIndex ? 'block' : 'hidden'
                }`}
              >
                <SectionComponent section={section} />
              </div>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Haga clic en las pestañas superiores para navegar entre las diferentes secciones
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;