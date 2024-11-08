import {
  EyeSlashIcon,
  EyeIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import ProfileSidebar from '../../components/ProfileSidebar';
import Button from '../../components/Button';

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/5 bg-white p-5 shadow-md md:flex flex-col hidden">
        <div className="text-gray-600 mb-5">
          <h1 className="text-xl font-bold">Project Title</h1>
        </div>
        <ProfileSidebar/>
      </aside>
      <main className="flex-1 p-8 bg-white m-8 rounded-lg">
        <header className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-3xl font-bold">Profile Details</h2>
        </header>
        <section className="flex items-center mb-8 ">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-400 text-4xl"><UserIcon width={60} height={60}/></span>
          </div>
          <div className="ml-6">
            <Button className="block mb-2 text-blue-600 border border-blue-600 px-4 py-2 rounded-lg bg-white hover:bg-blue-600 hover:text-white">
              Upload Photo
            </Button>
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
              <input
                type="text"
                placeholder="AslanHolder"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-600">Label Name</label>
              <input
                type="text"
                placeholder="AslanHolder"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="text-gray-600">Label Name</label>
              <input
                type="text"
                placeholder="AslanHolder"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="text-gray-600">Label Name</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Placeholder"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <a className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                  <EyeSlashIcon width={24} height={24}/>
                </a>
              </div>
            </div>
            <div className="col-span-2">
              <label className="text-gray-600">Label Name</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option>Placeholder</option>
              </select>
            </div>
          </div>
          <Button className="hover:cursor-not-allowed">
            Save
          </Button>
        </section>
      </main>
    </div>
  );
}
