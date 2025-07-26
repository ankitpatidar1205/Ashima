import React, { useEffect } from "react";
import { FaSearch, FaDownload, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";
import { useState } from "react";
import AddArticleModal from "./AddArticle";
import { fetchArticles, deleteArticle,publishArticle} from "../../Redux/slices/articleSlice/articleSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Blogs_article = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  useEffect(() => {
  setCurrentPage(1);
}, [searchQuery]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteArticle(id))
          .unwrap()
          .then(() => {
            Swal.fire("Deleted!", "Blog has been deleted.", "success");
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };
  const { articles } = useSelector((state) => state.articles);
  const isPublish = async(id,status)=>{
     await  dispatch(publishArticle({id,status}))
     dispatch(fetchArticles())
  }
const filteredArticles = articles?.filter((item) =>
  item?.title?.toLowerCase().includes(searchQuery) ||
  item?.category_name?.toLowerCase().includes(searchQuery) ||
  item?.tags?.toLowerCase().includes(searchQuery)
);

const totalPages = Math.ceil(filteredArticles?.length / itemsPerPage);
const paginatedArticles = filteredArticles?.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Blogs / Articles</h2>
            <p className="text-xs text-gray-500">
              Manage and monitor all blog posts and articles
            </p>
          </div>
          <div className="flex gap-2">
          
            <button  className="bg-[#047670] text-white px-4 py-2 rounded-lg text-sm" onClick={() => setIsModalOpen(true)} >
              + Add New Article
            </button>

            <AddArticleModal  isOpen={isModalOpen}  onClose={() => setIsModalOpen(false)} />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="flex flex-1 gap-2 items-center w-full">
            <div className="relative w-full md:w-[360px]">
             <input  type="text"  placeholder="Search articles..."  className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none"  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}/>

              <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "#",
                  "Image",
                  "Title",
                  "Category",
                  "Tag",
                  "Status",
                  "Actions",
                ].map((head) => (
                  <th key={head} className="px-4 py-3">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedArticles?.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
                  <td className="px-4 py-3">
                    <img  src={item.article}  alt="" style={{ width: "40px",  height: "40px",    borderRadius: "50%",   }} />
                  </td>
                 <td>
                    <p className="font-medium">{item?.title}</p>
                  </td>
                  <td className="px-4 py-3">{item?.category_name}</td>
                  <td className="px-4 py-3">{item?.tags}</td>
                  <td className="px-4 py-3">
                    <button
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item?.status === "0"  ? "bg-red-100 text-yellow-800"  : "bg-green-100 text-green-600"
                      }`}
                      onClick={() => isPublish(item?.id,item?.status === "0"?"1":"0")} >
                      {item?.status === "0" ? "Draft" : "Published"}
                    </button>
                  </td>
                  <td className="px-4 py-3 flex gap-3 items-center">
                    <Link to={`/blogsDetail/${item?.id}`}> <FaEye  className="text-blue-600 cursor-pointer"/></Link>
                    <FaTrash  className="text-red-600 cursor-pointer"   onClick={() => handleDelete(item?.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="p-4 text-sm flex justify-between items-center flex-wrap">
  <span>
    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
    {Math.min(currentPage * itemsPerPage, filteredArticles?.length)} of{" "}
    {filteredArticles?.length} entries
  </span>
  <div className="flex gap-2 mt-2 md:mt-0">
    <button className="border px-3 py-1 rounded text-sm" disabled={currentPage === 1}  onClick={() => setCurrentPage((prev) => prev - 1)} >
      Previous
    </button>
    {Array.from({ length: totalPages }, (_, i) => (
      <button   key={i}   className={`border px-3 py-1 rounded text-sm ${
          currentPage === i + 1 ? "bg-[#047670] text-white" : ""   }`}  onClick={() => setCurrentPage(i + 1)} >     {i + 1} </button>   ))}
    <button  className="border px-3 py-1 rounded text-sm"  disabled={currentPage === totalPages}  onClick={() => setCurrentPage((prev) => prev + 1)}>
      Next
    </button>
  </div>
</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Blogs_article;
