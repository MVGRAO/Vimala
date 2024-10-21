import  { useState } from 'react';
import Nav from "../Nav";

// Import images at the top
import Art1 from '../../assets/Arts/Art-1.jpg';
import Art2 from '../../assets/Arts/Art-2.jpg';
import Art3 from '../../assets/Arts/Art-3.jpg';
import Art4 from '../../assets/Arts/Art-4.jpg';
import Art5 from '../../assets/Arts/Art-5.jpg';
import Art6 from '../../assets/Arts/Art-6.jpg';
import Art7 from '../../assets/Arts/Art-7.jpg';

// Modal Component
// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, image, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg home-background">
        <div className="flex">
          {/* Left side: Image */}
          <div className="w-1/2">
            <img src={image} alt="Modal Art" className="w-full h-full object-cover" />
          </div>
          {/* Right side: Content */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Image Details</h2>
            <p>{content}</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 text-white hover:text-slate-700 duration-500 text-center bg-slate-400 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Arts = () => {
  const [isModalOpen, setIsModalOpen] =useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedContent, setSelectedContent] =useState('');

  const images = [
    { src: Art1, content: 'This is a beautiful pencil sketch of nature.' },
    { src: Art2, content: 'An artistic representation of human emotions.' },
    { src: Art3, content: 'A detailed sketch of an architectural wonder.' },
    { src: Art4, content: 'An abstract art that evokes deep thoughts.' },
    { src: Art5, content: 'A calm and serene landscape sketch.' },
    { src: Art6, content: 'A creative take on modern art.' },
    { src: Art7, content: 'A pencil sketch of a bustling city.' },
  ];

  const openModal = (image, content) => {
    setSelectedImage(image);
    setSelectedContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-nav md:mt-nav+4 home-background">
        <Nav />
        {/* Grid layout for images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(image.src, image.content)}
            >
              <img
                src={image.src}
                alt={`img-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
          content={selectedContent}
        />
      </div>
    </>
  );
};

export default Arts;
