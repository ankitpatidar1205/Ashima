import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { addInstructor, getInstructors } from "../../Redux/slices/InstructorSlice/InstructorSlice";
import { fetchCourses } from "../../Redux/slices/CourseSlice/CourseSlice";
import Swal from "sweetalert2";
const AddInstructorModal = ({ isOpen, onClose }) => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [expertise, setExpertise] = useState("");
  const [bank_account_number, setBankAccountNumber] = useState("");
  const [ifsc_code, setIfscCode] = useState("");
  const [profile_image, setProfileImage] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (!isOpen) return null;

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
  
    setPasswordError("");
  
    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("mobile_number", mobile_number);
    formData.append("password", password);
    formData.append("expertise", expertise);
    formData.append("bank_account_number", bank_account_number);
    formData.append("ifsc_code", ifsc_code);
 
    if (profile_image) {
      formData.append("profile_image", profile_image);
    }
  
    try {
      await dispatch(addInstructor(formData)).unwrap();
      await dispatch(getInstructors());
      Swal.fire({
        icon: "success",
        title: "Instructor Added",
        text: "The instructor has been successfully added.",
      });
      onClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl">×</button>
        <h2 className="text-xl font-bold mb-4">Add Instructor</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name & Email */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Full Name</label>
                <input type="text" placeholder="Full Name" className="w-full border px-3 py-2 rounded" value={full_name} onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Email</label>
                <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            {/* Mobile Number & Password */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Mobile Number</label>
                <input type="text" placeholder="Mobile Number" className="w-full border px-3 py-2 rounded" value={mobile_number} onChange={(e) => setMobileNumber(e.target.value)} />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Password</label>
                <input type="password" placeholder="Password" className="w-full border px-3 py-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            {/* Confirm Password & Expertise */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="w-full border px-3 py-2 rounded" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Expertise</label>
                <input type="text" placeholder="Expertise" className="w-full border px-3 py-2 rounded" value={expertise} onChange={(e) => setExpertise(e.target.value)} />
              </div>
            </div>

            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

            {/* Bank Account & IFSC */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Bank Account Number</label>
                <input type="text" placeholder="Bank Account Number" className="w-full border px-3 py-2 rounded" value={bank_account_number} onChange={(e) => setBankAccountNumber(e.target.value)} />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">IFSC Code</label>
                <input type="text" placeholder="IFSC Code" className="w-full border px-3 py-2 rounded" value={ifsc_code} onChange={(e) => setIfscCode(e.target.value)} />
              </div>
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-sm mb-1 font-medium">Profile Image</label>
              <input type="file" accept="image/*" onChange={handleProfileImageChange} className="w-full border px-3 py-2 rounded" />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <button onClick={onClose} type="button" className="border px-4 py-2 rounded">Cancel</button>
              <button type="submit" className="bg-[#047670] text-white px-4 py-2 rounded">Save Instructor</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInstructorModal;
