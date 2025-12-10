import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const photos = [
  {
    url: "/imgs/terrace_and_kiosk_1900.jpg",
    caption: "The Hotel Cecil, 1900",
    year: "circa 1900s",
    description:
      "The distinctive blend of Moorish and colonial architecture that characterized the Cecil's neighborhood.",
  },
  {
    url: "/imgs/the_room_of_the_hotel_1900.jpg",
    caption: "The Drawing room of the Hotel Cecil",
    year: "circa 1900s",
    description:
      "Elegant interior spaces that welcomed European royalty and distinguished travelers.",
  },
  {
    url: "/imgs/hotel_cecil_envelope_12_April_1920.jpg",
    caption: "Postal Envelope from 1920",
    year: "circa 1920s",
    description:
      "The vibrant street life of Tangier's international zone during the hotel's heyday.",
  },
  {
    url: "/imgs/hotel_cecil_from_1904.jpg",
    caption: "Postcard of Hotel Cecil, 1904",
    year: "circa 1904",
    description:
      "The Cecil's elegant façade on the Boulevard d'Espagne, facing the Mediterranean.",
  },
  {
    url: "/imgs/hotel_cecil_from_from_5_April_1907.jpg",
    caption: "Historic Moroccan Postal Card",
    year: "circa 1907",
    description:
      "The architectural influences that shaped the hotel's distinctive style.",
  },
  {
    url: "/imgs/hotel_cecil_post_card_from_1907.jpg",
    caption: "Post Card Depicting Hotel Cecil, 1907",
    year: "circa 1907s",
    description:
      "Intricate craftsmanship and decorative elements typical of the period.",
  },
  {
    url: "/imgs/hotel_cecil_post_card_from_1909.jpg",
    caption: "Luxurious Interior Furnishings",
    year: "circa 1909s",
    description:
      "The opulent furnishings that attracted the European aristocracy.",
  },
  {
    url: "/imgs/mr_rb_Cunningham_graham.jpg",
    caption: "Mr. R.B. Cunningham Graham",
    year: "circa 1900s",
    description:
      "Portrait of R.B. Cunningham Graham by Sir John Lavery, a notable figure associated with the hotel.",
  },
  {
    url: "/imgs/post_card_tangier_morocco.jpg",
    caption: "The Hotel in Its Prime",
    year: "circa 1900s",
    description:
      "A bustling scene capturing the hotel's role as a social hub in Tangier.",
  },
  {
    url: "/imgs/road_to_cecil_hotel.jpg",
    caption: "The Hotel in Its Prime",
    year: "circa 1900s",
    description:
      "A bustling scene capturing the hotel's role as a social hub in Tangier.",
  },
  {
    url: "/imgs/road_to_hotel_cecil_1907.jpg",
    caption: "Post Card of Hotel Cecil, 1907",
    year: "circa 1907s",
    description:
      "The post card showcasing the hotel's prominence in Tangier's landscape.",
  },
  {
    url: "/imgs/rt_hon_sir_winston_churchill.jpg",
    caption: "Rt. Hon. Sir Winston Churchill, K.G., O.M., M.P.",
    year: "circa 1900s",
    description:
      "A portrait of Winston Churchill, who was among the notable guests of the Hotel Cecil.",
  },
  {
    url: "/imgs/sir_john_lavery.jpg",
    caption: "Sir John Lavery, Kt., R.A., R.H.A., R.S.A.",
    year: "circa 1900s",
    description:
      "A distinguished artist known for his portraits, including those of prominent figures who frequented the hotel.",
  },
  {
    url: "/imgs/terrace_and_kiosk_1900.jpg",
    caption: "Terrace and Kiosk, 1900",
    year: "circa 1900s",
    description:
      "A view of the terrace and kiosk at the Hotel Cecil, showcasing its vibrant social scene.",
  },
  {
    url: "/imgs/the_arab_corner_of_the_hotel_cecil.jpg",
    caption: "The Arab Corner of the Hotel Cecil, 1900",
    year: "circa 1900s",
    description:
      "The Arab Corner, highlighting the cultural fusion present in the hotel's design and clientele.",
  },
  {
    url: "/imgs/the_hotel_cecil_across_the_river.jpg",
    caption: "The Hotel View Across River",
    year: "circa 1900s",
    description:
      "A picturesque view of the Hotel Cecil from across the river, emphasizing its strategic location.",
  },
  {
    url: "/imgs/the_hotel_cecil_circa_1960.jpg",
    caption: "The Hotel Interior circa 1960s",
    year: "circa 1960s",
    description:
      "A glimpse into the interior design and ambiance of the hotel during the 1960s.",
  },
  {
    url: "/imgs/the_hotel_cecil_circa_1960a.jpg",
    caption: "The Hotel Exterior circa 1960s",
    year: "circa 1960s",
    description: "The exterior of the Hotel Cecil in the 1969s.",
  },
  {
    url: "/imgs/the_hotel_cecil_dec_1913.jpg",
    caption: "The Hotel Cecil, December 1913",
    year: "circa 1960s",
    description:
      "The hotel as it appeared in December 1913, showcasing its enduring charm. Picture taken from pier",
  },
  {
    url: "/imgs/the_marquess_of_blue.jpg",
    caption: "The Marquess of Bute",
    year: "circa 1960s",
    description:
      "The Marquess of Blue, a notable figure associated with the Hotel Cecil during its heyday.",
  },
  {
    url: "/imgs/the_r_rev_bishop_william_collins.jpg",
    caption: "The Rt. Rev. Bishop William Collins",
    year: "circa 1960s",
    description:
      "The R. Rev. Bishop William Collins, an influential guest of the Hotel Cecil.",
  },
  {
    url: "/imgs/the_room_of_the_hotel_1900.jpg",
    caption: "The Drawing room of the Hotel Cecil",
    year: "circa 1900s",
    description:
      "Elegant interior spaces that welcomed European royalty and distinguished travelers.",
  },
  {
    url: "/imgs/unknown_guests_outside_the_hotel_cecil.jpg",
    caption: "Unknown Guests Outside the Hotel Cecil",
    year: "circa 1900s",
    description:
      "A snapshot of guests outside the hotel, reflecting its status as a premier destination.",
  },
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
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedImage(null);
    }
  };

  useState(() => {
    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown as any);
      return () => window.removeEventListener("keydown", handleKeyDown as any);
    }
  });

  return (
    <section id="gallery" className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-amber-400 px-6 py-2 mb-6">
            <p className="text-amber-400 tracking-[0.3em] text-sm">
              PHOTO GALLERY
            </p>
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl text-white">
            Historical Photographs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A visual journey through the Hotel Cecil's illustrious past,
            capturing the essence of Tangier's golden age and the architectural
            splendor that made it truly "no better address."
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
                  <p className="text-sm text-gray-300 line-clamp-2">
                    {photo.description}
                  </p>
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
              The book contains over 100 rare photographs from private archives
              and collections
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
          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={photos[selectedImage].url}
              alt={photos[selectedImage].caption}
              className="w-full h-auto max-h-[80vh] object-contain"
            />

            {/* Image Info */}
            <div className="bg-gray-900/90 backdrop-blur-sm mt-4 p-6 border border-amber-400/30">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl text-white">
                  {photos[selectedImage].caption}
                </h3>
                <span className="text-amber-400 text-sm whitespace-nowrap">
                  {photos[selectedImage].year}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {photos[selectedImage].description}
              </p>
              <div className="mt-4 text-center text-gray-500 text-sm">
                Image {selectedImage + 1} of {photos.length} • Use arrow keys to
                navigate • Press ESC to close
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
