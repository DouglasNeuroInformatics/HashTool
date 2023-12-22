import { useHashStore } from '../store/hash-store';

export const HashResultPage = () => {
  const { hash } = useHashStore();
  return (
    <div className="mt-5 flex-grow space-y-3">
      <div>
        <h3 className="text-lg font-semibold">Results for Secure Hash Operation</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Please ensure that you have recorded this result in your records. It will not be saved.
        </p>
      </div>
      <p className="font-semibold tracking-tight">
        <span>Hash: </span>
        {hash}
      </p>
    </div>
  );
};
