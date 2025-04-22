import React from "react";
import {
  FaGoogle,
  FaLinkedin,
  FaFacebook,
  FaEdit,
  FaLock,
  FaPlus,
  FaCheck,
  FaCamera,
} from "react-icons/fa";
import DashboardLayout from "../../Layout/DashboardLayout";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen w-full bg-gray-100 p-4 md:p-8">
        <h2 className="text-xl font-semibold mb-6">Profile & Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-medium mb-4">Profile Information</h3>
            <div className="flex justify-center mb-4 relative">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                Image
              </div>
              <div className="absolute bottom-3 right-[30%] bg-black text-white p-1 rounded-full cursor-pointer">
                <FaCamera size={14} />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                value="John Doe"
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
              />
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                value="john@example.com"
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
              />
              <label className="text-sm block mb-1">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                value="+1 234 567 890"
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
              />
              <label className="text-sm block mb-1">Bio</label>
              <textarea
                placeholder="Bio"
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
              >
                Student passionate about web development and design.
              </textarea>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-medium mb-4">Account Settings</h3>
            <div className="space-y-3 mb-4">
              <label className="text-sm block mb-1">Change Password</label>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
              />
            </div>
            <div className="mb-4">
              <input type="checkbox" />
              <span className="text-sm"> Two-Factor Authentication</span>
              <p className="text-gray-400 mt-1 text-xs">
                Add extra security to your account
              </p>
            </div>

            <h4 className="text-sm mb-2">Linked Accounts</h4>
            <div className="space-y-2">
              <button className="flex justify-between w-full items-center border border-gray-300 px-3 py-2 rounded text-sm">
                <span className="flex gap-2 items-center">
                  <FaGoogle /> Google
                </span>
                <FaCheck className="text-green-500" />
              </button>
              <button className="flex justify-between w-full items-center border border-gray-300 px-3 py-2 rounded text-sm">
                <span className="flex gap-2 items-center">
                  <FaLinkedin /> LinkedIn
                </span>
                <FaPlus />
              </button>
              <button className="flex justify-between w-full items-center border border-gray-300 px-3 py-2 rounded text-sm">
                <span className="flex gap-2 items-center">
                  <FaFacebook /> Facebook
                </span>
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-medium mb-4">Privacy & Security</h3>
            <div className="mb-4">
              <label className="text-sm block mb-1">Profile Visibility</label>
              <p className="text-gray-400 mt-1 text-xs">
                Control who can see your profile
              </p>
              <select className="w-full border border-gray-300 px-3 py-2 rounded text-sm">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              <p>Blocked Users</p>
              <p className="text-gray-400 mt-1">No blocked users</p>
            </div>
            <h4 className="text-sm mb-2">Activity Log</h4>
            <p className="text-xs text-gray-500 mb-1">
              Last Login: Today, 10:30 AM
            </p>
            <p className="text-xs text-gray-500">
              Password changed: 2 weeks ago
            </p>
          </div>

          {/* Course & Learning Preferences */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-medium mb-4">Course & Learning Preferences</h3>
            <div className="mb-4">
              <label className="text-sm block mb-1">
                Default Video Playback Speed
              </label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded text-sm">
                <option>1x</option>
                <option>1.25x</option>
                <option>1.5x</option>
              </select>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" checked readOnly />
              <span className="text-sm">Enable Captions</span>
            </div>
            <div>
              <label className="text-sm block mb-1">Course Language</label>
              <select className="w-full border border-gray-300 px-3 py-2 rounded text-sm">
                <option>English</option>
              </select>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-medium mb-4">
              Subscription & Payment Settings
            </h3>
            <div className="mb-4">
              <p className="text-sm">
                Current Plan: <span className="font-medium">Pro Plan</span>
              </p>
              <p className="text-xs text-blue-600 cursor-pointer">
                Upgrade Plan
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm mb-1">Payment Methods</p>
              <div className="flex justify-between items-center border border-gray-300 px-3 py-2 rounded text-sm mb-2">
                <span>
                  <FaLock className="inline" /> Visa ending in 4242
                </span>
                <FaEdit className="cursor-pointer" />
              </div>
              <p className="text-xs text-blue-600 cursor-pointer">
                + Add Payment Method
              </p>
            </div>

            <div>
              <p className="text-sm mb-1">Payment History</p>
              <p className="text-xs text-gray-500">
                Pro Plan - Monthly $29.99 - May 1, 2023
              </p>
              <p className="text-xs text-blue-600 cursor-pointer">
                View All Invoices
              </p>
            </div>
          </div>

          {/* Other Options */}
          <div className="bg-white p-5 rounded shadow">
            <h3 className="font-medium mb-4">Other Options</h3>
            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" />
              <span className="text-sm">Dark Mode</span>
            </div>
            <p className="text-sm text-red-500 cursor-pointer mb-4">
              Delete Account Permanently
            </p>
            <p className="text-xs text-gray-500 cursor-pointer mb-1">
              Terms of Service
            </p>
            <p className="text-xs text-gray-500 cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
