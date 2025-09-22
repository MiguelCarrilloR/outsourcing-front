
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle, Dot } from 'lucide-react';
import SlideProposito from './slides/SlideProposito';
import SlidePiramide from './slides/SlidePiramide';
import SlideMetodologia from './slides/SlideMetodologia';
import SlideProcesos from './slides/SlideProcesos';
import SlideTipologia from './slides/SlideTipologia';
import SlideEstructura from './slides/SlideEstructura';

const ProcesosGeneralSection = ({ section }) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const ImageSlide = ({ imageData }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          {imageData.title}
        </h2>
        <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
          <img
            src={imageData.url}
            alt={imageData.placeholder}
            className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div
            className="hidden bg-gray-200 rounded-lg p-8 text-gray-600"
            style={{ minHeight: '400px', display: 'none' }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <p className="text-lg">{imageData.placeholder}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

 
  const getSlideData = (slideFunction) => {
    const result = slideFunction();
    

    if (result && typeof result === 'object' && result.url && result.title) {
      return {
        type: 'image',
        data: result
      };
    }
    

    return {
      type: 'jsx',
      data: result
    };
  };


  const slides = [
    {
      id: 1,
      title: "Propósito y como lo hacemos",
      getComponent: () => {

        return <SlideProposito />;
      }
    },
    {
      id: 2,
      title: "Pirámide Documental",
      getComponent: () => {
        const slideData = getSlideData(SlidePiramide);
        return slideData.type === 'jsx' 
          ? slideData.data 
          : <ImageSlide imageData={slideData.data} />;
      }
    },
    {
      id: 3,
      title: "Metodología PHVA",
      getComponent: () => {
        const slideData = getSlideData(SlideMetodologia);
        return slideData.type === 'jsx' 
          ? slideData.data 
          : <ImageSlide imageData={slideData.data} />;
      }
    },
    {
      id: 4,
      title: "Procesos y siglas",
      getComponent: () => {
        const slideData = getSlideData(SlideProcesos);
        return slideData.type === 'jsx' 
          ? slideData.data 
          : <ImageSlide imageData={slideData.data} />;
      }
    },
    {
      id: 5,
      title: "Tipología documental",
      getComponent: () => {
        const slideData = getSlideData(SlideTipologia);
        return slideData.type === 'jsx' 
          ? slideData.data 
          : <ImageSlide imageData={slideData.data} />;
      }
    },
    {
      id: 6,
      title: "Estructura documental",
      getComponent: () => {
        const slideData = getSlideData(SlideEstructura);
        return slideData.type === 'jsx' 
          ? slideData.data 
          : <ImageSlide imageData={slideData.data} />;
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header with section title and navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Section Title */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {section?.title || "Procesos Generales"}
              </h1>
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <span>{currentSlide + 1}</span>
                <span>/</span>
                <span>{slides.length}</span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="hidden md:flex items-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-200 ${
                      index === currentSlide
                        ? 'text-red-500 transform scale-125'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {index === currentSlide ? (
                      <Circle className="w-3 h-3 fill-current" />
                    ) : (
                      <Dot className="w-3 h-3" />
                    )}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === slides.length - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Title */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-700">
              {slides[currentSlide].title}
            </h2>
            <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 ease-out"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0"
            >
              {slide.getComponent()}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-red-500 w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-200 disabled:opacity-50"
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div
        className="fixed inset-0 pointer-events-none"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') prevSlide();
          if (e.key === 'ArrowRight') nextSlide();
          if (e.key >= '1' && e.key <= '6') {
            goToSlide(parseInt(e.key) - 1);
          }
        }}
      />
    </div>
  );
};

export default ProcesosGeneralSection;