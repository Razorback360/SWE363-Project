import './userProf.css';

export default function UserProf() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/5 bg-white p-5 shadow-md">
        <div className="text-gray-600 mb-5">
          <h1 className="text-xl font-bold">Project Title</h1>
        </div>
        <nav>
          <ul className="space-y-3">
            <li><button className="w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200">🍆 Profile</button></li>
            <li><button className="w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200">🍆 Previous Donations</button></li>
            <li><button className="w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200">🍆 Old Questionnaires</button></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-3xl font-bold">Profile Details</h2>
        </header>
        <section className="flex items-center mb-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400 text-4xl">🍆</span>
          </div>
          <div className="ml-6">
            <button className="block mb-2 text-blue-600 border border-blue-600 px-4 py-2 rounded-lg">Upload Photo</button>
            <button className="block text-red-500">Remove</button>
          </div>
          <div className="ml-10 text-gray-500">
            <p>Image requirements:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Min. 400 x 400px</li>
              <li>Max. 2MB</li>
              <li>Your ugly face or company logo</li>
            </ul>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">User Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600">Label Name</label>
              <input type="text" placeholder="AslanHolder" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="text-gray-600">Label Name</label>
              <input type="text" placeholder="AslanHolder" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="col-span-2">
              <label className="text-gray-600">Label Name</label>
              <input type="text" placeholder="AslanHolder" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="col-span-2">
              <label className="text-gray-600">Label Name</label>
              <div className="relative">
                <input type="password" placeholder="Placeholder" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                <span className="absolute inset-y-0 right-4 flex items-center cursor-pointer">👁️</span>
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-600">Label Name</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option>Placeholder</option>
              </select>
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-gray-300 text-gray-600 rounded-md">Button Text</button>
        </section>
      </main>
    </div>
  );
}
