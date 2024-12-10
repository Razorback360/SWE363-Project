import ProfileSidebar from '../../../components/ProfileSidebar';
import './Questionnaire.css';

const MedicalQuestionnaire = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/5 bg-white p-5 shadow-md md:flex flex-col hidden">
        <div className="text-gray-600 mb-5">
          <h1 className="text-xl font-bold">Medical Questionnaire</h1>
        </div>
        <ProfileSidebar />
      </aside>
      <main className="flex-1 p-8 bg-white m-8 rounded-lg overflow-hidden">
        <header className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-3xl font-bold">Fill Out the Form</h2>
        </header>
        <section className="flex flex-col items-center">
          <div className="w-full max-w-lg">
            <div className="mb-6">
              <img
                src="./Quest.jpg"
                alt="Donation Illustration"
                className="w-full h-auto rounded"
              />
            </div>
            <form action="/submit" method="POST" className="space-y-6">
              <div className="form-group">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="18"
                  max="65"
                  placeholder="Enter your age"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label
                  htmlFor="bloodType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Blood Type
                </label>
                <select
                  id="bloodType"
                  name="bloodType"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select your blood type
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-group">
                <label
                  htmlFor="chronicIllnesses"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chronic Illnesses
                </label>
                <textarea
                  id="chronicIllnesses"
                  name="chronicIllnesses"
                  placeholder="List any chronic illnesses or conditions"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  style={{ height: '100px' }}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="recentMedications"
                  className="block text-sm font-medium text-gray-700"
                >
                  Recent Medications
                </label>
                <textarea
                  id="recentMedications"
                  name="recentMedications"
                  placeholder="List any medications you are currently taking"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  style={{ height: '100px' }}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="previousDonation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Previous Blood Donation
                </label>
                <select
                  id="previousDonation"
                  name="previousDonation"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Have you donated blood before?
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MedicalQuestionnaire;
