import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Target, 
  Users, 
  FileText, 
  Shield, 
  ChevronDown, 
  ChevronRight,
  Menu,
  X,
  Settings,
  TrendingUp,
  LogOut
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const menuItems = [
    {
      section: 'GENERAL',
      items: [
        {
          key: 'inicio',
          label: 'INICIO',
          icon: Home,
          path: '/home', 
          hasSubmenu: false
        }
      ]
    },
    {
      section: 'MACROPROCESOS',
      items: [
        {
          key: 'macroproceso-estrategico',
          label: 'ESTRATÉGICO',
          icon: Target,
          hasSubmenu: true,
          submenu: [
            { label: 'Inicio', path: '/estrategico/inicio' },
            { label: 'Direccionamiento Estratégico', path: '/estrategico/direccionamiento' },
            { label: 'Gestión de Innovación', path: '/estrategico/innovacion' }
          ]
        },
        {
          key: 'macroproceso-misional',
          label: 'MISIONAL',
          icon: BookOpen,
          hasSubmenu: true,
          submenu: [
            { label: 'Inicio', path: '/misional/inicio' },
            { label: 'Gestión Comercial', path: '/misional/comercial' },
            { label: 'Implementación', path: '/misional/implementacion' },
            { label: 'Operaciones', path: '/misional/operaciones' }
          ]
        },
        {
          key: 'macroproceso-soporte',
          label: 'SOPORTE',
          icon: Users,
          hasSubmenu: true,
          submenu: [
            { label: 'Inicio', path: '/soporte/inicio' },
            { label: 'Tecnología', path: '/soporte/tecnologia' },
            { label: 'Transformación Digital', path: '/soporte/transformacion' },
            { label: 'Gestión Administrativa y Financiera', path: '/soporte/administrativa' },
            { label: 'Gestión Humana', path: '/soporte/humana' },
            { label: 'Valoración de la experiencia y calidad CX', path: '/soporte/cx' },
            { label: 'Mejora Continua', path: '/soporte/mejora' }
          ]
        }
      ]
    },
    {
      section: 'PROGRAMAS',
      items: [
        {
          key: 'programa-sagrilaft',
          label: 'SAGRILAFT',
          icon: FileText,
          path: '/sagrilaft',
          hasSubmenu: false
        },
        {
          key: 'transparencia-etica',
          label: 'TRANSPARENCIA Y ÉTICA EMPRESARIAL',
          icon: Shield,
          path: '/transparencia',
          hasSubmenu: false
        },
        {
          key: 'programa-proteccion-datos',
          label: 'PROTECCIÓN DE DATOS PERSONALES',
          icon: FileText,
          path: '/proteccion-datos',
          hasSubmenu: false
        }
      ]
    },
    {
      section: 'ADMINISTRADOR',
      items: [
        {
          key: 'accounts',
          label: 'CUENTAS',
          icon: FileText,
          path: '/cuentas',
          hasSubmenu: false
        },
        {
          key: 'cerrar-sesion',
          label: 'CERRAR SESIÓN',
          icon: LogOut,
          path: '/logout',
          hasSubmenu: false
        }
      ]
    }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors md:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        fixed md:relative
        left-0 top-0 h-full md:h-auto
        bg-white shadow-lg transition-transform duration-300
        w-64 border-r border-gray-200
        z-40 md:z-auto
        flex flex-col
      `}>
        {/* Header */}
        <div className="bg-white p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">Repositorio</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-2">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              {/* Section Header */}
              <div className="px-4 py-2">
                <h2 className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  {section.section}
                </h2>
              </div>

              {/* Section Items */}
              <ul>
                {section.items.map((item) => (
                  <li key={item.key}>
                    {/* Item principal */}
                    {item.hasSubmenu ? (
                      <>
                        <div
                          className={`
                            flex items-center justify-between px-4 py-2 cursor-pointer
                            transition-colors
                            ${expandedItems[item.key] 
                              ? 'bg-red-600 text-white' 
                              : 'hover:bg-gray-100 text-gray-700'
                            }
                          `}
                          onClick={() => toggleExpanded(item.key)}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon size={18} />
                            <span className="text-sm font-semibold uppercase">
                              {item.label}
                            </span>
                          </div>
                          <div>
                            {expandedItems[item.key] ? 
                              <ChevronDown size={16} /> : 
                              <ChevronRight size={16} />
                            }
                          </div>
                        </div>

                        {/* Submenu */}
                        {expandedItems[item.key] && (
                          <ul className="bg-gray-50">
                            {item.submenu.map((submenuItem, index) => (
                              <li key={index}>
                                <Link
                                  to={submenuItem.path}
                                  className="flex items-center px-12 py-2 hover:bg-gray-100 transition-colors text-gray-700 text-sm"
                                >
                                  {submenuItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-colors text-gray-700 group"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon size={18} />
                          <span className="text-sm font-semibold uppercase">
                            {item.label}
                          </span>
                        </div>
                        <ChevronRight size={16} className="text-gray-400" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;