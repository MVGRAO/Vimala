/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import NavBar from "../Nav";
import Mine from "../../assets/Me.jpg"; // Your image import

import { Letter } from '../../Constansts';

const Favorite = ({ isOpen, onClose, songLink }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg home-background">
            <div className="flex">
              {/* Left side: Image */}
              <div className="w-1/2">
                <img src={Mine} alt="Modal Art" className="w-full h-full object-cover" />
              </div>
              {/* Right side: Content */}
              <div className="w-1/2 p-4 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Na Comment Ni Art ki</h2>
                <p>Antha rasavu gesavu naku em cheppalo theliyatle, Pata rupam lo cheputha ok na.....</p>
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
                  className="mt-4 px-4 py-2 w-24 self-start text-white hover:text-slate-700 duration-500 text-center bg-slate-400 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Arts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ageVerified, setAgeVerified] = useState(false); // New state for age verification

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mt-nav md:mt-nav+10 home-background flex flex-col items-center justify-center font-Handlee font-semibold">
        <NavBar />

        {/* Age Verification Section */}
        {!ageVerified && (
          <div className="p-4 text-center">
            <p className="whitespace-pre-line">{Letter}</p>
            <button
              onClick={() => setAgeVerified(true)}
              className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-md"
            >
              Sarley Kshamincha
            </button>
          </div>
        )}

        {/* Display your image with conditional blur */}
        <div
          className={`overflow-hidden rounded-lg cursor-pointer ${!ageVerified ? 'blur-md' : ''}`}
          onClick={() => ageVerified && openModal()}
        >
          <img
            src={Mine}
            alt="My Artwork"
            className="object-cover w-96 h-96"
          />
        </div>

        {/* Modal */}
        <Favorite
          isOpen={isModalOpen}
          onClose={closeModal}
          songLink="https://youtube.com/clip/UgkxIaEv4jtb7bZX7rJzvB-FnMd5mRZqrLc-?si=hVXlP9RbqBvYQt2e" // Pass the song link
        />
      </div>
    </>
  );
};

export default Arts;
