import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Target, BarChart3, Users, Shield, Eye, Database, Home, Briefcase, Book, UserCheck, Layers } from 'lucide-react';

const SagrilaftModule = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const modules = [
    {
      id: 1,
      title: "POLÍTICA PROGRAMA SAGRILAFT",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-red-500",
      slides: [
        {
          title: "POLÍTICAS DE AUTOCONTROL Y GESTIÓN DEL RIESGO INTEGRAL LA/FT/FPADM",
          content: `Estas políticas constituyen las directrices que rigen la actuación de las personas y de la Compañía en materia de SAGRILAFT, las cuales se traducen en procedimientos, actividades e instrucciones claras y efectivas al interior de Outsourcing para convertirlas en hechos tangibles.

Las políticas y procedimientos adoptados y que se adopten en el futuro por parte de Outsourcing respecto al SAGRILAFT, tienen como fin prevenir y minimizar el riesgo de que sea involucrada en temas de LA/FT/FPADM, razón por la cual la prevención abarcará todas las operaciones que realice Outsourcing con cualquiera de las contrapartes establecidas.

Outsourcing desarrollará los mecanismos para impulsar a nivel institucional la interiorización de la cultura respecto al SAGRILAFT, partiendo de los órganos de administración y de control, del Oficial de Cumplimiento y todos los Empleados de la Compañía.`
        }
      ]
    },
    {
      id: 2,
      title: "INTRODUCCIÓN - ALCANCE - OBJETIVOS",
      icon: <Target className="w-5 h-5" />,
      color: "bg-blue-500",
      slides: [
        {
          title: "INTRODUCCIÓN",
          content: `OUTSOURCING S.A.S BIC, en cumplimiento con lo establecido en la normatividad vigente en materia del Sistema de Autocontrol y Gestión del Riesgo Integral Lavado de Activos, Financiamiento del Terrorismo y Financiamiento de la Proliferación de Armas de Destrucción Masiva – SAGRILAFT en la Superintendencia de Sociedades, está orientada a apoyar en contrarrestar estos riesgos a los cuales está expuesta La Compañía en su operación, implementó este Sistema.

La implementación del PROGRAMA SAGRILAFT además de dar cumplimiento a la regulación nacional y la prevención de sanciones de tipo regulatorio, beneficia a La Compañía para la consolidación de su gobierno corporativo y la prevención del riesgo con enfoque hacia los riesgos legales, reputacionales, operativos y de contagio relacionados con los riesgos de LA/FT/FPADM que puedan afectarla.`
        },
        {
          title: "ALCANCE",
          content: `El presente manual contiene la metodología, políticas y procedimientos establecidos por Outsourcing para el autocontrol y gestión del riesgo de LA/FT/FPADM, conforme al análisis realizado a los procesos internos, relaciones con terceros (en adelante contrapartes), los servicios ofrecidos por La Compañía, sus canales de entrega y las jurisdicciones donde opera La Compañía.

Las disposiciones descritas en este manual son de obligatorio cumplimiento por parte de Accionistas, miembros de Junta Directiva, Representante Legal, Empleados, Clientes, Proveedores, y demás terceros que tengan algún tipo de vinculación comercial, de inversión o contractual con La Compañía.`
        },
        {
          title: "OBJETIVO GENERAL",
          content: `El PROGRAMA SAGRILAFT tiene como objetivo fortalecer los controles para evitar que La Compañía pueda ser usada o pueda prestarse como medio en actividades relacionadas con el lavado de activos, el financiamiento del terrorismo y el financiamiento de la proliferación de armas de destrucción masiva.

De esta forma, este manual tiene por objeto establecer los lineamientos del SAGRILAFT en La Compañía y constituirse en un documento de referencia, consulta y herramienta de trabajo para que toda persona natural y jurídica que tenga cualquier tipo de vínculo pueda conocer lo establecido por La Compañía en cumplimiento de lo dispuesto por la Superintendencia de Sociedades, para evitar que sea objeto de delitos relacionados con LA/FT/FPADM y mitigar los riesgos asociados.`
        },
        {
          title: "OBJETIVOS ESPECÍFICOS",
          content: `• Describir los elementos que componen el SAGRILAFT: diseño y aprobación, auditoría y cumplimiento, divulgación y capacitación y asignación de funciones a los responsables del Sistema.

• Definir las actividades de control y medidas necesarias para asegurar el cumplimiento de las políticas del SAGRILAFT.

• Establecer un lenguaje unificado al interior de La Compañía para la adecuada implementación del SAGRILAFT.

• Divulgar los lineamientos establecidos dentro del Sistema para lograr el entendimiento y cumplimiento del SAGRILAFT al interior de La Compañía.`
        }
      ]
    },
    {
      id: 3,
      title: "INFOGRAFÍA PROGRAMA SAGRILAFT",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "bg-green-500",
      slides: [
        {
          title: "SAGRILAFT - ETAPAS DEL RIESGO",
          content: `<div class="text-center">
            <div class="mb-8">
              <h2 class="text-3xl font-bold mb-6">SAGRILAFT</h2>
              <h3 class="text-xl text-blue-600 mb-8">ETAPAS DEL RIESGO</h3>
            </div>
            <div class="flex justify-center items-center space-x-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl font-bold mb-2">1</div>
                <p class="font-semibold">Identificación<br/>del riesgo</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl font-bold mb-2">2</div>
                <p class="font-semibold">Medición del<br/>riesgo</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl font-bold mb-2">3</div>
                <p class="font-semibold">Control del<br/>riesgo</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl font-bold mb-2">4</div>
                <p class="font-semibold">Monitoreo del<br/>riesgo</p>
              </div>
            </div>
          </div>`
        },
        {
          title: "PRINCIPALES FACTORES DE RIESGO",
          content: `<div class="space-y-4">
            <h3 class="text-xl font-bold text-blue-600 text-center mb-6">PRINCIPALES FACTORES DE RIESGO</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500"></div>
                <span><strong>Contrapartes –</strong> Persona natural o jurídica</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500"></div>
                <span><strong>Servicios-</strong> Unidades de negocio.</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500"></div>
                <span><strong>Actividades –</strong> Desarrolladas por niveles estratégicos de la compañía</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 bg-green-500"></div>
                <span><strong>Jurisdicciones –</strong> Donde la empresa desempeña operaciones (geográfico)</span>
              </div>
            </div>
          </div>`
        },
        {
          title: "RIESGOS LAFT/FPADM",
          content: `<div class="grid grid-cols-3 gap-6 text-center">
            <div class="bg-blue-100 p-4 rounded-lg">
              <div class="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div class="w-8 h-8 bg-gray-400 rounded"></div>
              </div>
              <h4 class="font-bold mb-2">lavado de activos</h4>
              <p class="text-sm">Consiste en dar apariencia legal a dineros o recursos de origen ilícito</p>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg">
              <div class="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div class="w-8 h-8 bg-yellow-600 rounded"></div>
              </div>
              <h4 class="font-bold mb-2">financiación del terrorismo</h4>
              <p class="text-sm">Financiar actos terroristas mediante recursos o dineros ilícitos</p>
            </div>
            <div class="bg-red-100 p-4 rounded-lg">
              <div class="w-16 h-16 bg-red-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div class="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h4 class="font-bold mb-2">Proliferación de armas de destrucción masiva.</h4>
              <p class="text-sm">El que directa o indirectamente producir, almacene, financie o hacer uso de armas nucleares, biológicas o químicos</p>
            </div>
          </div>`
        },
        {
          title: "¿CÓMO LAVAN DINERO?",
          content: `<div class="flex items-center justify-between">
            <div class="w-1/2 space-y-4">
              <h3 class="text-xl font-bold text-blue-600">¿CÓMO LAVAN DINERO?</h3>
              <div class="space-y-3">
                <p><strong>❖ Primera etapa:</strong> colocación del dinero o bienes en efectivo.</p>
                <p><strong>❖ Segunda etapa:</strong> Ingreso del dinero al mercado de manera "legal"</p>
                <p><strong>❖ Tercera etapa:</strong> Inversión o goce de capitales ilícitos</p>
              </div>
            </div>
            <div class="w-1/2 flex justify-center">
              <div class="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <div class="text-white text-center">
                  <h3 class="text-2xl font-bold">CICLO DE</h3>
                  <h3 class="text-2xl font-bold">LAVADO</h3>
                </div>
              </div>
            </div>
          </div>`
        },
        {
          title: "DELITOS FUENTE DEL LAVADO DE ACTIVOS",
          content: `<div class="grid grid-cols-3 gap-4 text-sm">
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-green-200 rounded flex-shrink-0"></div>
                <span>Narcotráfico</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-red-200 rounded flex-shrink-0"></div>
                <span>Extorsión</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-blue-200 rounded flex-shrink-0"></div>
                <span>Secuestro</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-yellow-200 rounded flex-shrink-0"></div>
                <span>Tráfico de migrantes</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-purple-200 rounded flex-shrink-0"></div>
                <span>Concierto para delinquir</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-gray-700 rounded flex-shrink-0"></div>
                <span>Contrabando</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-gray-200 rounded flex-shrink-0"></div>
                <span>Delitos contra la administración pública</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-yellow-600 rounded flex-shrink-0"></div>
                <span>Delitos contra el sistema financiero</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-red-600 rounded flex-shrink-0"></div>
                <span>Rebelión</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-orange-600 rounded flex-shrink-0"></div>
                <span>Trata de personas</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-red-500 rounded flex-shrink-0"></div>
                <span>Tráfico de Armas</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-green-600 rounded flex-shrink-0"></div>
                <span>Enriquecimiento ilícito</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-blue-600 rounded flex-shrink-0"></div>
                <span>Financiación del terrorismo</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-yellow-500 rounded flex-shrink-0"></div>
                <span>Tráfico de menores de edad</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-yellow-300 rounded flex-shrink-0"></div>
                <span>Falsificaciones</span>
              </div>
            </div>
          </div>`
        },
        {
          title: "¿QUIÉNES SON CONTRAPARTES?",
          content: `<div class="flex items-center justify-between">
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                <div class="bg-purple-200 px-4 py-2 rounded">Clientes</div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                <div class="bg-purple-200 px-4 py-2 rounded">Usuarios</div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                <div class="bg-purple-200 px-4 py-2 rounded">Accionistas</div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                <div class="bg-purple-200 px-4 py-2 rounded">Inversionistas</div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                <div class="bg-blue-200 px-4 py-2 rounded">Empleados</div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                <div class="bg-blue-200 px-4 py-2 rounded">Proveedores</div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-4 h-4 rounded-full border-2 border-gray-400"></div>
                <div class="bg-blue-300 px-4 py-2 rounded">Aliados estratégicos</div>
              </div>
            </div>
            <div class="ml-8 text-center bg-gray-100 p-6 rounded-lg">
              <p class="text-lg font-semibold">Personas naturales o jurídicas con las que se tengan vínculos comerciales, de negocios, contractuales o jurídicos</p>
            </div>
          </div>`
        },
        {
          title: "MANUAL SAGRILAFT",
          content: `<div class="flex items-center justify-between">
            <div class="w-1/2 space-y-4">
              <h3 class="text-xl font-bold text-blue-600">MANUAL SAGRILAFT</h3>
              <div class="space-y-3">
                <p>• Este documento contiene todas las políticas de <strong>OUTSOURCING</strong> para la prevención del riesgo de LA/FT/FPADM</p>
                <p>• Las políticas son aprobadas por la Asamblea de Accionistas de <strong>OUTSOURCING</strong>, por lo tanto, son de obligatorio cumplimiento</p>
                <p>• El SAGRILAFT deberá ser divulgado dentro de <strong>OUTSOURCING</strong> y a las demás partes interesadas y se capacitará, de forma periódica, a los Empleados.</p>
              </div>
            </div>
            <div class="w-1/2 flex justify-center">
              <div class="bg-red-500 w-48 h-64 rounded-lg flex items-center justify-center text-white relative">
                <div class="text-center">
                  <h3 class="text-2xl font-bold">MANUAL</h3>
                  <h3 class="text-2xl font-bold">SAGRILAFT</h3>
                </div>
                <div class="absolute bottom-4 right-4">
                  <div class="w-6 h-8 bg-black opacity-30 rounded"></div>
                </div>
              </div>
            </div>
          </div>`
        },
        {
          title: "RESPONSABILIDADES DEL OFICIAL DE CUMPLIMIENTO",
          content: `<div class="text-center">
            <h3 class="text-xl font-bold mb-8">Responsabilidades del Oficial de Cumplimiento</h3>
            <div class="relative">
              <div class="flex justify-center mb-8">
                <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span class="text-2xl">🏆</span>
                </div>
              </div>
              <div class="flex items-center justify-center space-x-8">
                <div class="text-center">
                  <div class="bg-orange-500 text-white px-4 py-2 rounded font-semibold mb-2">Gestión</div>
                  <p class="text-sm max-w-32">Generar Alianzas con áreas internas</p>
                </div>
                <div class="text-center">
                  <div class="bg-blue-800 text-white px-4 py-2 rounded font-semibold mb-2">Integral</div>
                  <p class="text-sm max-w-32">Promover el tema en capacitaciones y difusión de información</p>
                </div>
                <div class="text-center">
                  <div class="bg-orange-500 text-white px-4 py-2 rounded font-semibold mb-2">Del Riesgo</div>
                  <p class="text-sm max-w-32">Involucrar sus medidas de control y demás acciones o tareas de prevención en el negocio</p>
                </div>
                <div class="text-center">
                  <div class="bg-blue-800 text-white px-4 py-2 rounded font-semibold mb-2">Lavado</div>
                  <p class="text-sm max-w-32">Mantener ajustada la realidad de los procesos aprobados</p>
                </div>
                <div class="text-center">
                  <div class="bg-orange-500 text-white px-4 py-2 rounded font-semibold mb-2">De Activos</div>
                  <p class="text-sm max-w-32">Involucrar a los líderes de procesos en la evaluación del Riesgo</p>
                </div>
              </div>
            </div>
          </div>`
        }
      ]
    },
    {
      id: 4,
      title: "PRESENTACIÓN GENERAL PROGRAMA SAGRILAFT",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-purple-500",
      slides: Array.from({ length: 25 }, (_, i) => ({
        title: `Diapositiva ${i + 1} - Presentación General`,
        content: `<div class="text-center">
          <div class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div class="text-gray-500">
              <FileText className="w-16 h-16 mx-auto mb-4" />
              <p class="text-lg font-semibold">Diapositiva ${i + 1}</p>
              <p>Presentación General del Programa SAGRILAFT</p>
            </div>
          </div>
        </div>`
      }))
    },
    {
      id: 5,
      title: "REQUISITOS NORMATIVOS",
      icon: <Users className="w-5 h-5" />,
      color: "bg-yellow-500",
      slides: [
        {
          title: "REQUISITOS NORMATIVOS",
          subtitle: "Normas y Estándares Internacionales",
          content: `En materia de riesgo LA/FT/FPADM, Colombia, a través de diversas leyes y sentencias de la Corte Constitucional, ha ratificado las siguientes convenciones y convenios de las Naciones Unidas, con el fin de erradicar las actividades delictivas relacionadas con el lavado del dinero del Terrorismo.

• Convención de Viena de 1988: Convención de Naciones Unidas contra el tráfico de estupefacientes y sustancias psicotrópicas. (Aprobada por la L. 67/93 - Sent. C-176/94).

• Convenio de Naciones Unidas para la represión de la financiación del terrorismo de 1999. (Aprobado por la L. 808/2003 - Sent. C-037/2004).

• Convenio de Palermo de 2000: Convención de las Naciones Unidas contra la Delincuencia Organizada Transnacional. (Aprobada por la L. 800/2003 - Sent. C-962/2003).

• Convención de Mérida de 2003: Convención de Naciones Unidas contra la corrupción. (Aprobada por la L. 970/2005 - Sent. C-172/2006).`
        },
        {
          title: "REQUISITOS NORMATIVOS",
          subtitle: "Normas y Estándares Internacionales",
          content: `El Grupo de Acción Financiera de Latinoamérica (GAFILAT) es una organización intergubernamental regional que agrupa a 17 países de América del Sur, Centroamérica, América del Norte y el Caribe para prevenir y combatir el lavado de activos, el financiamiento del terrorismo y el financiamiento de la proliferación de armas de destrucción masiva (LA/FT/FPADM), a través del compromiso de mejoramiento continuo de las políticas nacionales contra estos delitos y la profundización en los distintos mecanismos de cooperación entre los países miembros.

También es una de las instancias directrices de la Oficina de las Naciones Unidas Contra la Droga y Delito (UNODC), la labor de la UNODC, consiste en educar a las personas en todo el mundo sobre los peligros del uso indebido de drogas y fortalecer las intervenciones internacionales contra la producción, el tráfico de drogas ilícitas y la delincuencia internacional en las drogas.`
        },
        {
          title: "REQUISITOS NORMATIVOS",
          subtitle: "Normas Nacionales",
          content: `Ley 1121 de 2006. La Compañía debe realizar un reporte a la UIAF cuando tenga conocimiento de la presencia o tránsito de una persona incluida en una de las listas internacionales vinculantes para Colombia de conformidad con el Derecho Internacional. En este sentido la Empresa deberá realizar consultas periódicas en las listas vinculantes internacionales de las personas naturales y jurídicas con las cuales mantenga algún vínculo.

Decreto 1068 de 2015. Por medio del cual se establece la estructura del sector hacienda y crédito público, incluidas las entidades adscritas, como la Unidad de Información y Análisis Financiero (UIAF).

El artículo 2.1.4.2 dispone que las entidades públicas y privadas pertenecientes a sectores diferentes al financiero, asegurador y bursátil, deben reportar Operaciones Sospechosas a la UIAF, de acuerdo con el literal a) del numeral 2º del artículo 102 y los artículos 103 y 104 del Estatuto Orgánico del Sistema Financiero, cuando dicha Unidad lo solicite, a menos que oportunidad de oficio.`
        },
        {
          title: "REQUISITOS NORMATIVOS",
          subtitle: "Normas Nacionales",
          content: `Circular Externa 100-000016 de 2020 de la Superintendencia de Sociedades de Colombia (Capítulo X de la Circular Básica Jurídica: Autocontrol y gestión del riesgo integral de lavado de activos, financiamiento del terrorismo y financiamiento de la proliferación de armas de destrucción masiva (LA/FT/FPADM), de acuerdo a la cual las características propias, teniendo en cuenta la naturaleza de sus operaciones, productos, servicios que presta desarrollar, así como sus contrapartes, y de los beneficiarios finales de éstas, al igual que los países o áreas geográficas de operación y canales y demás características particulares.

Circular Externa 100-00015 de 2021 de la Superintendencia de Sociedades, referente a las definiciones de "Beneficiarios Finales", "PEP" y "PEP Extranjeras" y asociados

Según lo dispuesto en el artículo 84 de la Ley 222 de 1995 y en el Decreto 1074 de 2015, corresponde a la Superintendencia de Sociedades ejercer la vigilancia de las Empresas.

Ley 7195 de 2022: Ley que otorga a la Superintendencia de Sociedades mayores facultades y sanciones, en el marco de la ley de transparencia y lucha contra la corrupción.`
        }
      ]
    },
    {
      id: 6,
      title: "REPOSITORIO DOCUMENTAL",
      icon: <Database className="w-5 h-5" />,
      color: "bg-indigo-500",
      slides: [
        {
          title: "Biblioteca de Documentos",
          content: `<div class="space-y-4">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-bold flex items-center">
                <span class="mr-2"></span>
                Biblioteca de Documentos
              </h3>
            </div>
            
            <div class="flex space-x-4 mb-6">
              <div class="flex-1">
                <input 
                  type="text" 
                  placeholder="Buscar por nombre o código..." 
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div class="flex-1">
                <select class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Todos los tipos</option>
                </select>
              </div>
              
            </div>
            
            <div class="grid gap-4">
              <div class="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-red-500 rounded flex items-center justify-center text-white font-bold text-lg">PR</div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Procedimiento de Gestión del Centro de Excelencia Digital</h4>
                    <p class="text-sm text-gray-600">Código: TD-PR-001 &nbsp;&nbsp;|&nbsp;&nbsp; Versión: 1.0 &nbsp;&nbsp;|&nbsp;&nbsp; Fecha: 2025-02-14 &nbsp;&nbsp;|&nbsp;&nbsp; Subproceso: Centro de excelencia</p>
                  </div>
                </div>
                <div class="flex space-x-3">
                  <button class="flex items-center space-x-1 text-blue-500 hover:text-blue-700 font-medium">
                    <span></span>
                    <span>Ver</span>
                  </button>
                  <button class="flex items-center space-x-1 text-green-500 hover:text-green-700 font-medium">
                    <span></span>
                    <span>Descargar</span>
                  </button>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-red-500 rounded flex items-center justify-center text-white font-bold text-lg">PO</div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Política de Transformación Digital y Gobernanza Tecnológica</h4>
                    <p class="text-sm text-gray-600">Código: TD-PO-001 &nbsp;&nbsp;|&nbsp;&nbsp; Versión: 1.0 &nbsp;&nbsp;|&nbsp;&nbsp; Fecha: 2025-02-22 &nbsp;&nbsp;|&nbsp;&nbsp; Subproceso: Planeación</p>
                  </div>
                </div>
                <div class="flex space-x-3">
                  <button class="flex items-center space-x-1 text-blue-500 hover:text-blue-700 font-medium">
                    <span></span>
                    <span>Ver</span>
                  </button>
                  <button class="flex items-center space-x-1 text-green-500 hover:text-green-700 font-medium">
                    <span></span>
                    <span>Descargar</span>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-red-500 rounded flex items-center justify-center text-white font-bold text-lg">FO</div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Formato de Reporte Estadístico de Madurez Digital</h4>
                    <p class="text-sm text-gray-600">Código: TD-FO-001 &nbsp;&nbsp;|&nbsp;&nbsp; Versión: 1.0 &nbsp;&nbsp;|&nbsp;&nbsp; Fecha: 2025-03-03 &nbsp;&nbsp;|&nbsp;&nbsp; Subproceso: Estadística</p>
                  </div>
                </div>
                <div class="flex space-x-3">
                  <button class="flex items-center space-x-1 text-blue-500 hover:text-blue-700 font-medium">
                    <span></span>
                    <span>Ver</span>
                  </button>
                  <button class="flex items-center space-x-1 text-green-500 hover:text-green-700 font-medium">
                    <span></span>
                    <span>Descargar</span>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-red-500 rounded flex items-center justify-center text-white font-bold text-lg">AN</div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Anexo: Indicadores Clave de Desempeño en Transformación Digital</h4>
                    <p class="text-sm text-gray-600">Código: TD-AN-001 &nbsp;&nbsp;|&nbsp;&nbsp; Versión: 1.0 &nbsp;&nbsp;|&nbsp;&nbsp; Fecha: 2025-03-08 &nbsp;&nbsp;|&nbsp;&nbsp; Subproceso: Estadística</p>
                  </div>
                </div>
                <div class="flex space-x-3">
                  <button class="flex items-center space-x-1 text-blue-500 hover:text-blue-700 font-medium">
                    <span></span>
                    <span>Ver</span>
                  </button>
                  <button class="flex items-center space-x-1 text-green-500 hover:text-green-700 font-medium">
                    <span></span>
                    <span>Descargar</span>
                  </button>
                </div>
              </div>

              <div class="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-red-500 rounded flex items-center justify-center text-white font-bold text-lg">PG</div>
                  <div>
                    <h4 class="font-semibold text-gray-800">Plan Estratégico de Transformación Digital</h4>
                    <p class="text-sm text-gray-600">Código: TD-PG-001 &nbsp;&nbsp;|&nbsp;&nbsp; Versión: 1.0 &nbsp;&nbsp;|&nbsp;&nbsp; Fecha: 2025-03-15 &nbsp;&nbsp;|&nbsp;&nbsp; Subproceso: Planeación</p>
                  </div>
                </div>
                <div class="flex space-x-3">
                  <button class="flex items-center space-x-1 text-blue-500 hover:text-blue-700 font-medium">
                    <span></span>
                    <span>Ver</span>
                  </button>
                  <button class="flex items-center space-x-1 text-green-500 hover:text-green-700 font-medium">
                    <span></span>
                    <span>Descargar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>`
        }
      ]
    },
    {
      id: 7,
      title: "INSPEKTOR SOFTWARE",
      icon: <Eye className="w-5 h-5" />,
      color: "bg-teal-500",
      slides: Array.from({ length: 37 }, (_, i) => ({
        title: `Diapositiva ${i + 1} - Inspektor Software`,
        content: `<div class="text-center">
          <div class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div class="text-gray-500">
              <Eye className="w-16 h-16 mx-auto mb-4" />
              <p class="text-lg font-semibold">Diapositiva ${i + 1}</p>
              <p>Software Inspektor para la Gestión de Listas</p>
            </div>
          </div>
        </div>`
      }))
    }
  ];

  const currentModuleData = modules[currentModule];
  const totalSlides = currentModuleData.slides.length;

  const nextModule = () => {
    setCurrentModule((prev) => (prev + 1) % modules.length);
    setCurrentSlide(0);
  };

  const prevModule = () => {
    setCurrentModule((prev) => (prev - 1 + modules.length) % modules.length);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToModule = (moduleIndex) => {
    setCurrentModule(moduleIndex);
    setCurrentSlide(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Module Navigation */}
        <div className="bg-white border-b">
          <h2 className="text-2xl font-bold text-left pt-6 pb-4">Programa SAGRILAFT</h2>
          <div className="flex">
            {modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => goToModule(index)}
                className={`flex-1 px-4 py-6 flex flex-col items-center justify-center space-y-2 border-b-3 transition-all hover:bg-gray-50 ${currentModule === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-transparent'
                  }`}
              >
                <div className={`p-3 rounded-lg ${currentModule === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                  }`}>
                  {module.icon}
                </div>
                <span className={`text-xs text-center font-medium leading-tight ${currentModule === index ? 'text-blue-700' : 'text-gray-600'
                  }`}>
                  {module.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-xl shadow-lg h-full flex flex-col">
            {/* Content Header */}
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">{currentModuleData.title}</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    Página {currentSlide + 1} de {totalSlides}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      disabled={totalSlides <= 1}
                      className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={totalSlides <= 1}
                      className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Content */}
            <div className="flex-1 p-8 overflow-auto">
              <div className="h-full">
                <h3 className="text-lg font-bold mb-6 text-gray-800">
                  {currentModuleData.slides[currentSlide].title}
                </h3>
                {currentModuleData.slides[currentSlide].subtitle && (
                  <h4 className="text-md font-semibold mb-4 text-red-600">
                    {currentModuleData.slides[currentSlide].subtitle}
                  </h4>
                )}
                <div
                  className="prose max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: currentModuleData.slides[currentSlide].content
                  }}
                />
              </div>
            </div>

            {/* Slide Indicators */}
            {totalSlides > 1 && (
              <div className="p-4 border-t">
                <div className="flex justify-center space-x-2">
                  {Array.from({ length: Math.min(totalSlides, 10) }).map((_, index) => {
                    const slideIndex = totalSlides > 10 ?
                      Math.floor((index / 9) * (totalSlides - 1)) : index;
                    return (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(slideIndex)}
                        className={`w-2 h-2 rounded-full transition-colors ${currentSlide === slideIndex ? 'bg-red-500' : 'bg-gray-300'
                          }`}
                      />
                    );
                  })}
                  {totalSlides > 10 && (
                    <span className="text-xs text-gray-500 ml-2">
                      ...{totalSlides} slides
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Module Navigation */}
            <div className="p-4 border-t bg-gray-50 flex justify-between items-center">
              <button
                onClick={prevModule}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">Módulo {currentModule + 1} de {modules.length}</p>
              </div>

              <button
                onClick={nextModule}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagrilaftModule;