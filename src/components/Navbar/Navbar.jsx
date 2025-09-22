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
  X
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
      key: 'inicio',
      label: 'INICIO',
      icon: Home,
      path: '/', 
      hasSubmenu: false
    },
    {
      key: 'macroproceso-estrategico',
      label: 'MACROPROCESO ESTRATÉGICO',
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
      label: 'MACROPROCESO MISIONAL',
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
      label: 'MACROPROCESO SOPORTE',
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
    },
    {
      key: 'programa-sagrilaft',
      label: 'PROGRAMA SAGRILAFT',
      icon: FileText,
      path: '/sagrilaft',
      hasSubmenu: false
    },
    {
      key: 'transparencia-etica',
      label: 'PROGRAMA DE TRANSPARENCIA Y ÉTICA EMPRESARIAL',
      icon: Shield,
      path: '/transparencia',
      hasSubmenu: false
    },
    {
      key: 'programa-proteccion-datos',
      label: 'PROGRAMA PROTECCIÓN DE DATOS PERSONALES',
      icon: FileText,
      path: '/proteccion-datos',
      hasSubmenu: false
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
        w-80 border-r border-gray-200
        z-40 md:z-auto
        flex flex-col
      `}>
        {/* Header */}
        <div className="bg-red-600 text-white p-6">
          <div className="flex items-center space-x-3">
            {/* Logo placeholder */}
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="https://i.imgur.com/KKobDma.png" 
                alt="Logo Outsourcing" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold">Outsourcing</h1>
              <p className="text-sm opacity-90">"Mejorar vidas, nuestro compromiso"</p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-base font-semibold">RepositoriOS</h2>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            {menuItems.map((item) => (
              <li key={item.key} className="mb-1">
                {/* Item principal */}
                {item.hasSubmenu ? (
                  <div
                    className={`
                      flex items-center justify-between px-6 py-3 cursor-pointer
                      hover:bg-red-50 transition-colors group
                      ${expandedItems[item.key] ? 'bg-red-50' : ''}
                    `}
                    onClick={() => toggleExpanded(item.key)}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <item.icon 
                        className="text-red-600 group-hover:text-red-700" 
                        size={20} 
                      />
                      <span className="text-gray-800 text-sm font-medium group-hover:text-red-700">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-red-600 group-hover:text-red-700">
                      {expandedItems[item.key] ? 
                        <ChevronDown size={16} /> : 
                        <ChevronRight size={16} />
                      }
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center px-6 py-3 hover:bg-red-50 transition-colors group"
                  >
                    <item.icon className="text-red-600 group-hover:text-red-700" size={20} />
                    <span className="ml-3 text-gray-800 text-sm font-medium group-hover:text-red-700">
                      {item.label}
                    </span>
                  </Link>
                )}

                {/* Submenu */}
                {item.hasSubmenu && expandedItems[item.key] && (
                  <ul className="bg-gray-50 border-l-2 border-red-200 ml-6">
                    {item.submenu.map((submenuItem, index) => (
                      <li key={index}>
                        <Link
                          to={submenuItem.path}
                          className="flex items-center px-6 py-2 hover:bg-red-50 transition-colors group"
                        >
                          <span className="text-gray-700 text-sm group-hover:text-red-600 ml-6">
                            {submenuItem.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users size={16} className="text-red-600" />
            <span>Grupo público</span>
            <span className="ml-auto">2 miembros</span>
          </div>
        </div>
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