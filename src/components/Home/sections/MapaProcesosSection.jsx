import React from 'react';
import BaseSection from '../BaseSection';
import mapa from "../../../assets/mapa.png";

const MapaProcesosSection = ({ section }) => {
  const images = [
    { 
      id: 1, 
      title: "Mapa Completo", 
      placeholder: "Mapa de Procesos Outsourcing S.A.S BIC",
      url: mapa
    }
  ];

  return <BaseSection section={section} images={images} />;
};

export default MapaProcesosSection;