import React, { useState } from 'react';
import {
  ShoppingCart,
  Settings,
  Cog,
  Search,
  Target,
  TrendingUp,
  BarChart3,
  FileText,

  Users,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const StrategyMain = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [activeProcess, setActiveProcess] = useState(null);
  const [hoveredProcess, setHoveredProcess] = useState(null);

  const strategicSteps = [
    {
      id: 1,
      title: "Establecimiento de la organizacion",
      description: "Definir la estructura organizacional y fundamentos estratégicos",
      icon: <Users className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      details: "Establecimiento de misión, visión, valores y estructura organizacional base"
    },
    {
      id: 2,
      title: "Análisis de la información",
      description: "Recopilación y análisis de datos internos y externos",
      icon: <Search className="w-6 h-6" />,
      color: "from-red-600 to-red-700",
      details: "Diagnóstico situacional, análisis DOFA, benchmarking y estudios de mercado"
    },
    {
      id: 3,
      title: "Definición de estrategias",
      description: "Formulación de estrategias basadas en el análisis previo",
      icon: <Target className="w-6 h-6" />,
      color: "from-red-700 to-red-800",
      details: "Desarrollo de estrategias corporativas, competitivas y funcionales"
    },
    {
      id: 4,
      title: "Implementación de estrategias",
      description: "Ejecución y despliegue de las estrategias definidas",
      icon: <Settings className="w-6 h-6" />,
      color: "from-red-600 to-red-800",
      details: "Asignación de recursos, definición de responsabilidades y cronogramas"
    },
    {
      id: 5,
      title: "Evaluación y control",
      description: "Seguimiento y medición del desempeño estratégico",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-red-800 to-red-900",
      details: "Indicadores KPI, tableros de control y ajustes correctivos"
    }
  ];

  const processes = [
    {
      id: 'gestion',
      title: 'DIRECCIONAMIENTO ESTRATÉGICO',
      icon: ShoppingCart,
      color: 'bg-red-600',
      description: 'Definición de la dirección estratégica organizacional',
      path: '/estrategico/direccionamiento'       // <-- NUEVO
    },
    {
      id: 'implementacion',
      title: 'GESTIÓN DE INNOVACIÓN',
      icon: Settings,
      color: 'bg-gray-700',
      description: 'Desarrollo e implementación de procesos innovadores',
      path: '/estrategico/innovacion' // <-- NUEVO
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            MACROPROCESO ESTRATÉGICO
          </h1>

          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              El <span className="font-semibold text-red-600">Macroproceso Estratégico</span> se encarga de gestionar recursos, planificar,
              formular, revisar, monitorear y socializar estrategias a corto, mediano y
              largo plazo, buscando que todos los procesos estén alineados con los
              objetivos misionales de la Organización.
            </p>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            El <span className="text-red-700 font-bold">Macroproceso Estratégico</span> está conformado por los procesos de:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Procesos - Lado Izquierdo */}
          <div className="space-y-6">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isActive = activeProcess === process.id;

              return (
                <Link
                  key={process.id}
                  to={process.path}                 // <-- navega a la ruta del proceso
                  className="block"                 // mantiene el bloque clickeable
                  onMouseEnter={() => setActiveProcess(process.id)}
                  onMouseLeave={() => setActiveProcess(null)}
                  style={{ animation: `slideInLeft 0.6s ease-out ${index * 0.2}s both` }}
                >
                  <div
                    className={`
            relative overflow-hidden rounded-2xl cursor-pointer
            transition-all duration-500 transform hover:scale-105
            ${isActive ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}
          `}
                  >
                    <div
                      className={`
              ${process.color} p-6 text-white relative
              ${isActive ? 'bg-opacity-90' : 'bg-opacity-100'}
              transition-all duration-300
            `}
                    >
                      {/* Efecto de brillo animado */}
                      <div
                        className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                transform -skew-x-12 transition-transform duration-1000
                ${isActive ? 'translate-x-full' : '-translate-x-full'}
                opacity-10
              `}
                      />

                      <div className="flex items-center space-x-4 relative z-10">
                        <div
                          className={`
                  p-4 rounded-full bg-white bg-opacity-20
                  ${isActive ? 'animate-pulse' : ''}
                  transition-transform duration-300
                  ${isActive ? 'scale-110 rotate-12' : 'scale-100'}
                `}
                        >
                          <Icon className="w-8 h-8" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{process.title}</h3>
                          <div
                            className={`
                    overflow-hidden transition-all duration-500
                    ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                          >
                            <p className="text-white text-opacity-90 text-sm leading-relaxed">
                              {process.description}
                            </p>
                          </div>
                        </div>

                        {/* Indicador de hover */}
                        <div
                          className={`
                  w-2 h-12 bg-white bg-opacity-30 rounded-full
                  transition-all duration-300
                  ${isActive ? 'scale-y-150 opacity-100' : 'scale-y-100 opacity-60'}
                `}
                        />
                      </div>

                      {/* Líneas decorativas */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
                        <div
                          className={`
                  h-full bg-white transition-all duration-700
                  ${isActive ? 'w-full' : 'w-0'}
                `}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            {/* Elemento decorativo */}
            <div className="flex items-center justify-center py-8">
              <div className="flex space-x-2">
                {processes.map((_, index) => (
                  <div
                    key={index}
                    className={`
            w-3 h-3 rounded-full transition-all duration-300
            ${activeProcess === processes[index].id
                        ? 'bg-red-600 scale-125'
                        : 'bg-gray-300 hover:bg-red-300'}
          `}
                  />
                ))}
              </div>
            </div>
          </div>


          {/* Right Side - Strategic Process Steps */}
          <div className="relative">
            {/* Business Person Illustration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-64 h-64 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                <Users className="w-32 h-32 text-white" />
              </div>
            </div>

            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border-4 border-dashed border-red-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-red-800 mb-2">
                  Pasos del proceso estratégico
                </h2>
              </div>

              <div className="space-y-4">
                {strategicSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer
                      ${activeStep === step.id
                        ? 'bg-gradient-to-r ' + step.color + ' text-white scale-105 shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 hover:scale-102'
                      }
                    `}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    <div className="flex items-center p-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-colors
                        ${activeStep === step.id
                          ? 'bg-white bg-opacity-20'
                          : 'bg-gradient-to-r ' + step.color
                        }
                      `}>
                        <span className={`text-xl font-bold ${activeStep === step.id ? 'text-white' : 'text-white'}`}>
                          {step.id}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <h3 className={`font-bold text-sm leading-tight mb-1 ${activeStep === step.id ? 'text-white' : 'text-gray-800'}`}>
                          {step.title}
                        </h3>
                        <p className={`text-xs ${activeStep === step.id ? 'text-white text-opacity-80' : 'text-gray-600'}`}>
                          {step.description}
                        </p>
                      </div>
                      <div className={`ml-4 transition-transform duration-300 ${activeStep === step.id ? 'rotate-180' : ''}`}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {activeStep === step.id && (
                      <div className="px-4 pb-4 animate-pulse">
                        <div className="bg-white bg-opacity-20 rounded-lg p-3 mt-2">
                          <p className="text-white text-sm">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-20">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-20">
                <FileText className="w-6 h-6 text-red-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default StrategyMain;