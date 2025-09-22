import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BaseSection = ({ section, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState('auto');
  const contentRef = useRef(null);

  useEffect(() => {
    const currentImage = images[currentImageIndex];
    if (currentImage?.interactive && currentImage?.component) {
      const customHeight = currentImage.height || 'auto';
      setContainerHeight(customHeight);
    } else {
      setContainerHeight('fixed');
    }
  }, [currentImageIndex, images]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const getContainerClasses = () => {
    const currentImage = images[currentImageIndex];
    if (currentImage?.interactive && currentImage?.component) {
      const baseClasses = "relative flex items-center justify-center";
      const heightClass = currentImage.fullHeight ? 'min-h-screen' :
        currentImage.height === 'auto' ? 'min-h-96' :
        currentImage.height || 'h-96 md:h-[500px]';
      return `${baseClasses} ${heightClass}`;
    } else {
      return "relative h-96 md:h-[500px] flex items-center justify-center";
    }
  };

  const renderImageContent = (image) => {
    if (image.interactive && image.component) {
      const InteractiveComponent = image.component;
      return (
        <div className={`w-full ${image.fullHeight ? 'h-full' : ''} ${image.containerClasses || ''}`}>
          <InteractiveComponent />
        </div>
      );
    }

    if (image.url && image.url.trim() !== '') {
      return (
        <div className="w-full h-full relative">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-contain rounded-lg"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full bg-gray-100 items-center justify-center border-2 border-gray-200 rounded-lg">
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <section.icon className="w-10 h-10 text-gray-500" />
              </div>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {image.title}
                </h3>
              </a>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Error al cargar la imagen
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center border-2 border-gray-200 rounded-lg">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <section.icon className="w-10 h-10 text-gray-500" />
            </div>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {image.title}
              </h3>
            </a>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              {image.placeholder}
            </p>
            <div className="mt-4 text-xs text-gray-400">
              Imagen {currentImageIndex + 1} de {images.length}
            </div>
          </div>
        </div>
      );
    }
  };

  const renderThumbnail = (image) => {
    if (image.interactive && image.component) {
      return (
        <div className="w-full h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-md flex items-center justify-center">
          <div className="flex flex-col items-center">
            <section.icon className="w-6 h-6 text-blue-600 mb-1" />
            <div className="text-xs text-blue-600 font-semibold">
              {image.type || 'Interactivo'}
            </div>
          </div>
        </div>
      );
    }

    if (image.url && image.url.trim() !== '') {
      return (
        <div className="w-full h-20 bg-gray-100 rounded-md overflow-hidden">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full bg-gray-100 items-center justify-center">
            <section.icon className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-full h-20 bg-gray-100 rounded-md flex items-center justify-center">
          <section.icon className="w-6 h-6 text-gray-400" />
        </div>
      );
    }
  };

  return (
    <>
      {/* Section Header */}
      <div className={`bg-gradient-to-r ${section.color} p-`}>
        <div className="flex items-center space-x-4 mb-4">
          <section.icon className="w-10 h-10 text-white" />
          <div>
            <h2 className="text-3xl font-bold text-white">
              <a href={section.url} target="_blank" rel="noopener noreferrer">
                {section.title}
              </a>
            </h2>
            <p className="text-white/90 text-lg">{section.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Image Viewer */}
      <div className="bg-red-50 p-8">
        <div className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
          images[currentImageIndex]?.interactive ? 'overflow-visible' : ''
        }`}>
          {/* Current Image Display */}
          <div ref={contentRef} className={getContainerClasses()}>
            {renderImageContent(images[currentImageIndex])}

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group z-10 ${
                    images[currentImageIndex]?.interactive ? 'md:left-8' : ''
                  }`}
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group z-10 ${
                    images[currentImageIndex]?.interactive ? 'md:right-8' : ''
                  }`}
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="bg-gray-50 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-blue-600 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {currentImageIndex + 1} de {images.length}
                </div>
                <div className="flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToImage(index)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                  index === currentImageIndex
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {renderThumbnail(image)}
                <p className="text-xs font-medium text-gray-700 text-center mt-2">
                  {image.title}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BaseSection;
