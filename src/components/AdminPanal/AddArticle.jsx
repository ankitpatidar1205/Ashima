// import React from "react";

// const AddNewArticle = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-2xl mx-auto bg-white shadow-sm rounded p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold">Add New Article</h1>
//           <button className="text-gray-500 text-sm">Cancel</button>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium">Blog Title</label>
//           <input
//             type="text"
//             placeholder="Enter blog title..."
//             className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium">Category</label>
//           <select className="w-full border rounded px-3 py-2 text-sm focus:outline-none">
//             <option>Select category</option>
//           </select>
//         </div>

//         <div className="mb-4 border-dashed border-2 border-gray-300 rounded flex items-center justify-center h-40 text-center text-gray-500 text-sm">
//           <div>
//             <p className="mb-2">Drag and drop your image here or</p>
//             <span className="text-blue-600 cursor-pointer">browse files</span>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium">Blog Content</label>
//           <div className="border rounded p-2 mb-2 flex items-center gap-2">
//             <button className="font-bold text-sm">B</button>
//             <button className="italic text-sm">I</button>
//             <button className="underline text-sm">U</button>
//             <button className="text-sm">•</button>
//             <button className="text-sm">🔗</button>
//           </div>
//           <textarea
//             placeholder="Write your blog content here..."
//             className="w-full border rounded px-3 py-2 text-sm focus:outline-none min-h-[150px]"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium">Tags</label>
//           <input
//             type="text"
//             placeholder="Add tags separated by commas..."
//             className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
//           />
//         </div>

//         <div className="flex items-center mb-4">
//           <input type="checkbox" className="mr-2" />
//           <label className="text-sm">Publish immediately</label>
//         </div>

//         <div className="flex justify-end gap-3">
//           <button className="px-4 py-2 text-sm border rounded text-gray-700">
//             Save as Draft
//           </button>
//           <button className="px-4 py-2 text-sm bg-black text-white rounded">
//             Publish Article
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNewArticle;






import React from "react";

const AddArticleModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[600px] max-w-full p-6 rounded-lg relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-1">Add New Article</h2>
        <p className="text-sm text-gray-500 mb-4">
          Create and publish a new blog post
        </p>

        <div className="mb-3">
          <label className="text-sm font-medium">Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title..."
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Category</label>
          <select className="w-full border border-gray-300 p-2 rounded mt-1">
            <option>Select category</option>
          </select>
        </div>

        <div className="mb-3 border border-dashed border-gray-300 rounded p-6 text-center text-gray-500">
          <p>
            Drag and drop your image here or{" "}
            <span className="text-blue-600 cursor-pointer">browse files</span>
          </p>
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Blog Content</label>
          <div className="border border-gray-300 rounded mt-1 p-2">
            <div className="flex gap-2 mb-2 text-gray-500 text-lg">
              <b>B</b>
              <i>I</i>
              <u>U</u>
              <span>•</span>
              <span>link</span>
            </div>
            <textarea
              placeholder="Write your blog content here..."
              className="w-full border border-gray-300 p-2 rounded h-32"
            ></textarea>
          </div>
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium">Tags</label>
          <input
            type="text"
            placeholder="Add tags separated by commas..."
            className="w-full border border-gray-300 p-2 rounded mt-1"
          />
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-sm">Publish immediately</span>
          </div>

          <div className="flex gap-2">
            <button className="bg-gray-200 px-4 py-2 rounded text-sm">
              Save as Draft
            </button>
            <button className="bg-[#047670] text-white px-4 py-2 rounded text-sm">
              Publish Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArticleModal;
