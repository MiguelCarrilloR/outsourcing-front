import React, { useState } from 'react';
import { Plus, Equal, ArrowRight, FileText, Building2, Hash } from 'lucide-react';

const estructuraData = [
  
  {
    id: 'MC',
    codigo: 'MC',
    descripcion: 'Proceso al que pertenece "Mejora continua"',
    color: '#8b9dc3',
    bgColor: '#8b9dc3',
    textColor: '#ffffff'
  },
  {
    id: 'PR',
    codigo: 'PR',
    descripcion: 'Tipo de documento "Procedimiento"',
    color: '#f1c40f',
    bgColor: '#f1c40f',
    textColor: '#ffffff'
  },
  {
    id: '001',
    codigo: '001',
    descripcion: 'Consecutivo # según lista maestra',
    color: '#4a90e2',
    bgColor: '#4a90e2',
    textColor: '#ffffff'
  }
];

const resultado = {
  codigo: 'MC-PR-001',
  bgColor: '#22c55e',
  textColor: '#ffffff'
};

const CodigoCircle = ({ elemento, index, isHovered, onHover, onLeave, onClick, isSelected }) => {
  const { codigo, color, bgColor, textColor, descripcion } = elemento;
  
  return (
    <div className="flex flex-col items-center group">
      {/* Círculo del código */}
      <div 
        className={`relative w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 shadow-lg ${
          isHovered || isSelected 
            ? 'transform scale-125 shadow-2xl' 
            : 'group-hover:scale-110 group-hover:shadow-xl'
        }`}
        style={{ backgroundColor: bgColor }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
      >
        <span 
          className={`font-black text-lg transition-all duration-300 ${
            isHovered || isSelected ? 'transform scale-110' : ''
          }`}
          style={{ color: textColor, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          {codigo}
        </span>
        
        {/* Efecto de brillo al hover */}
        {(isHovered || isSelected) && (
          <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse" />
        )}
      </div>
      
      {/* Descripción */}
      <div className={`mt-4 text-center max-w-32 transition-all duration-300 ${
        isHovered || isSelected ? 'transform -translate-y-2' : ''
      }`}>
        <p className={`text-xs text-gray-700 leading-tight font-medium ${
          isHovered || isSelected ? 'text-gray-900 font-semibold' : ''
        }`}>
          {descripcion}
        </p>
      </div>
      
      {/* Línea conectora animada */}
      {isHovered || isSelected && (
        <div 
          className="absolute top-10 w-2 h-2 rounded-full animate-bounce"
          style={{ backgroundColor: color }}
        />
      )}
    </div>
  );
};

const OperatorSymbol = ({ symbol, isActive }) => (
  <div className={`flex items-center justify-center w-12 h-12 transition-all duration-500 ${
    isActive ? 'transform scale-125' : ''
  }`}>
    <span className={`text-2xl font-black transition-colors duration-500 ${
      isActive ? 'text-red-500' : 'text-red-400'
    }`}>
      {symbol}
    </span>
  </div>
);

const ResultadoFinal = ({ isVisible, onHover, onLeave, isHovered }) => (
  <div className={`flex flex-col items-center transition-all duration-700 ${
    isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
  }`}>
    <div 
      className={`relative px-6 py-3 rounded-xl shadow-lg cursor-pointer transition-all duration-500 ${
        isHovered ? 'transform scale-110 shadow-2xl' : 'hover:scale-105 hover:shadow-xl'
      }`}
      style={{ backgroundColor: resultado.bgColor }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <span 
        className="font-black text-lg tracking-wider"
        style={{ color: resultado.textColor, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
      >
        {resultado.codigo}
      </span>
      
      {/* Efecto de brillo */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl bg-white opacity-20 animate-pulse" />
      )}
    </div>
    
    <div className="mt-4 text-center">
      <p className="text-sm text-gray-700 font-medium">
        Código Final
      </p>
    </div>
  </div>
);

const SlideEstructura = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [hoveredResult, setHoveredResult] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleElementHover = (elementId) => {
    setHoveredElement(elementId);
  };

  const handleElementLeave = () => {
    setHoveredElement(null);
  };

  const handleElementClick = (elementId) => {
    setSelectedElement(selectedElement === elementId ? null : elementId);
  };

  const handleResultHover = () => {
    setHoveredResult(true);
  };

  const handleResultLeave = () => {
    setHoveredResult(false);
  };

  const handleAnimateCode = () => {
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-red-600 mb-4 tracking-wide">
            ESTRUCTURA DEL CÓDIGO
          </h1>
          <p className="text-gray-600 text-lg">
            Composición del sistema de codificación documental
          </p>
          <button 
            onClick={handleAnimateCode}
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 font-semibold"
          >
            Ver Animación
          </button>
        </div>

        {/* Estructura principal */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
          <div className="flex items-center justify-center flex-wrap gap-6">
            
            {estructuraData.map((elemento, index) => (
              <React.Fragment key={elemento.id}>
                {/* Elemento del código */}
                <div className={`transition-all duration-500 ${
                  showAnimation ? `animate-bounce` : ''
                }`} style={{ animationDelay: showAnimation ? `${index * 200}ms` : '0ms' }}>
                  <CodigoCircle
                    elemento={elemento}
                    index={index}
                    isHovered={hoveredElement === elemento.id}
                    isSelected={selectedElement === elemento.id}
                    onHover={() => handleElementHover(elemento.id)}
                    onLeave={handleElementLeave}
                    onClick={() => handleElementClick(elemento.id)}
                  />
                </div>
                
                {/* Símbolo operador */}
                {index < estructuraData.length - 1 && (
                  <OperatorSymbol 
                    symbol="+" 
                    isActive={hoveredElement === elemento.id || showAnimation}
                  />
                )}
              </React.Fragment>
            ))}
            
            {/* Símbolo igual */}
            <OperatorSymbol 
              symbol="=" 
              isActive={hoveredResult || showAnimation}
            />
            
            {/* Resultado final */}
            <ResultadoFinal
              isVisible={true}
              isHovered={hoveredResult}
              onHover={handleResultHover}
              onLeave={handleResultLeave}
            />
          </div>
        </div>

        {/* Panel de información detallada */}
        {selectedElement && (
          <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200 animate-in slide-in-from-bottom-4 duration-500">
            {(() => {
              const elemento = estructuraData.find(e => e.id === selectedElement);
              return (
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: elemento.bgColor }}
                    >
                      <span 
                        className="font-black text-lg"
                        style={{ color: elemento.textColor }}
                      >
                        {elemento.codigo}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        Componente: {elemento.codigo}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Elemento de la estructura del código
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Descripción:</strong> {elemento.descripcion}
                  </p>
                </div>
              );
            })()}
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-xl border border-orange-300">
            <div className="flex items-center gap-3 mb-3">
              <FileText size={24} className="text-orange-700" />
              <h3 className="font-bold text-orange-900">Formato del Código</h3>
            </div>
            <p className="text-orange-800 text-sm leading-relaxed">
              El código sigue la estructura: <strong>Organización + Proceso + Tipo + Consecutivo</strong>, 
              separados por guiones para facilitar su lectura e identificación.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-xl border border-green-300">
            <div className="flex items-center gap-3 mb-3">
              <Hash size={24} className="text-green-700" />
              <h3 className="font-bold text-green-900">Sistema de Numeración</h3>
            </div>
            <p className="text-green-800 text-sm leading-relaxed">
              El consecutivo es un número de 3 dígitos que se asigna según la lista maestra, 
              garantizando unicidad y trazabilidad de cada documento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideEstructura;