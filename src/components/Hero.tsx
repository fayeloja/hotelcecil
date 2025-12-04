import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763146741798-1d289241eaf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGhvdGVsJTIwTW9yb2Njb3xlbnwxfHx8fDE3NjQ3Njg3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Historic Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="inline-block border-2 border-amber-400 px-6 py-2 mb-8">
            <p className="text-amber-400 tracking-[0.3em] text-sm">A SOCIAL HISTORY</p>
          </div>
        </div>
        
        <h1 className="text-white mb-4 text-5xl md:text-7xl lg:text-8xl tracking-tight">
          NO BETTER ADDRESS!
        </h1>
        
        <div className="w-24 h-0.5 bg-amber-400 mx-auto my-8"></div>
        
        <p className="text-white/90 text-xl md:text-2xl mb-3">
          The Hotel Cecil, Tangier
        </p>
        
        <p className="text-white/70 text-lg mb-12">
          By Andrew Clandermond and Dr. Terence MacCarthy
        </p>

        <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 transition-colors duration-300 border border-amber-500">
          Discover the Story
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
