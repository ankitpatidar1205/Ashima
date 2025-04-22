import { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";

const tabs = [
  "Platform Settings",
  "Payment Settings",
  "Course Pricing",
  "Policy & Terms",
  "Notifications",
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Platform Settings");

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-6 mb-6 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm ${
                activeTab === tab
                  ? "border-b-2 border-black font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "Platform Settings" && (
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Your Platform Settings UI */}
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Platform Name" className="border p-2 rounded" />
              <input type="text" placeholder="Website URL" className="border p-2 rounded" />
              <input type="email" placeholder="Admin Email" className="border p-2 rounded" />
              <input type="text" placeholder="Support Email" className="border p-2 rounded" />
              <select className="border p-2 rounded col-span-2">
                <option>UTC (GMT+0)</option>
              </select>

              <div className="col-span-2 flex gap-4">
                <label>Maintenance Mode:</label>
                <label><input type="radio" name="mode" /> On</label>
                <label><input type="radio" name="mode" /> Off</label>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="border px-4 py-2 rounded">Cancel</button>
              <button className="bg-teal-700 text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === "Payment Settings" && (
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Your Payment Settings UI */}
            <div className="grid grid-cols-2 gap-4">
              <select className="border p-2 rounded">
                <option>Stripe</option>
              </select>
              <input type="text" placeholder="Minimum Payout Amount" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>USD ($)</option>
              </select>
              <input type="text" placeholder="Payment Fee (%)" className="border p-2 rounded" />
              <div className="col-span-2 flex gap-4">
                <label>Enable Multi Payment:</label>
                <label><input type="radio" name="multi" /> Yes</label>
                <label><input type="radio" name="multi" /> No</label>
              </div>
              <select className="border p-2 rounded col-span-2">
                <option>Weekly</option>
              </select>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="border px-4 py-2 rounded">Cancel</button>
              <button className="bg-teal-700 text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === "Course Pricing" && (
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Your Course Pricing UI */}
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Base Price Min" className="border p-2 rounded" />
              <input type="text" placeholder="Base Price Max" className="border p-2 rounded" />
              <input type="text" placeholder="Price Tier Basic" className="border p-2 rounded" />
              <input type="text" placeholder="Price Tier Premium" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>Percentage Based</option>
              </select>

              <div className="col-span-2 flex gap-4">
                <label>Bundle Pricing:</label>
                <label><input type="radio" name="bundle" /> Enable</label>
                <label><input type="radio" name="bundle" /> Disable</label>
              </div>

              <select className="border p-2 rounded col-span-2">
                <option>Monthly</option>
              </select>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="border px-4 py-2 rounded">Cancel</button>
              <button className="bg-teal-700 text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === "Policy & Terms" && (
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Your Policy & Terms UI */}
            <div className="grid grid-cols-2 gap-4">
              <textarea placeholder="Terms of Service" className="border p-2 rounded"></textarea>
              <textarea placeholder="Cookie Policy" className="border p-2 rounded"></textarea>
              <textarea placeholder="Privacy Policy" className="border p-2 rounded col-span-2"></textarea>

              <div className="col-span-2 flex gap-4 flex-wrap">
                <label><input type="checkbox" /> Notify user about policy changes</label>
                <label><input type="checkbox" /> Require user re-acceptance</label>
              </div>

              <input type="date" className="border p-2 rounded col-span-2" />
            </div>

            <div className="flex gap-4 mt-4">
              <button className="border px-4 py-2 rounded">Cancel</button>
              <button className="bg-teal-700 text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === "Notifications" && (
          <div className="bg-white p-6 rounded-lg shadow">
            {/* Your Notifications UI */}
            <div className="grid grid-cols-2 gap-4">
              <label><input type="checkbox" /> Course Updates</label>
              <label><input type="checkbox" /> New Assignments</label>
              <label><input type="checkbox" /> Discussion Responses</label>

              <div className="col-span-2 flex gap-4 flex-wrap">
                <label><input type="checkbox" /> Enable Push Notification</label>
                <label><input type="checkbox" /> Course Reminders</label>
                <label><input type="checkbox" /> Due Date Alerts</label>
              </div>

              <input type="time" placeholder="Start Time" className="border p-2 rounded col-span-1" />
              <input type="time" placeholder="End Time" className="border p-2 rounded col-span-1" />
            </div>

            <div className="flex gap-4 mt-4">
              <button className="border px-4 py-2 rounded">Cancel</button>
              <button className="bg-teal-700 text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Settings;
