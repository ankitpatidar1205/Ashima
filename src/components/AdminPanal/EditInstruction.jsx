import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getInstructors, updateInstructor } from '../../Redux/slices/InstructorSlice/InstructorSlice';

const EditInstruction = () => {
  const { id } = useParams(); // Get the instructor ID from URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const { instructors } = useSelector((state) => state.instructors);

  // Local state for the form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  // Fetch the instructors data on mount
  useEffect(() => {
    dispatch(getInstructors());
  }, [dispatch]);

  // Check if instructors data is loaded
  useEffect(() => {
    console.log(instructors); // Ensure instructors is populated
    const instructor = instructors.find((instructor) => instructor.id == Number(id));
    console.log("filter",instructor)
    if (instructor) {
      setFullName(instructor.full_name);
      setEmail(instructor.email);
      setMobileNumber(instructor.mobile_number);
      setBankAccountNumber(instructor.bank_account_number);
      setIfscCode(instructor.ifsc_code);
      // Optionally, set profile image if needed
    } else {
      console.log('Instructor not found!');
    }
  }, [instructors, id]); // The dependency on 'id' ensures it runs whenever the instructor ID changes

  // Handle form submission for updating the instructor
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the updated instructor data
    const updatedInstructor = {
      id,
      full_name: fullName,
      email,
      mobile_number: mobileNumber,
      bank_account_number: bankAccountNumber,
      ifsc_code: ifscCode,
      profile_image: profileImage, 
    };

    // Dispatch update instructor action
    dispatch(updateInstructor(updatedInstructor));

    // After update, navigate to instructor list or show success message
    navigate('/manage-instructors'); // Adjust route as necessary
  };

  // Handle profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded p-6 relative">
        <button onClick={() => navigate(-1)} className="absolute right-4 top-4 text-xl">×</button>
        <h2 className="text-xl font-bold mb-4">Edit Instructor</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name & Email */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border px-3 py-2 rounded"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border px-3 py-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full border px-3 py-2 rounded"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Bank Account & IFSC */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">Bank Account Number</label>
                <input
                  type="text"
                  placeholder="Bank Account Number"
                  className="w-full border px-3 py-2 rounded"
                  value={bankAccountNumber}
                  onChange={(e) => setBankAccountNumber(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1 font-medium">IFSC Code</label>
                <input
                  type="text"
                  placeholder="IFSC Code"
                  className="w-full border px-3 py-2 rounded"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value)}
                />
              </div>
            </div>

            {/* Profile Image */}
            <div>
              <label className="block text-sm mb-1 font-medium">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full border px-3 py-2 rounded"
                onChange={handleProfileImageChange}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#047670] text-white px-4 py-2 rounded"
              >
                Save Instructor
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditInstruction;
