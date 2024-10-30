import { useState } from "react";
import NavBar from "../Nav";
import { db } from "../../../firebaseConfig.js";
import { ref, push, serverTimestamp } from "firebase/database";

const Contact = () => {
  const [myName, setMyName] = useState("");
  const [yourName, setYourName] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); // State to manage alert message
  const [isAlertVisible, setIsAlertVisible] = useState(false); // State to control alert visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await push(ref(db, "contacts"), {
        myName,
        yourName,
        message,
        timestamp: serverTimestamp()
      });
      setAlertMessage("Message sent successfully!"); // Success message
      setIsAlertVisible(true);
      setTimeout(() => setIsAlertVisible(false), 3000); // Hide alert after 3 seconds
      setMyName("");
      setYourName("");
      setMessage("");
    } catch (error) {
      console.error("Error adding message: ", error);
      setAlertMessage("Error sending message. Please try again."); // Error message
      setIsAlertVisible(true);
      setTimeout(() => setIsAlertVisible(false), 3000); // Hide alert after 3 seconds
    }
  };
  
  return (
    <>
      <NavBar />
      <div className="mt-nav md:mt-14 flex flex-col gap-3 items-center justify-center min-h-screen home-background">
        {isAlertVisible && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-xs p-4 bg-gray-100 border border-slate-400 text-slate-700 rounded-md shadow-lg z-50">
            {alertMessage}
          </div>
        )}
        <div className="w-full max-w-lg p-6 rounded-lg shadow-lg font-Borel font-extralight">
          <h2 className="text-2xl mb-6 text-center font-Borel font-extralight">Forgiving Conformation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">My Name</label>
              <input
                type="text"
                placeholder="According to you....."
                value={myName}
                onChange={(e) => setMyName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="According to me....."
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Edho Okati cheppuu kindana</label>
              <textarea
                placeholder="Naku emaina ceppali ante cheppu....."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full font-light px-4 py-2 pt-4 bg-gray-400 text-gray-600 text-xl rounded-lg shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="font-Playwrite">
          <a
            href="https://www.instagram.com/xjgaja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-gray-800 underline"
          >
            Meet the Owner of Artist and Website
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
