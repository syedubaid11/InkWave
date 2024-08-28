import React from 'react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" onClick={onClose}></div>
      <div className="fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 w-full max-w-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold">Write a Post</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            &times;
          </button>
        </div>
        <textarea
          rows="6"
          className="w-full p-2 border rounded-md"
          placeholder="Write your post here..."
        ></textarea>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={onClose}>
            Post
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default PostModal;
