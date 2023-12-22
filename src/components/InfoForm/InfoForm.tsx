import type { Info } from '@/types';
import { Form } from '@douglasneuroinformatics/ui';
import { z } from 'zod';

export type InfoFormProps = {
  onSubmit: (info: Info) => void;
};

export const InfoForm = ({ onSubmit }: InfoFormProps) => {
  return (
    <Form<Info>
      content={[
        {
          title: 'Confidential Information',
          description:
            'For security reasons, this information is never saved on your computer or uploaded to a remote server.',
          fields: {
            healthCardNumber: {
              kind: 'text',
              label: 'RAMQ Number',
              variant: 'short'
            }
          }
        }
      ]}
      onSubmit={onSubmit}
      validationSchema={z.object({
        healthCardNumber: z.string().regex(/^\d{4}-[A-Za-z]{4}-[A-Za-z]{4}$/, 'Invalid Format')
      })}
    />
  );
};
