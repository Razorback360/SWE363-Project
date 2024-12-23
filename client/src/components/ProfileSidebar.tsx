import {
  FolderArrowDownIcon,
  HomeIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

import { cn } from '../utils/cn';

const ProfileSidebar = () => {
  const location = useLocation();
  return (
    <nav className="md:w-auto w-full">
      <ul className="space-y-3">
        <li>
          <a
            className={cn(
              location.pathname == '/profile' ? 'bg-gray-200' : '',
              'w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200 flex flex-row hover:cursor-pointer',
            )}
            href="/profile"
          >
            <HomeIcon width={24} height={24} className="mr-2" /> Profile
          </a>
        </li>
        <li>
          <a
            className={cn(
              location.pathname == '/profile/donations'
                ? 'bg-gray-200 hover:cursor-default'
                : '',
              'w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200 flex flex-row hover:cursor-pointer',
            )}
            href="/profile/donations"
          >
            <FolderArrowDownIcon width={24} height={24} className="mr-2" />{' '}
            Previous Donations
          </a>
        </li>
        <li>
          <a
            className={cn(
              location.pathname == '/profile/questionnaire'
                ? 'bg-gray-200 hover:cursor-default'
                : '',
              'w-full text-left py-2 px-3 text-gray-600 rounded-md hover:bg-gray-200 flex flex-row hover:cursor-pointer',
            )}
            href="/profile/questionnaire"
          >
            <InformationCircleIcon width={24} height={24} className="mr-2" />{' '}
            Fill Out Questionnaire
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileSidebar;
