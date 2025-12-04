import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1697291302946-60103b3dd3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5naWVyJTIwYXJjaGl0ZWN0dXJlJTIwdmludGFnZXxlbnwxfHx8fDE3NjQ3Njg3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "The Architecture of Old Tangier",
    year: "circa 1950s",
    description: "The distinctive blend of Moorish and colonial architecture that characterized the Cecil's neighborhood."
  },
  {
    url: "https://images.unsplash.com/photo-1571275293295-7a6d0d4dadd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaG90ZWwlMjBsb2JieXxlbnwxfHx8fDE3NjQ3Njg3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "The Grand Lobby",
    year: "circa 1960s",
    description: "Elegant interior spaces that welcomed European royalty and distinguished travelers."
  },
  {
    url: "https://images.unsplash.com/photo-1615481444833-67a923e4e749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwc3RyZWV0JTIwc2NlbmV8ZW58MXx8fHwxNzY0NzY4NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "The Streets Surrounding the Cecil",
    year: "circa 1940s",
    description: "The vibrant street life of Tangier's international zone during the hotel's heyday."
  },
  {
    url: "https://images.unsplash.com/photo-1763198085774-56ce4573c791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaG90ZWwlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjQ3Njg3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Hotel Exterior View",
    year: "circa 1955",
    description: "The Cecil's elegant façade on the Boulevard d'Espagne, facing the Mediterranean."
  },
  {
    url: "https://images.unsplash.com/photo-1605543391576-d1a5e9d94fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyME1vcm9jY28lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ4NDAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Historic Moroccan Architecture",
    year: "early 1900s",
    description: "The architectural influences that shaped the hotel's distinctive style."
  },
  {
    url: "https://images.unsplash.com/photo-1718073869252-3b78770dc972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYXJjaGl0ZWN0dXJlJTIwZGV0YWlsfGVufDF8fHx8MTc2NDg0MDE5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Architectural Details",
    year: "circa 1920s",
    description: "Intricate craftsmanship and decorative elements typical of the period."
  },
  {
    url: "https://images.unsplash.com/photo-1759774312867-c230ea3c1ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzY0ODQwMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Luxurious Interior Furnishings",
    year: "circa 1930s",
    description: "The opulent furnishings that attracted the European aristocracy."
  },
  {
    url: "https://images.unsplash.com/photo-1685382828348-80a75a98145c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBNZWRpdGVycmFuZWFuJTIwaG90ZWx8ZW58MXx8fHwxNzY0ODQwMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Mediterranean Grandeur",
    year: "Belle Époque",
    description: "The refined elegance that made the Cecil 'no better address' in Tangier."
  },
  {
    url: "https://images.unsplash.com/photo-1763146741798-1d289241eaf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGhvdGVsJTIwTW9yb2Njb3xlbnwxfHx8fDE3NjQ3Njg3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "The Hotel in Its Prime",
    year: "circa 1925",
    description: "A view of the hotel during its golden age as Tangier's premier establishment."
  }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + photos.length) % photos.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage !== null) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedImage(null);
    }
  };

  useState(() => {
    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown as any);
      return () => window.removeEventListener('keydown', handleKeyDown as any);
    }
  });

  return (
    <section id="gallery" className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-amber-400 px-6 py-2 mb-6">
            <p className="text-amber-400 tracking-[0.3em] text-sm">PHOTO GALLERY</p>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl text-white">
            Historical Photographs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A visual journey through the Hotel Cecil's illustrious past, capturing the essence of Tangier's 
            golden age and the architectural splendor that made it truly "no better address."
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden cursor-pointer bg-black aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-75"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-amber-400 text-sm">{photo.year}</span>
                    <ZoomIn size={20} className="text-amber-400" />
                  </div>
                  <p className="text-lg mb-1">{photo.caption}</p>
                  <p className="text-sm text-gray-300 line-clamp-2">{photo.description}</p>
                </div>
              </div>

              {/* Year Badge */}
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-sm backdrop-blur-sm border border-amber-400/30">
                {photo.year}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-amber-600/10 border border-amber-600/30 px-8 py-4">
            <p className="text-gray-300 italic text-lg">
              The book contains over 100 rare photographs from private archives and collections
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/50 p-3 rounded-full backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors bg-black/50 p-3 rounded-full backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Container */}
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={photos[selectedImage].url}
              alt={photos[selectedImage].caption}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Image Info */}
            <div className="bg-gray-900/90 backdrop-blur-sm mt-4 p-6 border border-amber-400/30">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl text-white">{photos[selectedImage].caption}</h3>
                <span className="text-amber-400 text-sm whitespace-nowrap">{photos[selectedImage].year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{photos[selectedImage].description}</p>
              <div className="mt-4 text-center text-gray-500 text-sm">
                Image {selectedImage + 1} of {photos.length} • Use arrow keys to navigate • Press ESC to close
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
