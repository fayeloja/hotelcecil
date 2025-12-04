import { ImageWithFallback } from './figma/ImageWithFallback';

export function Introduction() {
  return (
    <section id="introduction" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-amber-600 px-6 py-2 mb-6">
            <p className="text-amber-600 tracking-[0.3em] text-sm">CHAPTER I</p>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            The Hotel Cecil
          </h2>
          <p className="text-gray-500 italic">Boulevard d'Espagne, Tangier</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="relative mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763146741798-1d289241eaf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGhvdGVsJTIwTW9yb2Njb3xlbnwxfHx8fDE3NjQ3Njg3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Historic Hotel Cecil"
              className="w-full h-[500px] object-cover shadow-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-sm italic">The Hotel Cecil in its heyday, early 20th century</p>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-amber-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            On the Boulevard d'Espagne (recently renamed Boulevard Mohamed VI), Tangier, a crumbling somewhat eclectic façade of hybrid classical and Moorish architectural styles is all that remains to be seen of the Hotel Cecil, once one of the truly great Hotels of North Africa. For several decades it was patronized by members of European Royal Families, aristocrats, diplomats, high ranking military and naval offices, colonial bishops, artists and writers.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <p className="text-gray-700 italic text-lg">
              Its long lost guest register was a veritable Almanach de Gotha of the Royal and noble families of the Belle Epoch and a Who's Who of the rich and famous.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Cecil was, to Tangier, what the Hotel Danelli is to Venice, Shepherd's Hotel to Cairo, or the Pera Palace to Constantinople, a byword for elegance, sophistication and discretion! Quite simply there was <span className="italic">no better address</span> for visitors to the White City to stay at.
          </p>

          <h3 className="text-2xl text-gray-900 mt-12 mb-6">The Inauguration</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            Although the Continental Hotel, built in the 1865, claims to have been Tangier's first the Cecil might, perhaps, with some justification, claim an at least equal precedence, for the newspaper report of its inauguration, printed in <span className="italic">Al-Moghreb Al-Aksa</span> on February 25th 1899, makes it clear that it had merely replaced an earlier building:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-gray-600">
            "The inauguration of the Hotel Cecil, situated on the beach, took place on Saturday evening. The building which was formerly occupied by Senor Recio's Universal Hotel has been thoroughly reconstructed and the newly fitted hotel is under the able management of Mr. John Sacone."
          </blockquote>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697291302946-60103b3dd3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5naWVyJTIwYXJjaGl0ZWN0dXJlJTIwdmludGFnZXxlbnwxfHx8fDE3NjQ3Njg3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Terrace and kiosk"
                className="w-full h-64 object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-2 italic">Terrace and kiosk of the Hotel Cecil, 1900</p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763198085774-56ce4573c791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaG90ZWwlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjQ3Njg3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hotel Cecil exterior"
                className="w-full h-64 object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-2 italic">The Hotel Cecil, 1900</p>
            </div>
          </div>

          <h3 className="text-2xl text-gray-900 mt-12 mb-6">Facilities and Amenities</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            From the moment it opened its doors the Cecil was considered the best hotel in the city. In advertisements it was described as:
          </p>

          <div className="bg-gray-50 p-8 my-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              "A first class modern hotel, built expressly for the purpose, situated in its own grounds on the grand beach, five minutes walk from the pier, in the centre of the new town, and has splendid views of the Straits and surrounding countryside. Commodious and well ventilated rooms with the latest sanitary arrangements. Suites of rooms with private bath, toilet and w.c. Spacious Dining, Drawing, Reading and Billiard Rooms. Electric light throughout. Bathrooms on every floor. Large terraces, kiosk, lawn tennis court. Motor-bus meets all steamers."
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Given such facilities the Cecil was a success <span className="italic">au commencement!</span> Tangier, which was becoming a fashionable winter resort almost rivaling Monte Carlo, was increasingly attractive to fashionable and rich travelers who sought winter-sun in a more exotic setting than the Cote d'Azur. Once an hotel had established a reputation amongst that class for luxury, comfort and a certain discretion its fortune was assured.
          </p>
        </div>
      </div>
    </section>
  );
}
