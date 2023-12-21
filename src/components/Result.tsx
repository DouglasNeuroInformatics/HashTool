import { Button } from '@douglasneuroinformatics/ui';

export type ResultProps = {
  hash: string;
  onComplete: () => void;
};

export const Result = ({ hash, onComplete }: ResultProps) => {
  return (
    <div className="space-y-3">
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
      <div className="flex gap-3">
        <Button label="Print Result" type="button" onClick={() => print()} />
        <Button label="Go Back" type="button" variant="secondary" onClick={onComplete} />
      </div>
    </div>
  );
};
