
import React from 'react';

const SlidePiramide = () => {
  const pyramidData = [
    {
      id: 1,
      title: "Leyes, normas y\nreglamentos",
      icon: "📋",
      definition: "Marco legal y normativo que establece los fundamentos jurídicos y regulatorios que debe cumplir la organización."
    },
    {
      id: 2,
      title: "Direccionamiento\nEstratégico",
      icon: "📄",
      definition: "Planeación estratégica que define la misión, visión, objetivos estratégicos y directrices generales de la organización."
    },
    {
      id: 3,
      title: "Políticas",
      icon: "📄",
      definition: "Conjunto de principios de carácter organizacional orientado a la forma transversal o que tienen un impacto puntual en cada uno de los procesos."
    },
    {
      id: 4,
      title: "Procedimientos",
      icon: "📋",
      definition: "Conjunto de pasos que explican la forma de llevar a cabo una actividad, agrupados de acuerdo a lo establecido en el mapa de procesos."
    },
    {
      id: 5,
      title: "Instructivos,\nmanuales de usuario",
      icon: "💬",
      definition: "Documentos que proporcionan instrucciones detalladas y específicas para realizar tareas particulares o usar sistemas específicos."
    },
    {
      id: 6,
      title: "Formatos",
      icon: "📄",
      definition: "Plantillas y formularios estandarizados utilizados para registrar información de manera consistente en los procesos organizacionales."
    }
  ];


  const levelConfigs = [
    { width: '200px', height: '60px', top: '0px', clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' },
    { width: '250px', height: '60px', top: '80px', clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' },
    { width: '300px', height: '60px', top: '160px', clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' },
    { width: '350px', height: '60px', top: '240px', clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' },
    { width: '400px', height: '60px', top: '320px', clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' },
    { width: '450px', height: '60px', top: '400px', clipPath: 'polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white-200 p-5">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        {/* Title */}
        <h1 
          className="text-center font-bold mb-10"
          style={{ 
            color: '#dc3545', 
            fontSize: '2.5em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          PIRÁMIDE DOCUMENTAL
        </h1>

        {/* Pyramid Container */}
        <div className="flex justify-center items-center relative mb-10" style={{ height: '600px' }}>
          <div className="relative" style={{ width: '600px', height: '500px' }}>
            
            {/* Pyramid Levels */}
            {pyramidData.map((level, index) => (
              <div
                key={level.id}
                className="absolute left-1/2 transform -translate-x-1/2 
                  text-white flex items-center justify-center font-bold text-center
                  p-2 shadow-lg transition-transform duration-300 hover:scale-105 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #dc3545, #c82333)',
                  width: levelConfigs[index].width,
                  height: levelConfigs[index].height,
                  top: levelConfigs[index].top,
                  clipPath: levelConfigs[index].clipPath,
                  fontSize: '14px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                }}
              >
                <span className="whitespace-pre-line mr-2">
                  {level.title}
                </span>
                <span className="text-base">{level.icon}</span>
              </div>
            ))}

            {/* Numbers */}
            <div 
              className="absolute flex justify-center items-center gap-10"
              style={{ 
                bottom: '-50px',
                width: '100%',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              {[6, 5, 4, 3, 2, 1].map((num) => (
                <div
                  key={num}
                  className="text-white rounded-full flex items-center justify-center font-bold shadow-lg"
                  style={{
                    background: '#dc3545',
                    width: '40px',
                    height: '40px',
                    fontSize: '18px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Definitions */}
        <div 
          className="grid gap-5"
          style={{ 
            marginTop: '60px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}
        >
          {pyramidData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-lg"
              style={{
                background: '#f8f9fa',
                borderLeft: '4px solid #dc3545'
              }}
            >
              <h3 className="mb-3 flex items-center" style={{ color: '#dc3545' }}>
                <span 
                  className="text-white rounded-full flex items-center justify-center font-bold mr-3"
                  style={{
                    background: '#dc3545',
                    width: '25px',
                    height: '25px',
                    fontSize: '14px'
                  }}
                >
                  {item.id}
                </span>
                <span className="font-semibold">
                  {item.title.replace('\n', ' ')}
                </span>
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidePiramide;