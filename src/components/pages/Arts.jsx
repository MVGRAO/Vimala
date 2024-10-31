import { useState } from 'react';
import Nav from "../Nav";

// Import images at the top
import Art1 from '../../assets/Arts/Art-1.jpg';
import Art2 from '../../assets/Arts/Art-2.jpg';
import Art3 from '../../assets/Arts/Art-3.jpg';
import Art4 from '../../assets/Arts/Art-4.jpg';
import Art5 from '../../assets/Arts/Art-5.jpg';
import Art6 from '../../assets/Arts/Art-6.jpg';
import Art7 from '../../assets/Arts/Art-7.jpg';

import { Art } from '../../Constansts';

// Modal Component
// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, image, content,songLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-Sawarabi bg-opacity-50">
      <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg home-background">
        <div className="flex">
          {/* Left side: Image */}
          <div className="w-1/2">
            <img src={image} alt="Modal Art" className="w-full h-full object-cover" />
          </div>
          {/* Right side: Content */}
          <div className="w-1/2 p-4 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Na Comment Ni kala ki</h2>
            <p>{content}</p>
            <a
              href={songLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-slate-500 mt-3"
            >
              Dedicated song for this Art
            </a>
            <button
              onClick={onClose}
              className="mt-4  w-24 self-startpx-4 py-2 text-white hover:text-slate-700 duration-500 text-center bg-slate-400 rounded-md"
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedContent, setSelectedContent] = useState('');
  const [selectedSongLink, setSelectedSongLink] = useState('');
  const [ageVerified, setAgeVerified] = useState(false); // New state for age verification

  const images = [
    { src: Art1, content: 'Baley convey chesavu.....', songLink: 'https://youtube.com/clip/UgkxVzm6xUzyPgwfT5MY0g3Ozj5rCvjq_ODy?si=AycRBvtkPOe3kfaD' },
    { src: Art2, content: 'Ela dance vesi post pettachu ga.....', songLink: 'https://youtu.be/4CKFAb1FNns?si=WzIm8Hmm_ua8q1gA' },
    { src: Art3, content: 'Ekkada two butterflies face to face chusukuntunnayi evaru andhanga vunnaru ani.....Nuvve le 🦋', songLink: 'https://youtu.be/7oNPj60P5XQ?si=dlz0Quormqsp9MK9' },
    { src: Art4, content: 'Ohoo aaa eddaru evaru enti', songLink: 'https://youtu.be/gQ5qVtoLMk4?si=c-5W2Du06Qyl90Zs' },
    { src: Art5, content: 'Nee photo nuvvu gisthe adhe nemali ayipothadhi ga', songLink: 'https://youtu.be/vthqxZ0aB5o?si=BM6sD6izcBoWXxaN' },
    { src: Art6, content: 'Krishnudu pakkana sathya bhama na , radha na.....Just joking bagundhi 😁', songLink: 'https://youtube.com/clip/UgkxHTRd8DagFFWG_eySdF2fieJMCN8nmOry?si=OtIvrPBT8o7amdDs' },
    { src: Art7, content: 'Nee first Mandala Art,Eppudu best avvakuda dhu,Edhi antha bagundhi', songLink: 'https://youtu.be/vthqxZ0aB5o?si=BM6sD6izcBoWXxaN' },
  ];

  const openModal = (image, content, songLink) => {
    setSelectedImage(image);
    setSelectedContent(content);
    setSelectedSongLink(songLink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-nav md:mt-nav+4 home-background">
        <Nav />
        {/* Age Verification Section */}
        {!ageVerified && (
          <div className="p-4 text-center font-Handlee font-semibold">
            <p className='whitespace-pre-line'>{Art}</p>
            <button
              onClick={() => setAgeVerified(true)}
              className="mt-2 px-4 py-2  bg-gray-400 text-white  rounded-md"
            >
              Sare Chustha
            </button>
          </div>
        )}
        
        {/* Grid layout for images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg cursor-pointer ${!ageVerified ? 'blur-md' : ''}`}
              onClick={() => ageVerified && openModal(image.src, image.content,image.songLink)}
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
          songLink={selectedSongLink} // Pass the song link
        />
      </div>
    </>
  );
};

export default Arts;
