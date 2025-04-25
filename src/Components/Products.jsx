import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ImageIcon, X } from "lucide-react";

function Gallery() {
  const images = [
    "https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
"https://i.pinimg.com/736x/98/50/96/9850963800a4fd1d19fb895b4bf4fbd5.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-16 w-full mx-auto">
      <h2 className="text-3xl font-bold text-orange mb-8 text-center">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-4 flex flex-col items-center w-[90%] mx-auto"
          >
            {/* the image with zoom-on-hover */}
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className={`
                w-full h-58 object-cover rounded-lg mb-4 
                transform transition-transform duration-300 
                hover:scale-110 cursor-pointer
              `}
              onClick={() => setSelectedImage(src)}
            />

            {/* gallery-icon button */}
            <button
              onClick={() => setSelectedImage(src)}
              className="
                border border-white rounded-full p-3 
                hover:bg-white hover:text-pink-600 
                transition duration-300
              "
            >
              <ImageIcon className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>

      {/* ——— Modal / Lightbox ——— */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-70"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Full view"
              className="rounded-lg max-w-full max-h-[80vh] object-contain mx-auto shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-4 right-4 
                text-white bg-black bg-opacity-50 p-2 rounded-full 
                hover:bg-opacity-70 transition
              "
            >
              <X className="w-6 h-6" />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}

export default Gallery;
