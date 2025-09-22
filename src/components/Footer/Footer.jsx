import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t border-gray-300 py-3 px-6 mt-auto">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="italic">
          Gerencia de Mejora Continua y experiencia
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-red-600 font-bold text-lg">Outsourcing</span>
        </div>
        
        <div>
          © Todos los derechos reservados - 2025 - Outsourcing S.A.S BIC
        </div>
      </div>
    </footer>
  )
}

export default Footer