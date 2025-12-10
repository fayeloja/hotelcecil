import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ArtistsWriters() {
  return (
    <section id="artists" className="py-24 px-4 bg-[#faf8f3]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-amber-600 px-6 py-2 mb-6">
            <p className="text-amber-600 tracking-[0.3em] text-sm">
              CHAPTER IV
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Artists and Writers
          </h2>
          <p className="text-gray-500 italic">
            The Creative Class at the Cecil
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            The Cecil also attracted painters and writers of some repute. Of the
            former the most notable was the great Irish portrait painter,{" "}
            <span className="font-semibold">Sir John Lavery</span> (1856-1941),
            R.A., R.H.A., R.S.A., who was a guest, twice, in 1906, immediately
            preceding and following his famous painting trip to Fez.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643970118347-e11ad4d48a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBib29rJTIwbGlicmFyeXxlbnwxfHx8fDE3NjQ3Njg3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sir John Lavery"
                className="w-full h-80 object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-3 italic">
                Sir John Lavery, Kt., R.A. R.H.A., R.S.A.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl text-gray-900 mb-4">
                Distinguished Painters
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Another British artist of some standing who patronized the hotel
                was{" "}
                <span className="font-semibold">
                  George Owen Wynne Apperley
                </span>{" "}
                (1884-1960), R.I., as did the great Spanish Orientalist painter,{" "}
                <span className="font-semibold">Mariano Bertuchi</span>{" "}
                (1884-1955), who founded L'Ecole des Beaux-Arts in Tetouan. Both
                were guests in 1901.
              </p>
            </div>
          </div>

          <h3 className="text-2xl text-gray-900 mt-12 mb-6">Literary Guests</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            A year earlier the noted British writer and Moroccan historian and
            fluent Arab speaking{" "}
            <span className="font-semibold">Mr. Budgett Meakin</span> was one of
            the first clients of the Cecil as indeed was an even more bizarre
            character,{" "}
            <span className="font-semibold">
              Mr. Walter Burton Harris F.S.A.
            </span>
          </p>

          <div className="bg-white p-8 my-12 border border-gray-200 shadow-lg">
            <h3 className="text-2xl text-gray-900 mb-6">
              Walter Burton Harris: A Scandalous Figure
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Born in London in 1866, the second son of Frederick Waler Harris,
              D.L., J.P., a wealthy Quaker ship owner, and educated at Harrow he
              was a friend of Oscar Wilde and the Godfather of Cyril Wilde, the
              playwright's eldest son. Walter Harris settled in Tangier in 1886,
              anxious to escape from the Victorian moralizing of London Society.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              His attraction to Tangier must, at least in part, have been due to
              the indulgent sexual mores of the Moors. His own unconventional
              sexual practices would certainly have attracted less criticism in
              the moral morass of the White city's expatriate colony than they
              would in Mayfair or Belgravia. Even so, several contemporary
              sources state that he once so mistreated a Negro boy servant that
              the unfortunate child died of his injuries.
            </p>

            <div className="bg-amber-50 p-6 my-6 border-l-4 border-amber-600">
              <p className="text-gray-700 italic">
                In 1898, Harris married Lady Mary Saville, daughter of the 4th
                Earl of Mexborough. Unsurprisingly it was neither a happy nor a
                fruitful union and the marriage was dissolved in 1906 on the
                grounds of non-consummation. The embarrassing detail that Harris
                had taken refuge on top of a wardrobe on their wedding night in
                order to avoid his wife's physical advances was widely reported
                by several London newspapers including THE TIMES which employed
                him as a journalist!
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Reputedly a British spy, Harris was a friend of King Edward VII,
              and the author of numerous articles on Morocco, many of which were
              published by the Royal Geographical Society, and several travel
              logs including:
            </p>

            <ul className="list-none space-y-2 ml-6 mb-4">
              <li className="text-gray-700 before:content-['📖'] before:mr-3">
                THE LAND OF AN AFRICAN SULTAN, TRAVELS IN MOROCCO (1888)
              </li>
              <li className="text-gray-700 before:content-['📖'] before:mr-3">
                MOROCCO THAT WAS (1921)
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Noted for his refined taste in Moroccan architecture he built the
              'Villa Harris' at Malabatta from which he was abducted in 1903 by
              the notorious Moroccan brigand Molay Ahmed El Raisuli. Held
              captive for three weeks, on his release he abandoned his isolated
              Villa in favour of a suite of rooms in the Hotel Cecil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
