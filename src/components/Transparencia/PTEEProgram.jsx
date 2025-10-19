import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Target, BarChart3, Users, FileText, Archive, Search, Download, Eye } from 'lucide-react';

const PTEEProgram = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    {
      id: 'politica',
      title: 'POLÍTICA PROGRAMA SAGRILAFT',
      icon: Shield,
      slides: [
        {
          title: 'POLÍTICA DE CUMPLIMIENTO ANTICORRUPCIÓN Y ANTISOBORNO',
          content: `En Outsourcing S.A.S. BIC desde la Alta Gerencia, estamos firmemente comprometidos con la lucha contra la corrupción y/o soborno transnacional en adelante C/ST porque creemos que la ética empresarial y la integridad son pilares fundamentales para el desarrollo de nuestras operaciones. En concordancia con lo anterior y las disposiciones normativas que regulan la prevención de actos de corrupción, contamos con principios y valores registrados en el Código de Ética e Integridad junto con procedimientos consignados en el Programa de Transparencia y Ética Empresarial que buscan generar cultura de cumplimiento y que sirven como punto de partida para el correcto actuar de todos los Colaboradores de la Compañía.

La integridad de la Compañía no es negociable, por ende, no se tolera la falta de transparencia en la información o en los procedimientos que la entidad ha establecido para agotar trámites a nivel interno y externo. Como lineamientos indispensables para dar cumplimiento a esta política, tenemos que Outsourcing S.A.S. BIC:

☑ Identifica, mide, evalúa, controla y monitorea, los riesgos a los que está expuesta.

☑ No acepta regalos, obsequios o cualquier otra forma de gratificación que pueda influir indebidamente en sus decisiones comerciales o comprometer su integridad.

☑ No efectúa pagos de comisión. Únicamente entrega incentivos por cumplimiento de indicadores, siempre que se agoten las respectivas validaciones y autorizaciones.

☑ No realiza contribuciones financieras o donaciones a partidos, candidatos o entidades políticas.

☑ Vigila que todos los gastos relacionados con el entretenimiento, la alimentación, el hospedaje y los viajes sean debidamente justificados y relacionados con actividades comerciales legítimas de la Compañía.`
        },
        {
          title: 'POLÍTICA DE CUMPLIMIENTO ANTICORRUPCIÓN Y ANTISOBORNO',
          content: `☑ No realiza donaciones a entidades con o sin fines de lucro a menos que estén debidamente justificadas y sean coherentes con nuestra misión empresarial y valores éticos.

☑ Tiene definidos los deberes específicos de los empleados que estén mayormente expuestos al Riesgo C/ST.

☑ Realiza auditorías para verificar la precisión de los registros contables y garantizar la transparencia en las transacciones financieras y de activos en la Compañía, evitando cualquier ocultamiento de pagos directos o indirectos asociados con prácticas corruptas.

☑ Brinda capacitación periódica sobre las políticas y procedimientos anticorrupción y antisoborno de la Compañía a sus colaboradores para que estos den cumplimiento a la misma.

☑ Fomenta un ambiente en el que los empleados se sientan seguros y cómodos para informar cualquier irregularidad o preocupación relacionada con la C/ST.

☑ Dispone el correo electrónico: ✉ transparencia@outsourcing.com.co y la línea telefónica ☎ 601 602 48 29 para que sirva como canal de denuncias y facilitar la presentación de informes de manera confidencial.

☑ Cumple con todas las leyes y regulaciones anticorrupción y antisoborno aplicables en todas las jurisdicciones en las que operamos.

La violación de esta política por parte de cualquier empleado de Outsourcing S.A.S. BIC puede resultar en medidas disciplinarias, incluida la terminación del empleo, así como en acciones legales según corresponda.

Esta política tendrá vigencia a partir de su publicación y se revisará periódicamente para garantizar su eficacia y relevancia continua en la lucha contra la corrupción y el soborno transnacional.`
        }
      ]
    },
    {
      id: 'introduccion',
      title: 'INTRODUCCIÓN - ALCANCE - OBJETIVOS',
      icon: Target,
      slides: [
        {
          title: 'INTRODUCCIÓN',
          content: `La corrupción, tanto en Colombia como en todo el mundo, constituye una amenaza constante para la paz, la seguridad, el desarrollo y la salvaguardia de los derechos humanos. Ante esta realidad, tanto entidades internacionales como nacionales han promulgado regulaciones destinadas a prevenir y gestionar cualquier manifestación de corrupción y soborno transnacional, así como otros delitos asociados.

Conscientes de la importancia de abordar estos desafíos, Colombia ha dirigido sus esfuerzos no solo hacia la investigación y sanción de prácticas corruptas, sino también hacia la emisión de directrices administrativas y legislativas que obliguen a las empresas a adoptar medidas para prevenir, detectar y corregir los riesgos de corrupción y soborno transnacional. Entre estas regulaciones se incluye la Circular Externa 100-000010 de 2020 y la Circular Externa 100-000012 de 2021 emitidas por la Superintendencia de Sociedades, con el fin de implementar herramientas que contribuyan a sancionar y prevenir actos ilícitos, y promover una cultura de legalidad, corresponsabilidad, integridad y transparencia en el sector privado.

En consonancia con lo anterior, Outsourcing S.A.S. BIC, en adelante OUTSOURCING o la Compañía, ha desarrollado el Programa de Transparencia y Ética Empresarial (PTEE), centrado en brindar mayor seguridad a todos los involucrados, haciendo énfasis en la prevención sin descuidar los esfuerzos en las actividades de detección y respuesta.

Este manual presenta las políticas para la administración del riesgo de corrupción y soborno transnacional (C/ST), así como su estructura organizacional, roles y responsabilidades de los participantes, junto con las medidas para garantizar su implementación, funcionamiento y cumplimiento.`
        },
        {
          title: 'ALCANCE',
          content: `El presente manual aplica para los miembros de la Asamblea de Accionistas, empleados, proveedores, clientes/usuarios, revisoría fiscal, auditoría interna o externa, prestadores, contratistas, aliados estratégicos y demás personas vinculado a la Compañía. En especial, para las áreas y los procesos que pueden llegar a verse expuestas a la materialización de los riesgos de C/ST.

En desarrollo de su alcance, los principios enmarcados en el manual son de obligatorio cumplimiento, motivo por el cual, el desconocimiento de estos no justifica ni exoneran las conductas que contravengan las medidas de mitigación que prevengan la materialización del riesgo en mención.`
        },
        {
          title: 'OBJETIVO GENERAL',
          content: `Establecer y documentar las políticas, lineamientos, procedimientos y metodologías necesarias para la prevención, detección y respuesta a los riesgos de C/ST que pueda enfrentar la Compañía y evitar afectaciones jurídicas, económicas, operacionales y reputacionales que pueden ocasionar de acuerdo con el Código de Integridad institucional.

De igual forma, pretende orientar el actuar de todas las contrapartes de la Compañía en relación con su importante participación y compromiso de cara a la gestión de los riesgos que administra el presente programa.`
        }
      ]
    },
    {
      id: 'infografia',
      title: 'INFOGRAFÍA PROGRAMA PTEE',
      icon: BarChart3,
      slides: [
        {
          title: 'PTEE - Programa de Transparencia y Ética Empresarial',
          content: `🏛 PTEE
Programa de Transparencia y Ética
Empresarial

Es un conjunto de políticas y procedimientos específicos encaminados a identificar, detectar, prevenir, gestionar y mitigar los Riesgos de Corrupción o los Riesgos de Soborno Transnacional que puedan afectar a la empresa`,
          isInfographic: true,
          infographicType: 'intro'
        },
        {
          title: '¿Qué regula el PTEE?',
          content: `Prohibición pagos y dádivas

Entrega de regalos o beneficios

Pagos de comisiones y remuneraciones

Viajes y gastos relacionados

Contribuciones políticas

Donaciones`,
          isInfographic: true,
          infographicType: 'regulations'
        },
        {
          title: 'Delitos Fuente',
          content: `Corrupción
Se refiere al mal uso o abuso de las facultades derivadas de una relación de autoridad o confianza o posición de dominio, para la obtención de una ventaja indebida, tanto en el sector público como en el privado

Soborno transnacional
Es el acto en virtud del cual uno o varios empleados, contratistas, administradores, o asociados o vinculados a una persona jurídica, le ofrecen o prometen, a un servidor público extranjero, directa o indirectamente sumas de dinero, cualquier objeto de valor pecuniario u otro beneficio o utilidad, a cambio de que el servidor público extranjero: realice, omita, o retarde, cualquier acto relacionado con el ejercicio de sus funciones y en relación con un negocio`,
          isInfographic: true,
          infographicType: 'crimes'
        },
        {
          title: 'Canal de Denuncias',
          content: `Nosotros decimos NO a la corrupción y soborno, si sabes o conoces de alguna práctica corrupta no dudes en denunciar:
oficialdecumplimiento@outsourcing.com.co
transparencia@outsourcing.com.co
línea telefónica ☎ 601 602 48 29`,
          isInfographic: true,
          infographicType: 'reporting'
        },
        {
          title: 'Oficial de Cumplimiento y Manual PTEE',
          content: `Oficial de Cumplimiento
Es el funcionario de OUTSOURCING encargado de administrar el sistema y verificar el cumplimiento de los lineamientos en materia de actos éticos que puedan afectar la integridad de la compañía descritos en el manual.

Manual PTEE

Compromiso de todos
Abstenerse de recibir regalos, hacer favores o atenciones de terceros que implique una contraprestación.
No incluir personas con un beneficio personal`,
          isInfographic: true,
          infographicType: 'compliance'
        },
        {
          title: 'Garantía línea Ética',
          content: `Garantía línea Ética

• Asegurar el funcionamiento de la línea de ética.
• Reportar de manera anónima y a nombre propio las infracciones del PTEE.
• Los empleados que reporten un caso de corrupción o soborno no serán objeto de represalias.`,
          isInfographic: true,
          infographicType: 'ethics'
        }
      ]
    },
    {
      id: 'presentacion',
      title: 'PRESENTACIÓN GENERAL PROGRAMA PTEE',
      icon: Users,
      slides: Array.from({ length: 28 }, (_, index) => ({
        title: `Presentación General - Diapositiva ${index + 1}`,
        content: `Contenido de la diapositiva ${index + 1} de la presentación general del Programa de Transparencia y Ética Empresarial (PTEE).

Aquí se incluirá el contenido específico de cada una de las 28 diapositivas de PowerPoint que conforman la presentación general del programa.`
      }))
    },
    {
      id: 'requisitos',
      title: 'REQUISITOS NORMATIVOS',
      icon: FileText,
      slides: [
        {
          title: 'REQUISITOS NORMATIVOS',
          content: `Normas y Estándares Internacionales

• La política anticorrupción de la Unión Europea definida en el artículo 29 del Tratado sobre la Unión Europea.

• Convenio relativo a la lucha contra los actos de corrupción en los que estén implicados funcionarios de las Comunidades Europeas o de los Estados miembros de la Unión Europea que entró en vigor en 1997.

• La Convención Interamericana contra la Corrupción, que entró en vigor en 1997 e incluye a los países miembros de la Organización de los Estados Americanos.

• El Convenio Penal sobre la Corrupción del Consejo de Europa, que entró en vigor en 1998.

• El Convenio Civil sobre la Corrupción del Consejo de Europa, que entró en vigor en 1999.

• La Convención Sobre la Lucha Contra el Soborno de funcionarios Públicos Extranjeros en Transacciones Comerciales Internacionales, que entró en vigor en 1999.

• La Convención de la Unión Africana para prevenir y combatir la corrupción, que entró en vigor en 2003.

• La Convención de las Naciones Unidas contra la Corrupción (CNUCC), la cual entró en vigor en 2005.

Los anteriores acuerdos ordenan a los estados miembros, penalizar y castigar las prácticas corruptas. Tienen efecto directo sobre las empresas, estableciendo la responsabilidad para las personas jurídicas por actos corruptos, así como lo hace la Convención para la Lucha contra el Soborno OCDE -2009.`
        },
        {
          title: 'REQUISITOS NORMATIVOS',
          content: `Normas Nacionales

Dentro de las estrategias para la gestión del fraude del Gobierno Nacional junto con la convención para la organización, cooperación y desarrollo económico "OCDE" se han establecido distintos mecanismos que buscan combatir el cohecho de los servidores públicos extranjeros en las transacciones internacionales.

El Gobierno de Colombia aprobó la Ley 1778 del 02 de febrero de 2016, también conocida como "Ley Anti-Corrupción" donde se establece un régimen especial para que, en caso de ser necesario, se impongan sanciones administrativas a las personas jurídicas vigiladas y controladas por la Superintendencia de Sociedades que hayan incurrido en conductas transnacional.

También contamos con la Ley 1474 de 2011 (Estatuto Anticorrupción) que dicta normas orientadas a fortalecer los mecanismos de prevención, investigación y sanción de actos de corrupción y la efectividad del control de la gestión pública.

Adicionalmente se dicta la Resolución No. 100-002657 del 25 julio de 2016 expedida por la Superintendencia de Sociedades en la que se establecen los criterios de aplicabilidad del artículo 23 de la Ley 1778 de 2016, que le asigna funciones a la Superintendencia de Sociedades se promover en las sociedades bajo su vigilancia y control, la implementación y adopción de Programas de Transparencia y Ética Empresarial, mecanismos internos de anticorrupción, de normas internas de auditoría y promoción de la transparencia y mecanismos de prevención de conductas de Soborno Transnacional.`
        },
        {
          title: 'REQUISITOS NORMATIVOS',
          content: `Normas Nacionales

Finalmente, como medida para evidenciar un apoyo a la ley propuesta de soborno transnacional, se expidieron las Circulares Externas 100-000010 de 2016, 100-000004 de 2017 y 100-000002 de 2021 que en su conjunto profundizan en las instrucciones y recomendaciones administrativas relacionadas con la promoción de los Programas de Transparencia y Ética Empresarial y brindan mecanismos internos de auditoría, anticorrupción y prevención del soborno transnacional y la corrupción, en desarrollo de la Ley 1778 de 2016 y el Decreto 1736 de 2020.

Ley 2195 de 2022: Ley que otorga rol a la Superintendencia de Sociedades mayores facultades y sanciones, en el marco de la ley de transparencia y lucha contra la corrupción.

Decreto 830 del 2021 donde se modifican y adicionan algunos artículos referentes al Único Reglamentario del Sector Presidencia de la República", en relacionado con el Régimen de las Personas Expuestas Políticamente -PEP-, a que se refiere el artículo 52 de la Convención de las Naciones Unidas Contra la Corrupción.`
        }
      ]
    },
    {
      id: 'repositorio',
      title: 'REPOSITORIO DOCUMENTAL',
      icon: Archive,
      isRepository: true
    }
  ];

  const documents = [
    {
      id: 'PR',
      title: 'Procedimiento de Gestión del Centro de Excelencia Digital',
      code: 'TD-PR-001',
      version: '1.0',
      date: '2025-02-14',
      subprocess: 'Centro de excelencia',
      bgColor: 'bg-red-500'
    },
    {
      id: 'PO',
      title: 'Política de Transformación Digital y Gobernanza Tecnológica',
      code: 'TD-PO-001',
      version: '1.0',
      date: '2025-02-22',
      subprocess: 'Planeación',
      bgColor: 'bg-red-500'
    },
    {
      id: 'FO',
      title: 'Formato de Reporte Estadístico de Madurez Digital',
      code: 'TD-FO-001',
      version: '1.0',
      date: '2025-03-05',
      subprocess: 'Estadística',
      bgColor: 'bg-red-500'
    },
    {
      id: 'AN',
      title: 'Anexo: Indicadores Clave de Desempeño en Transformación Digital',
      code: 'TD-AN-001',
      version: '1.0',
      date: '2025-03-08',
      subprocess: 'Estadística',
      bgColor: 'bg-red-500'
    },
    {
      id: 'PG',
      title: 'Plan Estratégico de Transformación Digital',
      code: 'TD-PG-001',
      version: '1.0',
      date: '2025-03-15',
      subprocess: 'Planeación',
      bgColor: 'bg-red-500'
    }
  ];

  const nextSlide = () => {
    if (!tabs[activeTab].isRepository) {
      const totalSlides = tabs[activeTab].slides.length;
      if (currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    setCurrentSlide(0);
  };

  const renderInfographicContent = (slide) => {
    switch (slide.infographicType) {
      case 'intro':
        return (
          <div className="text-center py-8">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">PTEE</h2>
              <h3 className="text-2xl text-blue-600 font-semibold mb-6">
                Programa de Transparencia y Ética<br />Empresarial
              </h3>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-6xl">⚖️</div>
                <div className="text-left max-w-md">
                  <p className="text-gray-700 leading-relaxed">
                    Es un conjunto de políticas y procedimientos específicos 
                    encaminados a identificar, detectar, prevenir, gestionar y 
                    mitigar los Riesgos de Corrupción o los Riesgos de Soborno 
                    Transnacional que puedan afectar a la empresa
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'regulations':
        return (
          <div className="text-center py-8">
            <h3 className="text-2xl text-blue-600 font-bold mb-8">¿Qué regula el PTEE?</h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                'Prohibición pagos y dádivas',
                'Entrega de regalos o beneficios', 
                'Pagos de comisiones y remuneraciones',
                'Viajes y gastos relacionados',
                'Contribuciones políticas',
                'Donaciones'
              ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-sm">
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'crimes':
        return (
          <div className="py-8">
            <h3 className="text-2xl text-blue-600 font-bold text-center mb-8">Delitos Fuente</h3>
            <div className="bg-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Corrupción</h4>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">👥💼</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Se refiere al mal uso o abuso de las facultades derivadas de una 
                    relación de autoridad o confianza o posición de dominio, para la 
                    obtención de una ventaja indebida, tanto en el sector público como en el privado
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Soborno transnacional</h4>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">🤝💰</div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Es el acto en virtud del cual uno o varios empleados, contratistas, 
                    administradores, o asociados o vinculados a una persona jurídica, le 
                    ofrecen o prometen, a un servidor público extranjero, directa o 
                    indirectamente sumas de dinero, cualquier objeto de valor pecuniario u 
                    otro beneficio o utilidad, a cambio de que el servidor público extranjero: 
                    realice, omita, o retarde, cualquier acto relacionado con el ejercicio de 
                    sus funciones y en relación con un negocio
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'reporting':
        return (
          <div className="text-center py-8">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="text-6xl">📧</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Nosotros decimos <span className="text-red-600 text-4xl">NO</span> a la corrupción y<br />
                  soborno, si sabes o conoces de alguna práctica<br />
                  corrupta no dudes en denunciar:
                </h3>
                <div className="space-y-2 text-lg">
                  <div className="text-blue-600 underline">oficialdecumplimiento@outsourcing.com.co</div>
                  <div className="text-blue-600 underline">transparencia@outsourcing.com.co</div>
                  <div className="text-gray-800">línea telefónica ☎ 601 602 48 29</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'compliance':
        return (
          <div className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">📢</div>
                  <h3 className="text-xl text-blue-600 font-bold">Oficial de Cumplimiento</h3>
                </div>
                <p className="text-gray-700 mb-8">
                  Es el funcionario de <strong>OUTSOURCING</strong> encargado de administrar el sistema y 
                  verificar el cumplimiento de los lineamientos en materia de actos éticos que puedan 
                  afectar la integridad de la compañía descritos en el manual.
                </p>
                
                <div className="bg-teal-600 text-white p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Compromiso de todos</h4>
                  <ul className="text-sm space-y-1">
                    <li>Abstenerse de recibir regalos, hacer favores o atenciones de terceros que implique una contraprestación.</li>
                    <li>No incluir personas con un beneficio personal</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="text-xl text-blue-600 font-bold mb-4">Manual PTEE</div>
                <div className="bg-red-500 text-white p-8 rounded-lg text-center relative">
                  <div className="text-4xl mb-2">👨‍💼</div>
                  <div className="text-lg font-bold">MANUAL<br />PTEE</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'ethics':
        return (
          <div className="py-8">
            <div className="flex items-center space-x-8">
              <div className="text-6xl">🌈✋</div>
              <div>
                <h3 className="text-2xl text-blue-600 font-bold mb-6">Garantía línea Ética</h3>
                <div className="bg-teal-700 text-white p-6 rounded-lg">
                  <ul className="space-y-3">
                    <li>• Asegurar el funcionamiento de la línea de ética.</li>
                    <li>• Reportar de manera anónima y a nombre propio las infracciones del PTEE.</li>
                    <li>• Los empleados que reporten un caso de corrupción o soborno no serán objeto de represalias.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>{slide.content}</div>;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Programa PTEE</h1>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-b">
          <div className="flex">
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(index)}
                  className={`flex-1 px-4 py-6 flex flex-col items-center justify-center space-y-2 border-b-3 transition-all hover:bg-gray-50 ${
                    activeTab === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-transparent'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    activeTab === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <IconComponent size={24} />
                  </div>
                  <span className={`text-xs text-center font-medium leading-tight ${
                    activeTab === index ? 'text-blue-700' : 'text-gray-600'
                  }`}>
                    {tab.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {tabs[activeTab].isRepository ? (
            /* Repository Content */
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">REPOSITORIO DOCUMENTAL</h2>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Biblioteca de Documentos</h3>
              </div>

              {/* Search Section */}
              {/* Search Section */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Biblioteca de Documentos</h4>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Buscar por nombre o código..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-w-40">
                    <option>Todos los tipos</option>
                    <option>Procedimientos</option>
                    <option>Políticas</option>
                    <option>Formatos</option>
                  </select>
                </div>
              </div>

              {/* Documents List */}
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.code} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${doc.bgColor} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                          {doc.id}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{doc.title}</h4>
                          <div className="flex space-x-4 text-xs text-gray-500 mt-1">
                            <span>Código: {doc.code}</span>
                            <span>Versión: {doc.version}</span>
                            <span>Fecha: {doc.date}</span>
                            <span>Subproceso: {doc.subprocess}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded text-sm font-medium">
                          Ver
                        </button>
                        <button className="px-3 py-1 text-green-600 hover:bg-green-50 rounded text-sm font-medium">
                          Descargar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t">
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800">
                  <ChevronLeft size={20} />
                  <span>Anterior</span>
                </button>
                <div className="text-center">
                  <span className="text-sm text-gray-500">Módulo 6 de 6</span>
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800">
                  <span>Siguiente</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ) : (
            /* Regular Content */
            <div>
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-gray-800">{tabs[activeTab].slides[currentSlide].title}</h2>
                <div className="text-right text-sm text-gray-500">
                  <div>Página {currentSlide + 1} de {tabs[activeTab].slides.length}</div>
                  <div className="flex space-x-1 mt-1">
                    <button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={currentSlide === tabs[activeTab].slides.length - 1}
                      className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white rounded-lg border p-8">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-4 h-4 bg-red-600 rounded"></div>
                    <h3 className="font-bold text-gray-800 text-lg">{tabs[activeTab].slides[currentSlide].title}</h3>
                  </div>
                </div>
                
                <div className="text-gray-700 leading-relaxed">
                  {tabs[activeTab].slides[currentSlide].isInfographic ? 
                    renderInfographicContent(tabs[activeTab].slides[currentSlide]) :
                    <div className="whitespace-pre-line">{tabs[activeTab].slides[currentSlide].content}</div>
                  }
                </div>

                {/* Outsourcing Logo/Signature */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex justify-end">
                    <div className="text-red-600 font-bold italic text-lg">Outsourcing</div>
                  </div>
                </div>
              </div>

              {/* Footer Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                  <span>Anterior</span>
                </button>
                <div className="text-center">
                  <span className="text-sm text-gray-500">Módulo {activeTab + 1} de {tabs.length}</span>
                </div>
                <button
                  onClick={nextSlide}
                  disabled={!tabs[activeTab].slides || currentSlide === tabs[activeTab].slides.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Siguiente</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PTEEProgram;