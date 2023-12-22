import { invoke } from '@tauri-apps/api';
import { useNavigate } from 'react-router-dom';

import { HashInfoForm } from '../components/HashInfoForm';
import { useHashStore } from '../store/hash-store';

export const HashInfoPage = () => {
  const { setHash, setIsLoading } = useHashStore();
  const navigate = useNavigate();

  return (
    <HashInfoForm
      onSubmit={({ healthCardNumber }) => {
        void invoke<string>('hash', { text: healthCardNumber }).then((hash) => {
          setHash(hash);
          setIsLoading(true);
          navigate('/hash/loading');
        });
      }}
    />
  );
};
