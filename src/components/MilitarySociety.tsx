import { ImageWithFallback } from './figma/ImageWithFallback';

export function MilitarySociety() {
  return (
    <section id="military" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block border-2 border-amber-600 px-6 py-2 mb-6">
            <p className="text-amber-600 tracking-[0.3em] text-sm">CHAPTER V</p>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Military Officers and Society
          </h2>
          <p className="text-gray-500 italic">The British Military Class in Tangier</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="relative mb-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1615481444833-67a923e4e749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwc3RyZWV0JTIwc2NlbmV8ZW58MXx8fHwxNzY0NzY4NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Road to Cecil Hotel"
              className="w-full h-96 object-cover shadow-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-sm italic">Road to Cecil Hotel</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Situated within sight of the Rock of Gibraltar, the most important naval base of the British Empire in the Mediterranean, Tangier was a favoured resort of the garrison officers, colonial administrators and their wives. Even the most perfunctory examination of guest lists published in <span className="italic">Al-Moghreb Al-Aksa</span> will immediately confirm that the officers were traveling in organized parties.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            For example in the two-week period between the end of July and mid August 1901 Major Rankin, Captains Cave, Betty, Gamble, Whitloch, Zaras, and Lieutenants James, Fanchawe, and Mortimer were registered as guests of the Cecil. The attraction was, of course, that Tangier offered a myriad of sporting attractions to young officers that were unavailable on the claustrophobic Rock, whether from Pig-sticking in the diplomatic forest, hunting with the Tangier Tent Club, bathing, tennis, and even polo.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
            <p className="text-gray-700 italic text-lg">
              Tangier also offered the opportunity for bored young officers to escape from the moral strait-jacket of garrison life on a desolate rock invested with prim, proper, puritanical and priggish middleclass females intent on policing their morals.
            </p>
          </div>

          <h3 className="text-2xl text-gray-900 mt-12 mb-6">A Scandalous Affair</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            And, alas, Tangier ladies were sometimes not as virtuous as they might have been. One of the hotel's earliest guests, in 1901, was <span className="font-semibold">Mrs. DeVere MacLean</span>, the first wife of Kaid, afterwards Sir, Harry Aubrey DeVere MacLean, K.C.G.B.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Of an extremely swarthy complexion she had been born Catherine Coe, of mixed Gibraltarian and Irish ancestry. Rather unflatteringly nicknamed "the Negress" by her enemies, who were as doubtful of her racial as they were of her moral purity, she married MacLean in 1882.
          </p>

          <div className="bg-gray-900 text-white p-8 my-8">
            <p className="text-gray-300 leading-relaxed mb-4">
              In 1905 their daughter, discovering her mother in bed with her own fiancé, a young Gibraltarian subaltern, placed a chair against the door, blocking their exit, and sent for her father. Faced with such indisputable proof of Mrs. DeVere MacLean's blatant immorality he drove her from their home and immediately instituted divorce proceedings on the basis of what was then euphemistically called 'criminal conversation', which is to say adultery!
            </p>
            <p className="text-amber-400 italic">
              Mrs. DeVere MacLean accordingly had the very dubious 'honour' of becoming the first member of Tangier's British community to be divorced for immorality!
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Whether she had behaved with equal indiscretion with either of the young Officers who were her fellow guests that week at the Cecil, Captain Locke, R.A., Lieutenant R. Betts-Brown, R.A., is a matter of mere speculation, but, if so, doubtlessly she believed that she could rely on the discretion of the hotel management!
          </p>

          <h3 className="text-2xl text-gray-900 mt-12 mb-6">Senior Officers and High Society</h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            More senior Officers and their wives were equally delighted to escape the stiff, stultifying, parochial colonial society of Gibraltar in order to enjoy the raffish charms of the White City's notoriously eccentric expatriate society.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 border border-gray-200">
              <h4 className="text-amber-600 mb-4">Army Officers</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• General Sir Wilsone Blacke, K.C.B., and Lady Black</li>
                <li>• General Nicholson</li>
                <li>• Major Rankin</li>
                <li>• Captain Cave</li>
                <li>• Captain Betty</li>
                <li>• Captain Gamble</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h4 className="text-amber-600 mb-4">Naval Officers</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Vice-Admiral Sir Hugh Tooting and Lady Tooting</li>
                <li>• Admiral Sir Reginald Hall and Lady Hall</li>
                <li>• Rear-Admiral Caillard</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl text-gray-900 mt-12 mb-6">A British Club in Morocco</h3>

          <div className="relative mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1571275293295-7a6d0d4dadd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwaG90ZWwlMjBsb2JieXxlbnwxfHx8fDE3NjQ3Njg3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Billiards and Games Room"
              className="w-full h-96 object-cover shadow-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white text-sm italic">The Billiards and Games Room of the Hotel Cecil, 1900</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Gradually the Cecil acquired somewhat the character of a British club, albeit one decorated 'a la Raj' rather than 'a la St. James'! Indeed the hotel, as depicted in Edwardian period postcards, was furnished in the style of an exclusive Indian Hill Station Club.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Its drawing room, boasted numerous, comfortably upholstered, cushion covered sofas, rosewood Islamic octagonal occasional tables, richly inlaid with complicated ivory or bone geometrical patterns, hanging enameled brass lamps, and walls decorated with crossed sabers and riffles, none of which interior decorators' whimsies would not have looked at all out of place in the smarter clubs at Simla or Ootacamund, but then much of what we tend to consider 'Raj' or 'Moghol style' is essentially Arabic in derivation.
          </p>
        </div>
      </div>
    </section>
  );
}
