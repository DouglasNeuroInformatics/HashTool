import { useNotificationsStore } from '@douglasneuroinformatics/ui';
import { BookOpenIcon, KeyIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { Option } from '../components/Option';

export const HomePage = () => {
  const navigate = useNavigate();
  const notifications = useNotificationsStore();
  return (
    <div>
      <h2 className="mb-12 mt-6 text-center text-xl font-bold">Options</h2>
      <div className="mx-auto flex max-w-screen-md flex-col justify-around gap-6 sm:flex-row">
        <Option Icon={KeyIcon} label="Generate Identifier" onClick={() => navigate('hash')} />
        <Option
          Icon={BookOpenIcon}
          label="Resources"
          onClick={() => {
            notifications.addNotification({ message: 'Not Implemented', type: 'info' });
          }}
        />
      </div>
    </div>
  );
};
