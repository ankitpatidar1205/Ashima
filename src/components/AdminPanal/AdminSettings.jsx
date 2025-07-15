import DashboardLayout from "../../Layout/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>

        <div className="bg-white p-6 rounded-lg shadow">
          {/* Platform Settings UI (No tabs) */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Platform Name"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Website URL"
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Admin Email"
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Support Email"
              className="border p-2 rounded"
            />
            <select className="border p-2 rounded col-span-2">
              <option>UTC (GMT+0)</option>
            </select>

            <div className="col-span-2 flex gap-4 items-center">
              <label>Maintenance Mode:</label>
              <label>
                <input type="radio" name="mode" /> On
              </label>
              <label>
                <input type="radio" name="mode" /> Off
              </label>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="border px-4 py-2 rounded">Cancel</button>
            <button className="bg-teal-700 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
