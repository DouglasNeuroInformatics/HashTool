import { Form } from '@douglasneuroinformatics/ui';
import { z } from 'zod';

import type { HashInfo } from '../../types';

export type HashInfoFormProps = {
  onSubmit: (info: HashInfo) => void;
};

export const HashInfoForm = ({ onSubmit }: HashInfoFormProps) => {
  return (
    <Form<HashInfo>
      content={[
        {
          description:
            'For security reasons, this information is never saved on your computer or uploaded to a remote server.',
          fields: {
            healthCardNumber: {
              kind: 'text',
              label: 'RAMQ Number',
              variant: 'short'
            }
          },
          title: 'Confidential Information'
        }
      ]}
      validationSchema={z.object({
        healthCardNumber: z.string().regex(/^[A-Za-z]{4}-\d{4}-\d{4}$/, 'Invalid Format')
      })}
      onSubmit={onSubmit}
    />
  );
};
