import { Form } from '@douglasneuroinformatics/ui';
import { z } from 'zod';

import { useAppStore, type Info } from '@/stores/app-store';

export const InfoForm = () => {
  const { setInfo } = useAppStore();
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
      onSubmit={setInfo}
      validationSchema={z.object({
        healthCardNumber: z.string().min(1)
      })}
    />
  );
};
