import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import Badge from '../../../components/Badge';
import HospitalProfileSidebar from '../../../components/HospitalProfileSidebar';
import './donation.css';

export default function Donations() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/5 bg-white p-5 shadow-md md:flex flex-col hidden">
        <div className="text-gray-600 mb-5">
          <h1 className="text-xl font-bold">Donation Requests</h1>
        </div>
        <HospitalProfileSidebar />
      </aside>
      <main className="flex-1 p-8 bg-white m-8 rounded-lg overflow-hidden">
        <header className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-3xl font-bold md:flex hidden">
            Donation Requests
          </h2>
          <h2 className="text-3xl font-bold md:hidden flex text-center items-center justify-center">
            <a href="/profile/mobile">
              <ArrowLeftIcon width={24} height={24} className="mr-5" />
            </a>
            Donation Requests
          </h2>
        </header>
        <section className="flex items-center mb-8 overflow-x-auto">
          <table className="table-auto">
            <thead>
              <tr>
                <th>Recipients</th>
                <th>Request Date</th>
                <th>Request Blood</th>
                <th>Requested Amount</th>
                <th>Requested ID</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Doe</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>
                  <Badge badgeType="high">High</Badge>
                </td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>
                  <Badge badgeType="medium">Medium</Badge>
                </td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>
                  <Badge badgeType="low">Low</Badge>
                </td>
              </tr>
              <tr>
                <td>Jane Doe</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>Cell Text</td>
                <td>
                  <Badge>Badge</Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
