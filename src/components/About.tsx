import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen, MapPin, Clock } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="text-amber-600 mb-4 tracking-widest text-sm">ABOUT THE BOOK</div>
            <h2 className="mb-6 text-4xl md:text-5xl text-gray-900">
              A Window into Tangier's Golden Age
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The Hotel Cecil stood as more than just a building in Tangier—it was a crossroads of cultures, 
              a haven for artists and writers, and a witness to some of the most fascinating moments in 
              20th-century history.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              This meticulously researched social history brings to life the stories of the remarkable 
              individuals who passed through its doors, from literary giants to international spies, 
              from expatriate artists to local legends who made the Cecil their home.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through rare photographs and firsthand accounts, Andrew Clandermond and Dr. Terence MacCarthy 
              resurrect the glamour, intrigue, and bohemian spirit of an era when Tangier was the world's 
              most cosmopolitan city.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100/50 -rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1643970118347-e11ad4d48a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rJTIwbGlicmFyeXxlbnwxfHx8fDE3NjQ3Njg3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Historical archives"
              className="relative w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 border border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
              <BookOpen size={28} />
            </div>
            <h3 className="mb-3 text-xl text-gray-900">Extensively Researched</h3>
            <p className="text-gray-600">
              Years of archival work and interviews bring unprecedented detail to this forgotten chapter of history.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 border border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
              <MapPin size={28} />
            </div>
            <h3 className="mb-3 text-xl text-gray-900">Tangier's Heart</h3>
            <p className="text-gray-600">
              Discover how the Hotel Cecil became the epicenter of international society in Morocco.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 border border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
              <Clock size={28} />
            </div>
            <h3 className="mb-3 text-xl text-gray-900">Historical Photographs</h3>
            <p className="text-gray-600">
              Rare images from private collections showcase the hotel and its colorful inhabitants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
