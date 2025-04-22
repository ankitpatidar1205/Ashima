// import React from 'react'
// import DashboardLayout from '../../Layout/DashboardLayout'


// const CreateNewPage = () => {
//   return (
//     <DashboardLayout>
//            <div className="bg-white rounded-lg shadow">
//           <div className="max-w-3xl mx-auto">
//             <form className="space-y-6">
//               {/* Course Title */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Course Title
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
//                   placeholder="Enter course title"
//                 />
//               </div>

//               {/* Category & Type */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Category
//                   </label>
//                   <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
//                     <option>Development</option>
//                     <option>Design</option>
//                     <option>Business</option>
//                     <option>Marketing</option>
//                   </select>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Course Type
//                   </label>
//                   <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
//                     <option>Video Course</option>
//                     <option>Live Course</option>
//                     <option>Hybrid Course</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Course Description
//                 </label>
//                 <textarea
//                   rows="4"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
//                   placeholder="Enter course description"
//                 ></textarea>
//               </div>

//               {/* Thumbnail Upload */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Course Thumbnail
//                 </label>
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                   <FaCloudUploadAlt className="text-3xl text-gray-400 mb-2 mx-auto" />
//                   <p className="text-sm text-gray-500">
//                     Drop your image here or{" "}
//                     <span className="text-custom">browse</span>
//                   </p>
//                 </div>
//               </div>

//               {/* Price & Duration */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Price ($)
//                   </label>
//                   <input
//                     type="number"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
//                     placeholder="Enter price"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Duration (weeks)
//                   </label>
//                   <input
//                     type="number"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
//                     placeholder="Enter duration"
//                   />
//                 </div>
//               </div>

//               {/* Requirements */}
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Course Requirements
//                 </label>
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="text"
//                       className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
//                       placeholder="Add a requirement"
//                     />
//                     <button
//                       type="button"
//                       className="px-4 py-2 bg-custom text-white rounded-lg hover:bg-custom/90"
//                     >
//                       Add
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Actions */}
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//                 >
//                   Save as Draft
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-custom text-white rounded-lg hover:bg-custom/90"
//                 >
//                   Publish Course
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
   
   
// </DashboardLayout>

//   )
// }

// export default CreateNewPage






import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa"; // Ensure the icon is imported correctly
import DashboardLayout from "../../Layout/DashboardLayout"; // Path to your layout file

const CreateNewPage = () => {
  return (
    <DashboardLayout>
      <div className="bg-gray-50  min-h-screen flex">
        <div className="flex-1">
          <main className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Create New Course
              </h1>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="px-4">
                <form className="space-y-6">
                  {/* Course Title */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Course Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
                      placeholder="Enter course title"
                    />
                  </div>

                  {/* Category & Type */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                        <option>Development</option>
                        <option>Design</option>
                        <option>Business</option>
                        <option>Marketing</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Course Type
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                        <option>Video Course</option>
                        <option>Live Course</option>
                        <option>Hybrid Course</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Course Description
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
                      placeholder="Enter course description"
                    ></textarea>
                  </div>

                  {/* Thumbnail Upload */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Course Thumbnail
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <FaCloudUploadAlt className="text-3xl text-gray-400 mb-2 mx-auto" />
                      <p className="text-sm text-gray-500">
                        Drop your image here or{" "}
                        <span className="text-custom">browse</span>
                      </p>
                    </div>
                  </div>

                  {/* Price & Duration */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Price ($)
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
                        placeholder="Enter price"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Duration (weeks)
                      </label>
                      <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
                        placeholder="Enter duration"
                      />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Course Requirements
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom/20"
                          placeholder="Add a requirement"
                        />
                        <button
                          type="button"
                          className="px-4 py-2 bg-custom text-white rounded-lg hover:bg-custom/90"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Save as Draft
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-custom text-white rounded-lg hover:bg-custom/90"
                    >
                      Publish Course
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateNewPage;
