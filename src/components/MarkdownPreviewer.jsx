import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'tailwindcss/tailwind.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleClear = () => {
    setMarkdown('');
  };

  const handleCopy = () => {
    if (markdown) {
        navigator.clipboard.writeText(markdown);
        toast.success('Markdown copied to clipboard!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
        
    }
    
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Markdown </h1>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 md:mb-0 md:w-1/2">
          <textarea
            className="w-full h-40 md:h-full resize-none outline-none mb-4"
            value={markdown}
            onChange={handleChange}
            placeholder="Markdown yazısı daxil edin"
          ></textarea>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              onClick={handleClear}
            >
              Təmizlə
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              onClick={handleCopy}
            >
              Kopyala
            </button>
            {/* Add any additional buttons here */}
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg overflow-auto md:w-1/2">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default MarkdownPreviewer;
