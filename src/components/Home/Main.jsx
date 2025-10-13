import React, { useState } from 'react';
import { FileText, Map, Settings, BookOpen, Search, Filter, X } from 'lucide-react';
import ProcesosGeneralSection from './sections/ProcesosGeneralSection';
import MapaProcesosSection from './sections/MapaProcesosSection';
import ISO9001Section from './sections/ISO9001Section';
import ISO27001Section from './sections/ISO27001Section';

const Main = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProceso, setSelectedProceso] = useState('');
  const [selectedSubproceso, setSelectedSubproceso] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Estructura de procesos basada en el mapa
  const procesosData = {
    'Estratégicos': [
      'Direccionamiento Estratégico',
      'Gestión de Innovación'
    ],
    'Misionales': [
      'Gestión Comercial',
      'Implementación',
      'Operaciones',
      'Transformación Digital',
      'Gestión Humana'
    ],
    'Soporte': [
      'Tecnología',
      'Gestión Administrativa',
      'Valoración de la Experiencia',
      'Mejora Continua',
      'Mercadeo'
    ]
  };

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

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedProceso('');
    setSelectedSubproceso('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Sistema Integrado de Gestión</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore nuestras diferentes áreas de procesos a través de una experiencia interactiva
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar procesos, subprocesos o contenido..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
            />
          </div>

         
          

          {/* Active Filters Display */}
          {(selectedProceso || selectedSubproceso) && !showFilters && (
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedProceso && (
                <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  {selectedProceso}
                  <button
                    onClick={() => {
                      setSelectedProceso('');
                      setSelectedSubproceso('');
                    }}
                    className="ml-2 hover:text-red-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedSubproceso && (
                <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                  {selectedSubproceso}
                  <button
                    onClick={() => setSelectedSubproceso('')}
                    className="ml-2 hover:text-red-900"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
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
                <SectionComponent 
                  section={section}
                  searchTerm={searchTerm}
                  selectedProceso={selectedProceso}
                  selectedSubproceso={selectedSubproceso}
                />
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