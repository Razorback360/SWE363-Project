import {
    ArrowLeftIcon,
    EyeSlashIcon,
    UserIcon,
  } from '@heroicons/react/24/outline';
  
  import Button from '../../../components/Button';
  import HospitalProfileSidebar from '../../../components/HospitalProfileSidebar';
  
  export default function Profile() {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-1/5 bg-white p-5 shadow-md md:flex flex-col hidden">
          <div className="text-gray-600 mb-5">
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
          <HospitalProfileSidebar />
        </aside>
        <main className="flex-1 p-8 bg-white m-8 rounded-lg">
          <header className="flex justify-between items-center border-b pb-4 mb-8">
            <h2 className="text-3xl font-bold md:flex hidden">Profile Details</h2>
            <h2 className="text-3xl font-bold md:hidden flex text-center items-center justify-center">
              <a href="/profile/mobile">
                <ArrowLeftIcon width={24} height={24} className="mr-5" />
              </a>
              Profile Details
            </h2>
          </header>
          <section className="flex items-center mb-8 ">
            <div className="md:w-32 md:h-32 w-19 h-19 bg-gray-200 rounded-full flex items-center justify-center ">
              <span className="text-gray-400 text-4xl">
                <UserIcon width={60} height={60} />
              </span>
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
            <form className="">
              <div>
                <label className="text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="AslanHolder"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  pattern="^[A-Za-z]+$"
                  title="First name must be alphabetic letters only."
                />
              </div>
              <div className="col-span-2">
                <label className="text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="AslanHolder"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  title="Email must be in the following example format: janedoe12@outlook.com"
                />
              </div>
              <Button type="submit" className="hover:cursor-not-allowed">
                Save
              </Button>
            </form>
          </section>
        </main>
      </div>
    );
  }
  