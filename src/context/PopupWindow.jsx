import { useState } from "react";

const PopupWindow = ({ title, children, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        onClick={togglePopup} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Open Popup
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={togglePopup} // Closes when clicking outside
        >
          <div 
            className="bg-white p-8 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            <h2 className="text-xl font-bold mb-4">{title}</h2>

            {/* Optional Image */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Popup Image"
                className="mb-4 rounded-lg max-w-full h-auto"
              />
            )}

            <p className="mb-6">{children}</p>
            <button 
              onClick={togglePopup} 
              className="px-4 py-2 bg-red-500 text-white rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupWindow;
