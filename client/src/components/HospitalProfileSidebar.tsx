import {
    FolderArrowDownIcon,
    HomeIcon,
    InformationCircleIcon,
  } from '@heroicons/react/24/outline';
  import { useLocation } from 'react-router-dom';
  
  import { cn } from '../utils/cn';
  
  const HospitalProfileSidebar = () => {
    const location = useLocation();
    return (
      <nav className="md:w-auto w-full">
        <ul className="space-y-3">
          <li>
            <a
              className={cn(
                location.pathname == '/profile/hospital' ? 'bg-gray-200' : '',
                'w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200 flex flex-row hover:cursor-pointer',
              )}
              href="/profile/hospital"
            >
              <HomeIcon width={24} height={24} className="mr-2" /> Profile
            </a>
          </li>
          <li>
            <a
              className={cn(
                location.pathname == '/profile/hospital/donationsRequests'
                  ? 'bg-gray-200 hover:cursor-default'
                  : '',
                'w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200 flex flex-row hover:cursor-pointer',
              )}
              href="/profile/hospital/donationsRequests"
            >
              <FolderArrowDownIcon width={24} height={24} className="mr-2" />{' '}
            Donation Requests
            </a>
          </li>
          <li>
            <a
              className={cn(
                location.pathname == '/profile/hospital/request'
                  ? 'bg-gray-200 hover:cursor-default'
                  : '',
                'w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200 flex flex-row hover:cursor-pointer',
              )}
              href="/profile/hospital/request"
            >
              <InformationCircleIcon width={24} height={24} className="mr-2" />{' '}
              New Blood Request
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default HospitalProfileSidebar;
  