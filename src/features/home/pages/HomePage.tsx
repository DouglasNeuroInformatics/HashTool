import { BookOpenIcon, KeyIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import { Option } from '../components/Option';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="mb-12 mt-6 text-center text-lg font-bold">Options</h2>
      <div className="mx-auto flex max-w-screen-md justify-around">
        <Option Icon={KeyIcon} label="Generate Identifier" onClick={() => navigate('generate')} />
        <Option Icon={BookOpenIcon} label="Resources" onClick={() => navigate('resources')} />
      </div>
    </div>
  );
};
