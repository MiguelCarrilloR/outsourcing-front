import React, { useState } from 'react';
import { Building2, Lightbulb, ShoppingCart, Settings, Cog, Laptop, Shuffle, DollarSign, Users, Star, TrendingUp } from 'lucide-react';


const procesosData = [
  {
    id: 'DE',
    proceso: 'Direccionamiento Estratégico',
    sigla: 'DE',
    color: '#dc2626',
    icon: Building2,
    description: 'Define la dirección estratégica y los objetivos organizacionales'
  },
  {
    id: 'GI',
    proceso: 'Gestión de Innovación',
    sigla: 'GI',
    color: '#dc2626',
    icon: Lightbulb,
    description: 'Promueve la innovación y desarrollo de nuevas ideas'
  },
  {
    id: 'GC',
    proceso: 'Gestión Comercial',
    sigla: 'GC',
    color: '#dc2626',
    icon: ShoppingCart,
    description: 'Administra las relaciones comerciales y ventas'
  },
  {
    id: 'IM',
    proceso: 'Implementación',
    sigla: 'IM',
    color: '#dc2626',
    icon: Settings,
    description: 'Ejecuta y pone en marcha los proyectos y procesos'
  },
  {
    id: 'OP',
    proceso: 'Operaciones',
    sigla: 'OP',
    color: '#dc2626',
    icon: Cog,
    description: 'Gestiona las operaciones diarias de la organización'
  },
  {
    id: 'IT',
    proceso: 'Tecnología',
    sigla: 'IT',
    color: '#dc2626',
    icon: Laptop,
    description: 'Administra la infraestructura y servicios tecnológicos'
  },
  {
    id: 'TD',
    proceso: 'Transformación Digital',
    sigla: 'TD',
    color: '#dc2626',
    icon: Shuffle,
    description: 'Lidera la transformación digital de la organización'
  },
  {
    id: 'GA',
    proceso: 'Gestión Administrativa y Financiera',
    sigla: 'GA',
    color: '#dc2626',
    icon: DollarSign,
    description: 'Maneja los recursos administrativos y financieros'
  },
  {
    id: 'GH',
    proceso: 'Gestión Humana',
    sigla: 'GH',
    color: '#dc2626',
    icon: Users,
    description: 'Gestiona el talento humano y desarrollo organizacional'
  },
  {
    id: 'VE',
    proceso: 'Valoración de la experiencia',
    sigla: 'VE',
    color: '#dc2626',
    icon: Star,
    description: 'Evalúa y mejora la experiencia del cliente'
  },
  {
    id: 'MC',
    proceso: 'Mejora Continua',
    sigla: 'MC',
    color: '#dc2626',
    icon: TrendingUp,
    description: 'Implementa procesos de mejora continua'
  }
];

const ProcesoRow = ({ proceso, index, isHovered, onHover, onLeave, onClick, isSelected }) => {
  const { proceso: nombre, sigla, color, icon: Icon } = proceso;
  
  return (
    <tr 
      className={`group cursor-pointer transition-all duration-300 ${
        isHovered || isSelected 
          ? 'bg-gray-50 transform scale-[1.02] shadow-lg' 
          : 'hover:bg-gray-25'
      } ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{
        backgroundColor: isHovered || isSelected ? `${color}08` : undefined
      }}
    >
      {/* Proceso */}
      <td className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          {Icon && (
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon size={16} style={{ color }} />
            </div>
          )}
          <span className={`font-medium text-gray-900 transition-colors duration-300 ${
            isHovered || isSelected ? 'text-gray-900' : ''
          }`}>
            {nombre}
          </span>
        </div>
      </td>
      
      {/* Sigla */}
      <td className="px-6 py-4 border-b border-gray-200 text-right">
        <span 
          className={`inline-flex items-center justify-center w-12 h-8 rounded-lg font-bold text-sm transition-all duration-300 text-white ${
            isHovered || isSelected 
              ? 'transform scale-110 shadow-lg' 
              : 'group-hover:scale-105'
          }`}
          style={{ 
            backgroundColor: color,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          {sigla}
        </span>
      </td>
    </tr>
  );
};

const SlideProcesos = () => {
  const [hoveredProceso, setHoveredProceso] = useState(null);
  const [selectedProceso, setSelectedProceso] = useState(null);

  const handleRowHover = (procesoId) => {
    setHoveredProceso(procesoId);
  };

  const handleRowLeave = () => {
    setHoveredProceso(null);
  };

  const handleRowClick = (procesoId) => {
    setSelectedProceso(selectedProceso === procesoId ? null : procesoId);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Procesos y Siglas
          </h1>
          <p className="text-gray-600">
            Conoce los procesos organizacionales y sus identificadores
          </p>
        </div>

        {/* Tabla principal */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <table className="w-full">
            {/* Header de la tabla */}
            <thead>
              <tr className="bg-gradient-to-r from-red-500 to-red-600">
                <th className="px-6 py-4 text-left text-white font-bold text-lg tracking-wide">
                  PROCESO
                </th>
                <th className="px-6 py-4 text-right text-white font-bold text-lg tracking-wide">
                  SIGLA
                </th>
              </tr>
            </thead>
            
            {/* Body de la tabla */}
            <tbody>
              {procesosData.map((proceso, index) => (
                <ProcesoRow
                  key={proceso.id}
                  proceso={proceso}
                  index={index}
                  isHovered={hoveredProceso === proceso.id}
                  isSelected={selectedProceso === proceso.id}
                  onHover={() => handleRowHover(proceso.id)}
                  onLeave={handleRowLeave}
                  onClick={() => handleRowClick(proceso.id)}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Panel de información adicional */}
        {selectedProceso && (
          <div className="mt-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200 animate-in slide-in-from-bottom-4 duration-500">
            {(() => {
              const proceso = procesosData.find(p => p.id === selectedProceso);
              return (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${proceso.color}20` }}
                    >
                      {proceso.icon && <proceso.icon size={20} style={{ color: proceso.color }} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        {proceso.proceso}
                      </h3>
                      <span 
                        className="inline-flex items-center justify-center px-3 py-1 rounded-full text-white text-sm font-bold"
                        style={{ backgroundColor: proceso.color }}
                      >
                        {proceso.sigla}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {proceso.description}
                  </p>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideProcesos;