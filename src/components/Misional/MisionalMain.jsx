import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Settings, 
  Cog
} from 'lucide-react';
import imagen from '../../assets/macroprocmis.png'; 

const MisionalMain = () => {
  const [activeProcess, setActiveProcess] = useState(null);

  const processes = [
    {
      id: 'gestion',
      title: 'GESTIÓN COMERCIAL',
      icon: ShoppingCart,
      color: 'bg-red-600',
      description: 'Identificación y gestión de oportunidades comerciales'
    },
    {
      id: 'implementacion',
      title: 'IMPLEMENTACIÓN',
      icon: Settings,
      color: 'bg-gray-700',
      description: 'Puesta en marcha de estrategias y soluciones'
    },
    {
      id: 'operaciones',
      title: 'OPERACIONES',
      icon: Cog,
      color: 'bg-red-600',
      description: 'Ejecución y monitoreo de procesos operativos'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            MACROPROCESO MISIONAL
          </h1>
          
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              El <span className="font-semibold text-red-600">Macroproceso Misional</span> se encarga de ejecutar las estrategias 
              definidas en el plan estratégico de <span className="font-semibold">Outsourcing S.A.S. BIC</span>, mediante la 
              diversificación y diferenciación, orientado a la identificación de las 
              necesidades de nuestro mercado objetivo y ofreciendo soluciones a la 
              medida, basados en nuestra propuesta de valor.
            </p>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            El <span className="font-semibold">Macroproceso Misional</span> está conformado por los procesos de:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Procesos - Lado Izquierdo */}
          <div className="space-y-6">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isActive = activeProcess === process.id;
              
              return (
                <div
                  key={process.id}
                  className={`
                    relative overflow-hidden rounded-2xl cursor-pointer
                    transition-all duration-500 transform hover:scale-105
                    ${isActive ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'}
                  `}
                  style={{ 
                    animation: `slideInLeft 0.6s ease-out ${index * 0.2}s both`
                  }}
                  onMouseEnter={() => setActiveProcess(process.id)}
                  onMouseLeave={() => setActiveProcess(null)}
                >
                  <div className={`
                    ${process.color} p-6 text-white relative
                    ${isActive ? 'bg-opacity-90' : 'bg-opacity-100'}
                    transition-all duration-300
                  `}>
                    {/* Efecto de brillo animado */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                      transform -skew-x-12 transition-transform duration-1000
                      ${isActive ? 'translate-x-full' : '-translate-x-full'}
                      opacity-10
                    `}></div>
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className={`
                        p-4 rounded-full bg-white bg-opacity-20
                        ${isActive ? 'animate-pulse' : ''}
                        transition-transform duration-300
                        ${isActive ? 'scale-110 rotate-12' : 'scale-100'}
                      `}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{process.title}</h3>
                        <div className={`
                          overflow-hidden transition-all duration-500
                          ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
                        `}>
                          <p className="text-white text-opacity-90 text-sm leading-relaxed">
                            {process.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Indicador de hover */}
                      <div className={`
                        w-2 h-12 bg-white bg-opacity-30 rounded-full
                        transition-all duration-300
                        ${isActive ? 'scale-y-150 opacity-100' : 'scale-y-100 opacity-60'}
                      `}></div>
                    </div>
                    
                    {/* Líneas decorativas */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
                      <div className={`
                        h-full bg-white transition-all duration-700
                        ${isActive ? 'w-full' : 'w-0'}
                      `}></div>
                    </div>
                  </div>
                </div>
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
                        : 'bg-gray-300 hover:bg-red-300'
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Espacio para la imagen - Lado Derecho */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                PROPUESTA DE VALOR Y RETOS ESTRATÉGICOS
              </h2>
              
              {/* Contenedor para la imagen */}
              <div className="flex items-center justify-center">
                <img 
                  src={imagen}
                  alt="Propuesta de valor y retos estratégicos" 
                  className="w-96 h-96 object-contain"
                />
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

export default MisionalMain;