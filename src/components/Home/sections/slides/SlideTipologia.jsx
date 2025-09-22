import React, { useState } from 'react';
import { FileText, Shield, BookOpen, Layout, Calendar, List, FileCheck, File, Paperclip, Archive } from 'lucide-react';

const tipologiaData = [
  {
    id: 'EX',
    tipologia: 'Documento externo',
    sigla: 'EX',
    color: '#dc2626',
    icon: FileText,
    description: 'Documentos provenientes de fuentes externas a la organización'
  },
  {
    id: 'PO',
    tipologia: 'Políticas',
    sigla: 'PO',
    color: '#dc2626',
    icon: Shield,
    description: 'Documentos que establecen principios y directrices organizacionales'
  },
  {
    id: 'MA',
    tipologia: 'Manual de Gestión',
    sigla: 'MA',
    color: '#dc2626',
    icon: BookOpen,
    description: 'Manuales que describen procesos y procedimientos de gestión'
  },
  {
    id: 'CA',
    tipologia: 'Caracterizaciones',
    sigla: 'CA',
    color: '#dc2626',
    icon: Layout,
    description: 'Documentos que definen las características de los procesos'
  },
  {
    id: 'PG',
    tipologia: 'Programas',
    sigla: 'PG',
    color: '#dc2626',
    icon: Calendar,
    description: 'Documentos que establecen programas específicos de trabajo'
  },
  {
    id: 'PR',
    tipologia: 'Procedimientos',
    sigla: 'PR',
    color: '#dc2626',
    icon: List,
    description: 'Documentos que detallan pasos específicos para realizar actividades'
  },
  {
    id: 'IN',
    tipologia: 'Instructivos de trabajo',
    sigla: 'IN',
    color: '#dc2626',
    icon: FileCheck,
    description: 'Guías detalladas para la ejecución de tareas específicas'
  },
  {
    id: 'AN',
    tipologia: 'Anexos',
    sigla: 'AN',
    color: '#dc2626',
    icon: Paperclip,
    description: 'Documentos complementarios que acompañan otros documentos principales'
  },
  {
    id: 'FO',
    tipologia: 'Formatos',
    sigla: 'FO',
    color: '#dc2626',
    icon: Archive,
    description: 'Plantillas y formularios estandarizados para captura de información'
  }
];

const TipologiaRow = ({ tipologia, index, isHovered, onHover, onLeave, onClick, isSelected }) => {
  const { tipologia: nombre, sigla, color, icon: Icon } = tipologia;
  
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
      {/* Tipología */}
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

const SlideTipologia = () => {
  const [hoveredTipologia, setHoveredTipologia] = useState(null);
  const [selectedTipologia, setSelectedTipologia] = useState(null);

  const handleRowHover = (tipologiaId) => {
    setHoveredTipologia(tipologiaId);
  };

  const handleRowLeave = () => {
    setHoveredTipologia(null);
  };

  const handleRowClick = (tipologiaId) => {
    setSelectedTipologia(selectedTipologia === tipologiaId ? null : tipologiaId);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tipología Documental
          </h1>
          <p className="text-gray-600">
            Conoce los tipos de documentos y sus identificadores
          </p>
        </div>

        {/* Tabla principal */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
          <table className="w-full">
            {/* Header de la tabla */}
            <thead>
              <tr className="bg-gradient-to-r from-red-500 to-red-600">
                <th className="px-6 py-4 text-left text-white font-bold text-lg tracking-wide">
                  TIPOLOGÍA DOCUMENTAL
                </th>
                <th className="px-6 py-4 text-right text-white font-bold text-lg tracking-wide">
                  SIGLA
                </th>
              </tr>
            </thead>
            
            {/* Body de la tabla */}
            <tbody>
              {tipologiaData.map((tipologia, index) => (
                <TipologiaRow
                  key={tipologia.id}
                  tipologia={tipologia}
                  index={index}
                  isHovered={hoveredTipologia === tipologia.id}
                  isSelected={selectedTipologia === tipologia.id}
                  onHover={() => handleRowHover(tipologia.id)}
                  onLeave={handleRowLeave}
                  onClick={() => handleRowClick(tipologia.id)}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Panel de información adicional */}
        {selectedTipologia && (
          <div className="mt-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200 animate-in slide-in-from-bottom-4 duration-500">
            {(() => {
              const tipologia = tipologiaData.find(t => t.id === selectedTipologia);
              return (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${tipologia.color}20` }}
                    >
                      {tipologia.icon && <tipologia.icon size={20} style={{ color: tipologia.color }} />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        {tipologia.tipologia}
                      </h3>
                      <span 
                        className="inline-flex items-center justify-center px-3 py-1 rounded-full text-white text-sm font-bold"
                        style={{ backgroundColor: tipologia.color }}
                      >
                        {tipologia.sigla}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {tipologia.description}
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

export default SlideTipologia;