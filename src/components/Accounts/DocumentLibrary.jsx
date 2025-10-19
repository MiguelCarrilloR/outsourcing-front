import React, { useState } from 'react';
import { Search, FileText, Download, Eye, ChevronDown } from 'lucide-react';

const DocumentLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  
  const companies = [
    {
      id: 'famisanar',
      name: 'FAMISANAR EPS',
      imageUrl: '',
      documents: [
        { 
          code: 'FAM-LIN-001',
          name: 'Líneas Amables',
          version: '1.0',
          date: '2024-01-15',
          type: 'Proceso',
          subprocess: 'Atención al Cliente'
        },
        { 
          code: 'FAM-TRA-001',
          name: 'Procesos de Traslados',
          version: '2.1',
          date: '2024-02-20',
          type: 'Procedimiento',
          subprocess: 'Gestión Administrativa'
        }
      ]
    },
    {
      id: 'etb',
      name: 'ETB',
      imageUrl: '',
      documents: [
        { 
          code: 'ETB-ALE-001',
          name: 'Alertas MED y Gestor Detractores',
          version: '1.2',
          date: '2024-01-10',
          type: 'Manual',
          subprocess: 'Gestión de Calidad'
        },
        { 
          code: 'ETB-DRI-001',
          name: 'Anexo - Proceso Básicas Drive Ofertas',
          version: '1.0',
          date: '2024-02-05',
          type: 'Procedimiento',
          subprocess: 'Ventas'
        },
        { 
          code: 'ETB-PED-001',
          name: 'Gestor de pedidos',
          version: '3.0',
          date: '2024-03-01',
          type: 'Manual',
          subprocess: 'Operaciones'
        },
        { 
          code: 'ETB-FIJ-001',
          name: 'Gestor Fijo',
          version: '1.5',
          date: '2024-01-25',
          type: 'Manual',
          subprocess: 'Servicios'
        },
        { 
          code: 'ETB-MOV-001',
          name: 'Gestor Móvil',
          version: '2.0',
          date: '2024-02-15',
          type: 'Manual',
          subprocess: 'Servicios'
        }
      ]
    },
    {
      id: 'hdi',
      name: 'HDI SEGUROS',
      imageUrl: '',
      documents: [
        { 
          code: 'HDI-ATE-001',
          name: 'Proceso Líneas de atención',
          version: '1.0',
          date: '2024-01-20',
          type: 'Proceso',
          subprocess: 'Atención al Cliente'
        }
      ]
    },
    {
      id: 'cardif',
      name: 'BNP PARIBAS CARDIF',
      imageUrl: '',
      documents: [
        { 
          code: 'CAR-FAC-001',
          name: 'Proceso Facturación',
          version: '2.0',
          date: '2024-02-10',
          type: 'Proceso',
          subprocess: 'Facturación'
        },
        { 
          code: 'CAR-DAT-001',
          name: 'Proceso Tratamiento bases de datos',
          version: '1.3',
          date: '2024-03-05',
          type: 'Procedimiento',
          subprocess: 'Tecnología'
        }
      ]
    },
    {
      id: 'falabella',
      name: 'BANCO FALABELLA',
      imageUrl: '',
      documents: [
        { 
          code: 'FAL-CAN-001',
          name: 'Cancelación de producto',
          version: '1.0',
          date: '2024-01-30',
          type: 'Procedimiento',
          subprocess: 'Productos'
        },
        { 
          code: 'FAL-COM-001',
          name: 'Compra cartera',
          version: '1.2',
          date: '2024-02-28',
          type: 'Proceso',
          subprocess: 'Cartera'
        },
        { 
          code: 'FAL-RET-001',
          name: 'Compra de cartera y Retención',
          version: '2.0',
          date: '2024-03-10',
          type: 'Proceso',
          subprocess: 'Cartera'
        }
      ]
    }
  ];

  const documentTypes = ['all', 'Proceso', 'Procedimiento', 'Manual', 'Política'];

  // --- Helpers: normalizar y validar "Formato(s)" ---
  const normalizar = (txt = '') =>
    txt.toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

  const esFormato = (type = '') => {
    const t = normalizar(type);
    return t === 'formato' || t === 'formatos';
  };

  const getFilteredDocuments = () => {
    let allDocs = [];
    
    companies.forEach(company => {
      const companyMatches = selectedCompany === 'all' || company.id === selectedCompany;
      if (!companyMatches) return;

      company.documents.forEach(doc => {
        const typeMatches = selectedType === 'all' || doc.type === selectedType;
        const term = normalizar(searchTerm);
        const searchMatches =
          term === '' ||
          normalizar(doc.name).includes(term) ||
          normalizar(doc.code).includes(term) ||
          normalizar(company.name).includes(term);

        if (typeMatches && searchMatches) {
          allDocs.push({
            ...doc,
            companyName: company.name,
            companyId: company.id
          });
        }
      });
    });
    
    return allDocs;
  };

  const filteredDocuments = getFilteredDocuments();

  const getTypeColor = (type) => {
    const colors = {
      'Proceso': 'bg-blue-600',
      'Procedimiento': 'bg-red-600',
      'Manual': 'bg-purple-600',
      'Política': 'bg-green-600',
      'Formato': 'bg-emerald-600',
      'Formatos': 'bg-emerald-600',
    };
    return colors[type] || 'bg-gray-600';
  };

  const getTypeAbbr = (type) => {
    const abbr = {
      'Proceso': 'PO',
      'Procedimiento': 'PR',
      'Manual': 'MA',
      'Política': 'PL',
      'Formato': 'FO',
      'Formatos': 'FO',
    };
    return abbr[type] || 'DO';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
              JA
            </div>
            <span className="font-medium">Jairo Alonso Prieto Rodriguez</span>
            <span className="text-gray-400">|</span>
            <span>GERENTE SECTOR PRIVADO</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Biblioteca de Documentos</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Filters Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar por nombre o código..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Company Filter */}
            <div className="relative">
              <select
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">Todas las empresas</option>
                {companies.map(company => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">Todos los tipos</option>
                {documentTypes.filter(t => t !== 'all').map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Company Sections */}
        {selectedCompany === 'all' ? (
          // Show by company
          companies.map(company => {
            const companyDocs = filteredDocuments.filter(doc => doc.companyId === company.id);
            if (companyDocs.length === 0) return null;
            
            return (
              <div key={company.id} className="mb-8">
                {/* Company Header with Image Space */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                  <div className="flex items-center gap-4">
                    {/* Image Placeholder */}
                    <div className="w-32 h-20 bg-gray-100 rounded flex items-center justify-center border-2 border-dashed border-gray-300">
                      {company.imageUrl ? (
                        <img src={company.imageUrl} alt={company.name} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-gray-400 text-xs text-center px-2">Logo {company.name}</span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{company.name}</h2>
                      <p className="text-sm text-gray-500">{companyDocs.length} documentos</p>
                    </div>
                  </div>
                </div>

                {/* Documents List */}
                <div className="space-y-3">
                  {companyDocs.map((doc, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className={`${getTypeColor(doc.type)} w-12 h-12 rounded flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white font-bold text-sm">{getTypeAbbr(doc.type)}</span>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 mb-1">{doc.name}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                            <span>Código: {doc.code}</span>
                            <span>Versión: {doc.version}</span>
                            <span>Fecha: {doc.date}</span>
                            <span>Subproceso: {doc.subprocess}</span>
                            <span>Tipo: {doc.type}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 flex-shrink-0">
                          <button className="flex items-center gap-1 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                            <Eye className="w-4 h-4" />
                            Ver
                          </button>
                          {esFormato(doc.type) ? (
                            <button className="flex items-center gap-1 px-3 py-1.5 text-green-600 hover:bg-green-50 rounded text-sm transition-colors">
                              <Download className="w-4 h-4" />
                              Descargar
                            </button>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          // Show selected company only
          <div className="space-y-3">
            {filteredDocuments.map((doc, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`${getTypeColor(doc.type)} w-12 h-12 rounded flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{getTypeAbbr(doc.type)}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 mb-1">{doc.name}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                      <span>Código: {doc.code}</span>
                      <span>Versión: {doc.version}</span>
                      <span>Fecha: {doc.date}</span>
                      <span>Subproceso: {doc.subprocess}</span>
                      <span>Tipo: {doc.type}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <button className="flex items-center gap-1 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded text-sm transition-colors">
                      <Eye className="w-4 h-4" />
                      Ver
                    </button>
                    {esFormato(doc.type) ? (
                      <button className="flex items-center gap-1 px-3 py-1.5 text-green-600 hover:bg-green-50 rounded text-sm transition-colors">
                        <Download className="w-4 h-4" />
                        Descargar
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-600 mb-1">No se encontraron documentos</h3>
            <p className="text-sm text-gray-500">Intenta ajustar los filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentLibrary;
