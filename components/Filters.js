export default function Filters() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Filters</h2>
        <button className="text-teal-700 text-sm">Clear All</button>
      </div>

      <button className="w-full bg-white border border-teal-700 text-teal-700 rounded-lg py-2 mb-4">
        Show Doctors Near Me
      </button>

      {/* Mode of Consult */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Mode of Consult</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" defaultChecked />
            <span>Hospital Visit</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" defaultChecked />
            <span>Online Consult</span>
          </label>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Experience (In Years)</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" />
            <span>0-5</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" />
            <span>6-10</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" />
            <span>11-16</span>
          </label>
        </div>
        <button className="text-teal-700 text-sm mt-2">+1 More</button>
      </div>

      {/* Fees */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Fees (In Rupees)</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" />
            <span>100-500</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" />
            <span>500-1000</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" />
            <span>1000+</span>
          </label>
        </div>
      </div>

      {/* Language */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Language</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" />
            <span>English</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="text-teal-700 rounded" />
            <span>Hindi</span>
          </label>
        </div>
      </div>
    </div>
  )
} 