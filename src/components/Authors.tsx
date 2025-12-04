import { Users, Award, BookMarked } from 'lucide-react';

export function Authors() {
  return (
    <section className="py-24 px-4 bg-[#faf8f3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-amber-600 mb-4 tracking-widest text-sm">THE AUTHORS</div>
          <h2 className="mb-6 text-4xl md:text-5xl text-gray-900">
            About the Researchers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-10 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-20 h-20 bg-amber-100 text-amber-600 rounded-full mb-6 mx-auto">
              <Users size={36} />
            </div>
            <h3 className="text-center mb-4 text-2xl text-gray-900">Andrew Clandermond</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A historian and writer specializing in North African social history, Andrew has spent over 
              two decades researching the international community of Tangier during its cosmopolitan heyday. 
              His previous works have explored the cultural intersections of colonial and post-colonial Morocco.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based between London and Tangier, he has conducted extensive interviews with former residents 
              and their families, uncovering stories that had never been told in print.
            </p>
          </div>

          <div className="bg-white p-10 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center w-20 h-20 bg-amber-100 text-amber-600 rounded-full mb-6 mx-auto">
              <Award size={36} />
            </div>
            <h3 className="text-center mb-4 text-2xl text-gray-900">Dr. Terence MacCarthy</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Dr. MacCarthy is a professor of Modern History at the University of Edinburgh, with a particular 
              focus on Mediterranean cultural exchange. His academic work has been published in numerous 
              prestigious journals, and he is recognized as a leading expert on the International Zone period.
            </p>
            <p className="text-gray-600 leading-relaxed">
              He brings rigorous scholarly methodology to this project, having spent years in archives across 
              Europe and North Africa piecing together the documentary evidence of the Hotel Cecil's remarkable story.
            </p>
          </div>
        </div>

        {/* Collaboration */}
        <div className="bg-gray-900 text-white p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6 mx-auto">
              <BookMarked size={32} />
            </div>
            <h3 className="mb-6 text-3xl">A Decade of Collaboration</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              This book represents over ten years of collaborative research, combining Clandermond's narrative 
              storytelling with MacCarthy's scholarly precision. Together, they have created what reviewers 
              are calling "the definitive account of one of the most fascinating hotels in the world."
            </p>
            <p className="text-amber-400 italic">
              "No Better Address! is a triumph of historical research and engaging narrative—a book that 
              belongs on the shelf of anyone interested in Tangier, Morocco, or the golden age of international travel."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
