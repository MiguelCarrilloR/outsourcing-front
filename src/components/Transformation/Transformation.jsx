import React, { useState } from 'react';
import { FileText, Search, Download, Eye } from 'lucide-react';

export default function StrategicDirectionModule() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Todos los tipos');
  const [selectedSubprocess, setSelectedSubprocess] = useState('Todos los subprocesos');
  const [uploadedPdf, setUploadedPdf] = useState(null);

const documents = [
  {
    id: 1,
    title: "Procedimiento de Gestión del Centro de Excelencia Digital",
    code: "TD-PR-001",
    version: "1.0",
    date: "2025-02-14",
    subprocess: "Centro de excelencia",
    type: "Procedimientos",
    tag: "PR",
    color: "bg-red-600"
  },
  {
    id: 2,
    title: "Política de Transformación Digital y Gobernanza Tecnológica",
    code: "TD-PO-001",
    version: "1.0",
    date: "2025-02-22",
    subprocess: "Planeación",
    type: "Políticas",
    tag: "PO",
    color: "bg-red-600"
  },
  {
    id: 3,
    title: "Formato de Reporte Estadístico de Madurez Digital",
    code: "TD-FO-001",
    version: "1.0",
    date: "2025-03-03",
    subprocess: "Estadística",
    type: "Formatos",
    tag: "FO",
    color: "bg-red-600"
  },
  {
    id: 4,
    title: "Anexo: Indicadores Clave de Desempeño en Transformación Digital",
    code: "TD-AN-001",
    version: "1.0",
    date: "2025-03-08",
    subprocess: "Estadística",
    type: "Anexos",
    tag: "AN",
    color: "bg-red-600"
  },
  {
    id: 5,
    title: "Plan Estratégico de Transformación Digital",
    code: "TD-PG-001",
    version: "1.0",
    date: "2025-03-15",
    subprocess: "Planeación",
    type: "Programas",
    tag: "PG",
    color: "bg-red-600"
  }
];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doc.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'Todos los tipos' || doc.type === selectedType;
    const matchesSubprocess = selectedSubprocess === 'Todos los subprocesos' || doc.subprocess === selectedSubprocess;
    
    return matchesSearch && matchesType && matchesSubprocess;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Proceso de Transformación Digital
        </h1>
        <p className="text-gray-600">
          Implementación de estrategias y tecnologías digitales para optimizar procesos y mejorar la experiencia del cliente.
        </p>
      </div>



      {/* Process Characterization Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FileText className="w-5 h-5 text-gray-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Caracterización del Proceso</h2>
        </div>
        
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          {!uploadedPdf ? (
            <div>
              <div className="mb-4">
                <FileText className="w-16 h-16 text-gray-400 mx-auto" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Caracterización - Proceso de Transformación Digital
              </h3>
              
              <p className="text-gray-600 mb-6">
                Sube el documento PDF con la caracterización completa del proceso
              </p>
              
              <label className="cursor-pointer inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <FileText className="w-4 h-4 mr-2" />
                Subir PDF
                <input 
                  type="file" 
                  className="hidden" 
                  accept=".pdf"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setUploadedPdf({
                        name: e.target.files[0].name,
                        size: e.target.files[0].size
                      });
                    }
                  }}
                />
              </label>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <FileText className="w-16 h-16 text-blue-600 mx-auto" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Caracterización - Proceso de Transformación Digital
              </h3>
              
              <p className="text-gray-600 mb-2">
                {uploadedPdf.name}
              </p>
              
              <p className="text-sm text-gray-500 mb-6">
                Tamaño: {Math.round(uploadedPdf.size / 1024)} KB
              </p>
              
              <div className="flex justify-center gap-4 mb-4">
                <button className="flex items-center px-4 py-2 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver PDF
                </button>
                <button className="flex items-center px-4 py-2 text-green-600 border border-green-300 rounded-lg hover:bg-green-50 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar
                </button>
                <button 
                  onClick={() => setUploadedPdf(null)}
                  className="flex items-center px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Cambiar archivo
                </button>
              </div>
              
              <p className="text-sm text-gray-500">
                Código: IT-CAR-001 | Versión: 1.0 | Fecha: 2025-03-01 | Subproceso: Transformación Digital
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Document Library */}
      <div>
        <div className="flex items-center mb-4">
          <FileText className="w-5 h-5 text-gray-600 mr-2" />
          <h2 className="text-xl font-semibold text-gray-900">Biblioteca de Documentos</h2>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre o código..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option>Todos los tipos</option>
              <option>Documento externo</option>
              <option>Políticas</option>
              <option>Manual de Gestión</option>
              <option>Caracterizaciones</option>
              <option>Programas</option>
              <option>Procedimientos</option>
              <option>Instructivos de trabajo</option>
              <option>Anexos</option>
              <option>Formatos</option>
            </select>
            
            <select 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedSubprocess}
              onChange={(e) => setSelectedSubprocess(e.target.value)}
            >
              <option>Todos los subprocesos</option>
              <option>Estadística</option>
              <option>Centro de Excelencia</option>
                <option>Planeación</option>
            </select>
          </div>
        </div>

        {/* Documents List */}
        <div className="space-y-3">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className={`w-12 h-12 ${doc.color} rounded flex items-center justify-center text-white text-sm font-bold`}>
                    {doc.tag}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{doc.title}</h3>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <span>Código: {doc.code}</span>
                      <span>Versión: {doc.version}</span>
                      <span>Fecha: {doc.date}</span>
                      <span>Subproceso: {doc.subprocess}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4 mr-1" />
                    <span className="text-sm">Ver</span>
                  </button>
                  <button className="flex items-center px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4 mr-1" />
                    <span className="text-sm">Descargar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No se encontraron documentos que coincidan con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </div>
  );
}