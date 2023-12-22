import { Card } from '@douglasneuroinformatics/ui';

export type OptionProps = {
  Icon: React.ComponentType<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>;
  label: string;
  onClick: () => void;
};

export const Option = ({ Icon, label, onClick }: OptionProps) => {
  return (
    <Card className="min-w-56 bg-white transition-transform duration-300 hover:scale-105">
      <button className="flex h-full w-full flex-col items-center justify-center p-8" type="submit" onClick={onClick}>
        <h5 className="whitespace-nowrap text-lg font-semibold">{label}</h5>
        <Icon className="mt-4" height={64} width={64} />
      </button>
    </Card>
  );
};
