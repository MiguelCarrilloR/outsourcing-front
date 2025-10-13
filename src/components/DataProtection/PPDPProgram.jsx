import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, FileText, Users, BookOpen, Scale, Archive } from 'lucide-react';

const PPDPProgram = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    {
      id: 'politica',
      title: 'POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES',
      icon: Shield,
      slides: [
        {
          title: 'POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES',
          content: `En Outsourcing S.A.S. BIC reconocemos que la protección de datos personales es un derecho fundamental de todas las personas y un compromiso esencial para nuestra organización. Esta política establece los lineamientos para garantizar el adecuado tratamiento de la información personal que recopilamos, almacenamos y procesamos en el desarrollo de nuestras actividades.

COMPROMISO DE LA ALTA DIRECCIÓN

La Alta Dirección de Outsourcing S.A.S. BIC está comprometida con la protección de los datos personales de nuestros colaboradores, clientes, proveedores y demás partes interesadas, garantizando el cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normatividad aplicable en materia de protección de datos personales.

PRINCIPIOS RECTORES

Nuestra organización se rige por los siguientes principios en el tratamiento de datos personales:

☑ Principio de Legalidad: El tratamiento de datos personales se realiza conforme a las disposiciones legales vigentes.

☑ Principio de Finalidad: Los datos personales son recopilados con propósitos legítimos, específicos y previamente informados al titular.

☑ Principio de Libertad: El tratamiento solo se realiza con el consentimiento previo, expreso e informado del titular.

☑ Principio de Veracidad o Calidad: La información sujeta a tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.

☑ Principio de Transparencia: Se garantiza el derecho del titular a obtener información sobre el tratamiento de sus datos personales.

☑ Principio de Acceso y Circulación Restringida: Los datos personales solo son accesibles para quienes estén autorizados.

☑ Principio de Seguridad: Se implementan medidas técnicas, humanas y administrativas para proteger los datos personales.

☑ Principio de Confidencialidad: Todas las personas que intervienen en el tratamiento de datos personales están obligadas a garantizar la reserva de la información.`
        },
        {
          title: 'ALCANCE Y RESPONSABILIDADES',
          content: `ALCANCE DE LA POLÍTICA

Esta política aplica para:

• Todos los colaboradores de Outsourcing S.A.S. BIC (empleados directos, temporales, contratistas)
• Clientes y usuarios de nuestros servicios
• Proveedores y aliados estratégicos
• Candidatos a procesos de selección
• Visitantes y cualquier persona cuyos datos personales sean tratados por la organización

TIPOS DE DATOS TRATADOS

Outsourcing S.A.S. BIC puede recopilar y tratar los siguientes tipos de datos personales:

Datos de Identificación: Nombre completo, tipo y número de documento de identidad, fecha y lugar de nacimiento, fotografía.

Datos de Contacto: Dirección de residencia, teléfono fijo, teléfono celular, correo electrónico.

Datos Laborales: Cargo, área, empresa, trayectoria laboral, educación, formación académica.

Datos Financieros: Información bancaria, salario, deducciones (cuando sea necesario para la relación laboral o comercial).

Datos de Seguridad Social: EPS, fondo de pensiones, ARL, caja de compensación.

Datos Sensibles: Solo se tratarán con autorización expresa del titular y cuando sea estrictamente necesario. Incluyen datos de salud, biométricos, preferencias políticas o religiosas.

RESPONSABLE DEL TRATAMIENTO

Outsourcing S.A.S. BIC actúa como responsable del tratamiento de datos personales y ha designado un Oficial de Protección de Datos encargado de:

• Supervisar el cumplimiento de la política de protección de datos
• Gestionar las solicitudes de los titulares (consultas, reclamos, actualizaciones)
• Coordinar las auditorías de cumplimiento
• Capacitar al personal en protección de datos
• Mantener actualizado el registro de bases de datos`
        }
      ]
    },
    {
      id: 'marco-legal',
      title: 'MARCO LEGAL Y NORMATIVO',
      icon: Scale,
      slides: [
        {
          title: 'MARCO LEGAL Y NORMATIVO',
          content: `NORMATIVIDAD NACIONAL

Ley 1581 de 2012 - Ley de Protección de Datos Personales
Establece las disposiciones generales para la protección de datos personales en Colombia. Define los principios rectores, derechos de los titulares, obligaciones de responsables y encargados del tratamiento.

Principales aspectos:
• Regula el derecho fundamental de Habeas Data
• Establece principios para el tratamiento de datos personales
• Define derechos de los titulares y obligaciones de responsables
• Crea un régimen sancionatorio por incumplimiento

Decreto 1377 de 2013
Reglamenta parcialmente la Ley 1581 de 2012 y establece aspectos específicos sobre:
• Autorización del titular
• Políticas de tratamiento de información
• Transferencia de datos a terceros países
• Registro Nacional de Bases de Datos (RNBD)

Decreto 1074 de 2015 - Decreto Único Reglamentario del Sector Comercio
Incorpora las disposiciones sobre protección de datos personales en el marco regulatorio comercial.

Ley 1266 de 2008 - Habeas Data Financiero
Regula específicamente la administración de información financiera y crediticia. Aplica para operadores de bancos de datos financieros.

AUTORIDADES DE CONTROL

Superintendencia de Industria y Comercio (SIC)
Es la autoridad administrativa de protección de datos personales en Colombia. Sus funciones incluyen:
• Vigilar el cumplimiento de la normatividad
• Imponer sanciones por infracciones
• Resolver peticiones, quejas y reclamos
• Mantener el Registro Nacional de Bases de Datos

SANCIONES POR INCUMPLIMIENTO

La SIC puede imponer las siguientes sanciones:
• Multas de hasta 2.000 salarios mínimos mensuales legales vigentes
• Suspensión de actividades relacionadas con el tratamiento hasta por 6 meses
• Cierre temporal de operaciones relacionadas con el tratamiento
• Cierre inmediato y definitivo de la operación que involucre el tratamiento de datos`
        },
        {
          title: 'PRINCIPIOS CONSTITUCIONALES Y JURISPRUDENCIA',
          content: `FUNDAMENTO CONSTITUCIONAL

Artículo 15 de la Constitución Política de Colombia
"Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas."

Este artículo consagra el derecho fundamental de Habeas Data, que es la base del régimen de protección de datos personales en Colombia.

JURISPRUDENCIA RELEVANTE

Sentencia C-748 de 2011
Declaró exequible la Ley 1581 de 2012 antes de su promulgación, estableciendo que:
• La protección de datos es un derecho fundamental autónomo
• No se limita solo a datos sensibles sino a toda información personal
• Debe existir un equilibrio entre el derecho a la información y la protección de datos

Sentencia T-729 de 2002
Definió el alcance del derecho de Habeas Data y estableció que incluye:
• Derecho a conocer (acceso)
• Derecho a actualizar
• Derecho a rectificar
• Derecho a excluir (en ciertos casos)

ESTÁNDARES INTERNACIONALES

Convenio 108 del Consejo de Europa
Colombia ha adoptado estándares internacionales de protección de datos alineados con:
• Convenio para la Protección de las Personas con respecto al Tratamiento Automatizado de Datos de Carácter Personal
• Principios de la OCDE sobre privacidad
• Directrices de la ONU sobre protección de datos

TRANSFERENCIAS INTERNACIONALES

Para transferir datos personales a otros países, se debe verificar que:
• El país receptor tenga niveles adecuados de protección
• Exista autorización del titular
• Se cumplan las excepciones previstas en la ley
• Se implementen cláusulas contractuales de protección`
        }
      ]
    },
    {
      id: 'derechos-titulares',
      title: 'DERECHOS DE LOS TITULARES',
      icon: Users,
      slides: [
        {
          title: 'DERECHOS DE LOS TITULARES DE DATOS PERSONALES',
          content: `Los titulares de datos personales tienen los siguientes derechos fundamentales reconocidos por la Ley 1581 de 2012:

DERECHO DE ACCESO
El titular tiene derecho a conocer si sus datos personales están siendo objeto de tratamiento, así como obtener información sobre:
• Qué datos personales se están tratando
• La finalidad del tratamiento
• El período de conservación
• Los destinatarios de los datos

DERECHO DE ACTUALIZACIÓN
El titular puede solicitar la actualización de sus datos personales cuando estos sean inexactos, incompletos o no correspondan a la realidad.

Ejemplos:
• Cambio de dirección de residencia
• Actualización de número telefónico
• Modificación de información laboral

DERECHO DE RECTIFICACIÓN
Permite corregir los datos personales que sean incorrectos o inexactos. Este derecho se ejerce cuando:
• Los datos son erróneos
• Se han ingresado datos de forma incorrecta
• La información no refleja la realidad del titular

DERECHO DE SUPRESIÓN O CANCELACIÓN
El titular puede solicitar la eliminación de sus datos personales cuando:
• Se hayan tratado sin autorización
• Haya finalizado la relación con la organización
• Los datos ya no sean necesarios para la finalidad
• Se revoque la autorización

Excepciones: No procede cuando exista una obligación legal de conservar los datos (información contable, tributaria, laboral).

DERECHO DE OPOSICIÓN
El titular puede oponerse al tratamiento de sus datos personales cuando:
• No haya otorgado autorización
• El tratamiento no sea necesario
• Existan motivos legítimos para la oposición

DERECHO DE REVOCATORIA
El titular puede revocar en cualquier momento la autorización otorgada para el tratamiento de sus datos personales, salvo que exista un deber legal de conservarlos.`
        },
        {
          title: 'EJERCICIO DE LOS DERECHOS - PROCEDIMIENTOS',
          content: `CÓMO EJERCER LOS DERECHOS

Los titulares de datos personales pueden ejercer sus derechos a través de los siguientes canales:

📧 Correo Electrónico:
protecciondatos@outsourcing.com.co

📞 Línea Telefónica:
601 602 48 29

📍 Dirección Física:
[Dirección de oficina principal]

🌐 Sitio Web:
www.outsourcing.com.co/proteccion-datos

REQUISITOS DE LA SOLICITUD

Para ejercer cualquier derecho, el titular debe presentar una solicitud que contenga:

✓ Nombre completo y datos de contacto (dirección física o electrónica)
✓ Copia del documento de identidad o mecanismo de identificación válido
✓ Descripción clara de los datos sobre los cuales desea ejercer el derecho
✓ Especificación del derecho que desea ejercer (acceso, rectificación, etc.)
✓ Firma del titular o su representante legal

PLAZOS DE RESPUESTA

Consultas: Outsourcing S.A.S. BIC responderá en un término máximo de diez (10) días hábiles contados desde la fecha de recibo.

Reclamos: Se responderá en un término máximo de quince (15) días hábiles contados desde la fecha de recibo. Si el reclamo resulta incompleto, se requerirá al titular dentro de los cinco (5) días hábiles siguientes para que subsane las falencias.

Nota: Estos plazos pueden extenderse por cinco (5) días hábiles adicionales cuando así lo justifiquen las circunstancias del caso.

PROCEDIMIENTO DE ATENCIÓN

1. Recepción de la solicitud
2. Verificación de identidad del titular
3. Evaluación de la solicitud
4. Gestión interna del requerimiento
5. Respuesta al titular
6. Implementación de la acción solicitada (si procede)
7. Confirmación al titular`
        },
        {
          title: 'AUTORIZACIÓN Y CONSENTIMIENTO',
          content: `AUTORIZACIÓN DEL TITULAR

Outsourcing S.A.S. BIC obtiene la autorización de los titulares para el tratamiento de sus datos personales de las siguientes formas:

Autorización Expresa y por Escrito
• Formularios físicos o digitales firmados
• Contratos laborales o comerciales
• Formatos de vinculación
• Autorizaciones específicas para datos sensibles

Autorización por Medios Electrónicos
• Casillas de verificación (checkboxes) en formularios web
• Aceptación de términos y condiciones en línea
• Confirmación por correo electrónico

CONTENIDO DE LA AUTORIZACIÓN

Toda autorización debe informar al titular sobre:

✓ La identificación del responsable del tratamiento
✓ Los datos personales que serán recopilados
✓ La finalidad específica del tratamiento
✓ Los derechos que le asisten como titular
✓ El carácter facultativo de la respuesta a preguntas sobre datos sensibles
✓ Los mecanismos para ejercer sus derechos

EXCEPCIONES A LA AUTORIZACIÓN

No se requiere autorización del titular cuando:

• Los datos sean de naturaleza pública
• Se trate de datos necesarios para cumplir obligaciones legales
• Sea información requerida por una entidad pública en ejercicio de sus funciones
• Exista urgencia médica o sanitaria
• Se trate de información financiera de acuerdo con la Ley 1266 de 2008
• Se requiera para el reconocimiento o defensa de un derecho en un proceso judicial
• Los datos sean utilizados con fines históricos, estadísticos o científicos (con anonimización)

REVOCATORIA DE LA AUTORIZACIÓN

El titular puede revocar la autorización en cualquier momento mediante:
• Solicitud por escrito
• Correo electrónico
• Cualquier medio habilitado por Outsourcing

La revocatoria no procede cuando:
• Exista una obligación legal de conservar los datos
• El tratamiento sea necesario para cumplir un contrato vigente`
        }
      ]
    },
    {
      id: 'medidas-seguridad',
      title: 'MEDIDAS DE SEGURIDAD',
      icon: Shield,
      slides: [
        {
          title: 'MEDIDAS DE SEGURIDAD Y PROTECCIÓN',
          content: `MEDIDAS TÉCNICAS

Outsourcing S.A.S. BIC implementa las siguientes medidas técnicas para proteger los datos personales:

Seguridad de la Información
✓ Cifrado de datos sensibles en tránsito y en reposo
✓ Protocolos seguros de comunicación (HTTPS, SSL/TLS)
✓ Firewalls y sistemas de detección de intrusos
✓ Antivirus y antimalware actualizados
✓ Copias de seguridad (backups) periódicas y seguras

Control de Acceso
✓ Autenticación de usuarios mediante credenciales únicas
✓ Implementación de contraseñas robustas
✓ Acceso basado en roles (RBAC)
✓ Autenticación multifactor para sistemas críticos
✓ Registro y monitoreo de accesos a bases de datos

Protección de Infraestructura
✓ Servidores seguros con actualización constante
✓ Segmentación de redes
✓ Protección contra ataques DDoS
✓ Sistemas de respaldo redundantes
✓ Centros de datos con certificaciones de seguridad

MEDIDAS ORGANIZATIVAS

Políticas y Procedimientos
• Manual de Tratamiento de Datos Personales
• Procedimientos de respuesta a incidentes de seguridad
• Protocolo de notificación de brechas de seguridad
• Política de escritorio limpio y pantalla limpia
• Procedimiento de baja de colaboradores

Gestión de Proveedores
• Evaluación de seguridad de terceros que traten datos
• Cláusulas contractuales de protección de datos
• Auditorías periódicas a proveedores
• Acuerdos de confidencialidad

Gestión Documental
• Clasificación de documentos según nivel de confidencialidad
• Almacenamiento seguro de documentos físicos y digitales
• Destrucción segura de documentos (trituración, borrado seguro)
• Control de préstamo y devolución de expedientes`
        },
        {
          title: 'MEDIDAS HUMANAS Y CAPACITACIÓN',
          content: `CAPACITACIÓN Y CONCIENTIZACIÓN

Programas de Formación
Outsourcing S.A.S. BIC implementa programas de capacitación continua en:

• Normatividad sobre protección de datos personales
• Principios y derechos en el tratamiento de datos
• Manejo seguro de información personal
• Identificación y prevención de incidentes de seguridad
• Phishing y técnicas de ingeniería social
• Buenas prácticas en el manejo de datos

Público Objetivo
✓ Todo el personal al momento de su vinculación
✓ Áreas que manejan datos sensibles (RRHH, nómina, salud ocupacional)
✓ Personal de TI y administradores de sistemas
✓ Directivos y personal de toma de decisiones
✓ Proveedores y terceros con acceso a datos

Frecuencia
• Inducción obligatoria para nuevo personal
• Capacitación anual para todos los colaboradores
• Actualizaciones cuando haya cambios normativos
• Campañas de sensibilización trimestrales

COMPROMISOS DEL PERSONAL

Todos los colaboradores de Outsourcing S.A.S. BIC suscriben:

Acuerdo de Confidencialidad
• Compromiso de no divulgar información confidencial
• Obligación de mantener reserva sobre datos personales
• Vigencia durante la relación laboral y posterior a su terminación

Código de Conducta
• Uso apropiado de sistemas de información
• Prohibición de compartir credenciales de acceso
• Responsabilidad en el manejo de información
• Obligación de reportar incidentes de seguridad

CANAL DE DENUNCIAS

Los colaboradores pueden reportar incidentes o malas prácticas a través de:

📧 seguridadinformacion@outsourcing.com.co
📞 Línea ética: 601 602 48 29
🌐 Portal web de denuncias (anónimo)

Tipos de incidentes reportables:
• Accesos no autorizados a información personal
• Pérdida o robo de dispositivos con datos
• Sospecha de filtración de información
• Uso indebido de datos personales
• Solicitudes irregulares de información`
        },
        {
          title: 'GESTIÓN DE INCIDENTES Y BRECHAS DE SEGURIDAD',
          content: `PROTOCOLO DE RESPUESTA A INCIDENTES

Outsourcing S.A.S. BIC cuenta con un protocolo estructurado para gestionar incidentes de seguridad:

FASE 1: DETECCIÓN Y REPORTE
• Identificación del incidente de seguridad
• Notificación inmediata al Oficial de Protección de Datos
• Registro del incidente con fecha, hora y descripción
• Preservación de evidencias

FASE 2: EVALUACIÓN Y CONTENCIÓN
• Evaluación del alcance del incidente
• Determinación de los datos afectados
• Implementación de medidas de contención
• Aislamiento de sistemas comprometidos

FASE 3: ANÁLISIS Y REMEDIACIÓN
• Investigación de la causa raíz
• Identificación de titulares afectados
• Implementación de acciones correctivas
• Restauración de sistemas

FASE 4: NOTIFICACIÓN
• Notificación a la Superintendencia de Industria y Comercio (cuando aplique)
• Comunicación a los titulares afectados
• Reporte interno a la Alta Dirección
• Documentación del incidente

FASE 5: LECCIONES APRENDIDAS
• Análisis post-incidente
• Actualización de controles de seguridad
• Mejora de políticas y procedimientos
• Capacitación adicional si es necesario

CRITERIOS DE NOTIFICACIÓN

Se notificará a la SIC y a los titulares cuando:
• El incidente afecte datos sensibles
• Exista riesgo de uso fraudulento de la información
• Se comprometa la seguridad o privacidad de los titulares
• Lo requiera la normatividad vigente

Plazo de notificación: Máximo 15 días hábiles desde el conocimiento del incidente.

PLAN DE CONTINUIDAD

Outsourcing cuenta con un plan de continuidad que incluye:
• Respaldos de información crítica
• Sitios alternos de procesamiento
• Procedimientos de recuperación ante desastres
• Pruebas periódicas del plan`
        }
      ]
    },
    {
      id: 'procedimientos',
      title: 'PROCEDIMIENTOS Y GUÍAS',
      icon: BookOpen,
      slides: [
        {
          title: 'PROCEDIMIENTO DE TRATAMIENTO DE DATOS',
          content: `CICLO DE VIDA DE LOS DATOS PERSONALES

1. RECOLECCIÓN
Cómo recopilamos datos:
• Formularios físicos y digitales
• Contratos y documentos de vinculación
• Páginas web y aplicaciones móviles
• Entrevistas y comunicaciones directas
• Fuentes públicas legítimas

Requisitos:
✓ Autorización previa del titular (salvo excepciones legales)
✓ Información clara sobre finalidad del tratamiento
✓ Recolección limitada a lo necesario

2. ALMACENAMIENTO
Dónde almacenamos los datos:
• Servidores seguros en Colombia
• Plataformas en la nube con certificaciones de seguridad
• Archivos físicos en instalaciones controladas
• Sistemas de información corporativos

Medidas implementadas:
✓ Cifrado de datos sensibles
✓ Control de acceso por roles
✓ Respaldos periódicos
✓ Monitoreo continuo

3. USO Y TRATAMIENTO
Para qué usamos los datos:
• Gestión de relaciones laborales
• Prestación de servicios a clientes
• Cumplimiento de obligaciones legales
• Gestión de proveedores y contratistas
• Comunicaciones comerciales (con autorización)
• Análisis estadísticos (datos anonimizados)

Limitaciones:
✓ Solo para las finalidades autorizadas
✓ Con base en el principio de necesidad
✓ Respetando los derechos de los titulares

4. COMPARTIR (TRANSMISIÓN Y TRANSFERENCIA)
Con quién compartimos datos:

Transmisión Nacional:
• Entidades bancarias (pagos de nómina)
• EPS, fondos de pensiones, ARL
• Autoridades de control (cuando sea requerido)
• Proveedores de servicios tecnológicos

Transferencia Internacional:
• Solo a países con nivel adecuado de protección
• Con autorización del titular
• Mediante cláusulas contractuales de protección`
        },
        {
          title: 'CONSERVACIÓN Y ELIMINACIÓN DE DATOS',
          content: `5. CONSERVACIÓN
Tiempo de conservación de datos personales:

Datos Laborales:
• Durante la relación laboral: Datos activos
• Después de terminación: Mínimo 20 años (obligación legal - prestaciones sociales y pensiones)

Datos de Clientes:
• Durante la relación comercial: Datos activos
• Después de terminación: 5 años (obligaciones tributarias y contables)

Datos de Proveedores:
• Durante la relación comercial: Datos activos
• Después de terminación: 5 años (obligaciones tributarias)

Datos de Candidatos:
• 6 meses desde la finalización del proceso de selección
• Si no se contrata: Eliminación o anonimización

Datos de Visitantes:
• Según registro de ingreso: 1 año
• CCTV: 30 días (salvo incidente de seguridad)

Datos para Marketing:
• Mientras exista consentimiento del titular
• Eliminación inmediata si revoca autorización

6. ELIMINACIÓN
Procedimiento de eliminación segura:

Datos Digitales:
✓ Borrado seguro de archivos (no recuperables)
✓ Destrucción de respaldos que contengan los datos
✓ Eliminación de copias en todos los sistemas

Datos Físicos:
✓ Trituración de documentos
✓ Destrucción mediante empresas especializadas
✓ Certificado de destrucción

Excepciones:
No se eliminan datos cuando:
• Exista obligación legal de conservarlos
• Sean necesarios para defensa de derechos en proceso judicial
• Lo requiera una autoridad competente

7. AUDITORÍA Y CONTROL
Verificación del cumplimiento:
• Auditorías internas semestrales
• Auditorías externas anuales
• Revisión de logs de acceso
• Verificación de cumplimiento de plazos de conservación
• Validación de procedimientos de eliminación`
        },
        {
          title: 'GUÍA PARA ÁREAS ESPECÍFICAS',
          content: `RECURSOS HUMANOS

Tipos de datos manejados:
• Información personal y familiar
• Datos de salud (exámenes médicos, incapacidades)
• Información salarial y prestacional
• Referencias laborales
• Datos de contactos de emergencia

Consideraciones especiales:
✓ Obtener autorización para tratamiento de datos sensibles (salud)
✓ Limitar acceso solo a personal autorizado
✓ No divulgar información salarial
✓ Proteger expedientes en archivo seguro
✓ Solicitar consentimiento para referencias laborales

COMERCIAL Y VENTAS

Tipos de datos manejados:
• Datos de contacto de clientes potenciales
• Información comercial
• Preferencias de productos/servicios
• Historial de compras

Consideraciones especiales:
✓ Obtener consentimiento para comunicaciones comerciales
✓ Respetar solicitudes de no contacto (opt-out)
✓ No compartir bases de datos con terceros sin autorización
✓ Actualizar información periódicamente
✓ Eliminar datos de prospectos que no se concreten

TECNOLOGÍA Y SISTEMAS

Tipos de datos manejados:
• Credenciales de acceso
• Logs de actividad
• Correos electrónicos
• Archivos en servidores

Consideraciones especiales:
✓ Implementar controles de acceso estrictos
✓ Monitorear accesos anómalos
✓ Realizar respaldos cifrados
✓ Eliminar cuentas de usuarios inactivos
✓ Aplicar parches de seguridad

ATENCIÓN AL CLIENTE

Tipos de datos manejados:
• Datos de identificación para verificación
• Información sobre consultas y reclamos
• Grabaciones de llamadas

Consideraciones especiales:
✓ Verificar identidad antes de brindar información
✓ Informar sobre grabación de llamadas
✓ No solicitar datos innecesarios
✓ Documentar adecuadamente las solicitudes
✓ Respetar plazos de respuesta`
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
      id: 'PO',
      title: 'Política de Tratamiento de Datos Personales',
      code: 'PPDP-PO-001',
      version: '2.0',
      date: '2025-01-15',
      subprocess: 'Legal',
      bgColor: 'bg-blue-600'
    },
    {
      id: 'PR',
      title: 'Procedimiento de Gestión de Solicitudes ARCO',
      code: 'PPDP-PR-001',
      version: '1.0',
      date: '2025-01-20',
      subprocess: 'Protección de Datos',
      bgColor: 'bg-blue-600'
    },
    {
      id: 'FO',
      title: 'Formato de Autorización de Tratamiento de Datos',
      code: 'PPDP-FO-001',
      version: '1.0',
      date: '2025-02-01',
      subprocess: 'Recursos Humanos',
      bgColor: 'bg-blue-600'
    },
    {
      id: 'AN',
      title: 'Anexo: Listado de Bases de Datos Registradas',
      code: 'PPDP-AN-001',
      version: '1.0',
      date: '2025-02-10',
      subprocess: 'Protección de Datos',
      bgColor: 'bg-blue-600'
    },
    {
      id: 'GU',
      title: 'Guía de Seguridad de la Información',
      code: 'PPDP-GU-001',
      version: '1.0',
      date: '2025-02-15',
      subprocess: 'Tecnología',
      bgColor: 'bg-blue-600'
    },
    {
      id: 'MA',
      title: 'Manual de Respuesta a Incidentes de Seguridad',
      code: 'PPDP-MA-001',
      version: '1.0',
      date: '2025-03-01',
      subprocess: 'Seguridad',
      bgColor: 'bg-blue-600'
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

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Programa de Protección de Datos Personales</h1>
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
                    <option>Políticas</option>
                    <option>Procedimientos</option>
                    <option>Formatos</option>
                    <option>Guías</option>
                    <option>Manuales</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-w-48">
                    <option>Todos los subprocesos</option>
                    <option>Legal</option>
                    <option>Protección de Datos</option>
                    <option>Recursos Humanos</option>
                    <option>Tecnología</option>
                    <option>Seguridad</option>
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
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <h3 className="font-bold text-gray-800 text-lg">{tabs[activeTab].slides[currentSlide].title}</h3>
                  </div>
                </div>
                
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {tabs[activeTab].slides[currentSlide].content}
                </div>

                {/* Outsourcing Logo/Signature */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex justify-end">
                    <div className="text-blue-600 font-bold italic text-lg">Outsourcing</div>
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

export default PPDPProgram;